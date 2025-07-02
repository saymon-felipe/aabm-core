// speechToTextService.js
const speech = require('@google-cloud/speech');
require('dotenv').config(); // Garante que as variáveis de ambiente sejam carregadas

class SpeechToTextService {
    constructor(ioInstance) {
        this.io = ioInstance;
        this.speechClient = new speech.SpeechClient();
        this.recognizeStream = null;
        this.isTranscribing = false;
    }

    /**
     * Inicia o stream de reconhecimento de fala da Google Cloud Speech-to-Text.
     * @param {string} languageCode - O código do idioma (ex: 'en-US', 'pt-BR').
     */
    startRecognitionStream(languageCode = 'en-US') {
        if (this.isTranscribing) {
            console.warn('Stream de reconhecimento já está ativo.');
            return;
        }

        console.log(`Iniciando stream de reconhecimento Speech-to-Text com idioma: "${languageCode}"`);

        // Configuração da requisição para a API Speech-to-Text
        // IMPORTANTE: O mimeType 'audio/webm; codecs=opus' do MediaRecorder no frontend
        // corresponde a encoding: 'WEBM_OPUS' e sampleRateHertz: 48000.
        const request = {
            config: {
                encoding: 'WEBM_OPUS',        // Formato do áudio do MediaRecorder do navegador
                sampleRateHertz: 48000,        // Taxa de amostragem comum para WEBM_OPUS
                languageCode: languageCode,
                enableAutomaticPunctuation: true,
                model: 'default', // Pode usar 'video' se for principalmente fala de vídeos
                // alternativeLanguageCodes: ['pt-BR'], // Opcional: para múltiplos idiomas
            },
            interimResults: true, // Para receber resultados parciais
        };

        // Cria o stream de reconhecimento do Google
        this.recognizeStream = this.speechClient
            .streamingRecognize(request)
            .on('error', (error) => {
                console.error('Erro no stream de reconhecimento da API Speech-to-Text:', error);
                this.io.emit('transcriptionError', 'Erro na transcrição: ' + error.message);
                this.stopRecognitionStream(); // Parar o stream em caso de erro grave
            })
            .on('data', (data) => {
                const result = data.results[0];
                if (result && result.alternatives[0]) {
                    const transcript = result.alternatives[0].transcript;
                    const isFinal = result.isFinal;
                    const confidence = result.alternatives[0].confidence;

                    // Envia a transcrição para todos os clientes Socket.IO
                    this.io.emit('transcriptionResult', {
                        text: transcript,
                        isFinal: isFinal,
                        confidence: confidence
                    });

                    if (isFinal) {
                        console.log(`Transcrição FINAL: ${transcript}`);
                    } else {
                        console.log(`Transcrição PARCIAL: ${transcript}`);
                    }
                }
            });

        this.isTranscribing = true;
        console.log('Stream de reconhecimento Speech-to-Text iniciado.');
        return this.recognizeStream; // Retorna o stream para que o chamador possa escrever nele
    }

    /**
     * Escreve chunks de áudio no stream de reconhecimento da Google.
     * @param {Buffer} audioChunk - Um chunk de dados de áudio (Buffer) recebido do frontend.
     */
    writeAudioChunk(audioChunk) {
        if (this.recognizeStream && !this.recognizeStream.writableEnded) {
            this.recognizeStream.write(audioChunk);
        } else {
            // console.warn('Stream de reconhecimento não está pronto para receber áudio ou já foi encerrado.');
        }
    }

    /**
     * Encerra o stream de reconhecimento de fala.
     */
    stopRecognitionStream() {
        if (this.isTranscribing && this.recognizeStream) {
            this.recognizeStream.end();
            this.recognizeStream = null;
            this.isTranscribing = false;
            console.log('Stream de reconhecimento Speech-to-Text encerrado.');
        }
    }
}

module.exports = SpeechToTextService;