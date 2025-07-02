const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const SpeechToTextService = require('./speechToTextService');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const userContext = require("./userContext.js");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
    maxHttpBufferSize: 1e7
});

const speechToTextService = new SpeechToTextService(io);

// Configuração do Gemini
// Garanta que GEMINI_API_KEY está no seu .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
    res.send('Servidor AABM rodando. Conecte-se via cliente para iniciar a transcrição.');
});

io.on('connection', (socket) => {
    console.log('Um usuário conectado ao Socket.IO:', socket.id);

    socket.on('startTranscription', (data = {}) => {
        const language = data.language || 'en-US';
        if (!speechToTextService.isTranscribing) {
            speechToTextService.startRecognitionStream(language);
            socket.emit('status', 'Transcrição iniciada!');
        } else {
            socket.emit('status', 'Transcrição já está em andamento.');
        }
    });

    socket.on('stopTranscription', () => {
        speechToTextService.stopRecognitionStream();
        socket.emit('status', 'Transcrição parada!');
    });

    socket.on('audioChunk', (audioChunk) => {
        speechToTextService.writeAudioChunk(audioChunk);
    });

    socket.on('requestResponse', async (data) => {
        const originalText = data.text;
        const conversationContext = data.context;
        console.log(`Backend: Recebido pedido de resposta para: "${originalText}"`);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const userProfileJson = JSON.stringify(userContext, null, 2); 

            const prompt = `Based on the user’s comprehensive professional and personal profile below, and considering the most recent question/statement below, generate a concise, short, and relevant response or follow-up. The response should align with the user’s education, skills, and career goals, as if you were the user speaking in a job interview. If it’s a question, answer it. If it’s a statement, generate a professional follow-up or comment. Keep the response direct, concise, and short, using clear, easy-to-understand language. The goal is for the user (who has a B1 level of English) to be able to quickly read/listen to both the questions and the generated responses. Use simpler phonetic words and phrases to prevent any misunderstandings between the user and the other person.

                User's Comprehensive Profile (JSON format):
                ${userProfileJson}

                Previous questions and responses on the conversation to provide context:
                ${conversationContext}

                Latest interview question or statement to respond to:
                "${originalText}"
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const responseText = response.text();

            console.log(`Backend: Resposta gerada: "${responseText}"`);
            socket.emit('responseResult', { originalText: originalText, responseText: responseText });

        } catch (error) {
            console.error('Erro ao gerar resposta com Gemini:', error);
            socket.emit('transcriptionError', 'Erro ao gerar resposta: ' + error.message);
        }
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
        if (io.engine.clientsCount === 0) {
            console.log('Último cliente desconectado. Parando stream de reconhecimento.');
            speechToTextService.stopRecognitionStream();
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});