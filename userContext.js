const userContext = {
    // 1. Visão Geral Pessoal e Profissional (Elevator Pitch)
    overview: {
        headline: "Desenvolvedor Full Stack com Foco em Produto | Performance, Escalabilidade e Valor de Negócio.", // Sua "manchete" profissional
        elevatorPitch: "Sou Saymon Felipe, um desenvolvedor full stack focado em traduzir desafios de negócio em soluções de software robustas e de alta performance. Com sólida experiência em React, Vue.js, Node.js e Nuxt.js, construo a ponte entre as necessidades do usuário e os objetivos da empresa. Minha atuação vai além do código: envolvo-me na arquitetura do sistema e na otimização de processos com práticas DevOps (Docker, Azure, AWS), sempre com o objetivo de entregar valor real e mensurável.",
    },

    // 2. Informações Pessoais Relevantes (Apresentação, mas sem dados sensíveis)
    personal: {
        name: "Saymon Felipe de Lima",
        location: "Curitiba, Paraná, Brasil", // Sua localização atual
        timezone: "GMT-3 (Horário de Brasília)", // Importante para equipes distribuídas
        workingPreference: "Remoto / Híbrido (com flexibilidade) / Presencial (se a empresa for em Curitiba)", // Sua preferência de trabalho
        communicationStyle: "Direta e colaborativa. Valorizo a comunicação clara e feedback construtivo.",
        learningStyle: "Aprendizado contínuo e hands-on. Gosto de explorar novas tecnologias e resolver problemas práticos.",
        values: "Inovação, colaboração, impacto, aprendizado, integridade.", // Valores que você busca em um ambiente de trabalho
    },

    // 3. Experiência Profissional (Detalhada)
    career: {
        totalYearsExperience: "5 anos",
        roles: [
            {
                title: "Desenvolvedor(a) Full-stack Pleno", // ou Pleno, Júnior
                company: "Solutto - ERP para Franquias",
                duration: "2021 - Atualmente",
                responsibilities: [
                    "Desenvolvimento e manutenção de código legado e APIs RESTful.",
                    "Criação de interfaces de usuário responsivas com Vue.js, CSS e ASP.NET",
                    "Gerenciamento de bancos de dados [SQL], incluindo otimização de queries.",
                    "Implementação de soluções de integração com APIs de terceiros (ex: Google Cloud, OpenAI).",
                    "Participação em todo o ciclo de vida de desenvolvimento de software, desde o design até o deploy e monitoramento.",
                    "Liderança técnica de inúmeros projetos, mentorando desenvolvedores juniores."
                ],
                achievements: [
                    "Redução de 45% na latência de processamento de dados ao otimizar consultas e infraestrutura de back-end e banco de dados.",
                    "Implementação de um novo módulo de marketplace que resultou em 80% de aumento na satisfação do cliente.",
                    "Automatização de criação de requisitos de OS (ordem de serviço) utilizando IA, que economizou 20 horas/mês de trabalho manual."
                ]
            },
            {
                title: "Desenvolvedor(a) Full Stack Pleno",
                company: "Mokaly",
                duration: "2021 - Atualmente",
                responsibilities: [
                    "Desenvolvimento e manutenção de código legado e APIs RESTful.",
                    "Criação de interfaces de usuário responsivas com Vue.js, CSS e ASP.NET",
                    "Gerenciamento de bancos de dados [SQL], incluindo otimização de queries.",
                    "Participação em todo o ciclo de vida de desenvolvimento de software, desde o design até o deploy e monitoramento."
                ],
                achievements: []
            }
        ],
        // Descreva outras experiências relevantes
        otherExperiences: "Experiência em startups, consultoria de TI, freelas em comércio e varejo."
    },

    // 4. Habilidades Técnicas (Hard Skills)
    skills: {
        languages: ["JavaScript", "C#", "VB.NET", "ASP.NET", "SQL", "HTML", "CSS"],
        frontend: ["React", "Nuxt.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Webpack", "Vite"],
        backend: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "WebSockets", "Autenticação (JWT)"],
        databases: ["PostgreSQL", "MySQL", "SQLServer"],
        cloudPlatforms: ["Google Cloud Platform (GCP)", "AWS", "Azure", "Heroku", "Netlify"],
        devOpsTools: ["Git", "GitHub", "Docker"],
        ai_ml: ["Google Gemini API", "Google Cloud Speech-to-Text API", "OpenAI API (GPT-x, Whisper)", "Análise de Dados"],
        otherTools: ["Asana", "Trello", "VS Code", "VS", "Figma"],
    },

    // 5. Projetos Relevantes (Com Foco no Projeto AABM)
    projects: [
        {
            name: "AI-assisted Bilingual Meeting (AABM) Application",
            description: "Aplicação web em tempo real desenvolvida com React e Node.js para transcrever áudio do sistema (ex: reuniões, vídeos) usando Google Cloud Speech-to-Text e gerar respostas contextuais com Google Gemini.",
            technologies: ["React", "Node.js", "Socket.IO", "Google Cloud Speech-to-Text API", "Google Gemini API", "Web Audio API (getDisplayMedia, MediaRecorder)", "Tailwind CSS (Vite/PostCSS)"],
            role: "Desenvolvedor Full-stack (Arquiteto e Implementador Principal)",
            challenges: [
                "Captura de áudio do sistema no navegador (`getDisplayMedia`) e roteamento eficiente para o backend.",
                "Otimização da latência de ponta a ponta (frontend, rede, API do Google) para transcrição em tempo real.",
                "Integração de múltiplos serviços de IA (Speech-to-Text e Gemini) em uma pipeline de tempo real.",
                "Gerenciamento de streams de áudio e dados binários via WebSockets (Socket.IO).",
                "Depuração de problemas de compilação CSS (Tailwind v4 alpha no Vite)." // Reflete sua experiência recente
            ],
            results: "Aplicação funcional que transcreve áudio em tempo real e fornece respostas contextuais, demonstrando proficiência em desenvolvimento Full-stack e integração de IA."
        },
        {
            name: "Cademint",
            description: "Um gerenciador de tarefas intuitivo que utiliza a metodologia Kanban para visualização e organização prática de tarefas, projetado para ser uma alternativa simples e sem excesso de funcionalidades em comparação a ferramentas como Trello, Asana e Jira.",
            technologies: ["Vue.js (Frontend)", "Node.js (Backend)", "MySQL (Banco de Dados)", "AWS (Cloud)"],
            role: "Desenvolvedor Full-stack",
            mainFeatures: [
                "Cadastro e atribuição de tarefas com definição de prioridade, tamanho e fase.",
                "Funcionalidade de 'Central de Contas' (cofre de senhas) para centralizar login/senhas de diversos aplicativos do usuário.",
                "Gerenciamento de perfis e grupos (proprietários e membros)."
            ],
            challenges: [
                "Desenvolvimento de um MVP (Produto Mínimo Viável) que fosse ao mesmo tempo simples de usar e implementar.",
                "Garantir a melhoria constante do código e da experiência do usuário (UX).",
                "Implementação de novas funcionalidades de forma a manter a simplicidade proposta."
            ],
            results: "Projeto em fase de pré-lançamento, utilizado diariamente pelo desenvolvedor para o gerenciamento de todos os seus projetos pessoais e profissionais, atestando sua praticidade e eficiência."
        },
        {
            name: "AgendasPro",
            description: "Software focado em otimizar o agendamento de serviços entre clientes e profissionais, oferecendo também um CRM integrado para a gestão completa de comércios de serviços.",
            technologies: ["Nuxt.js (Frontend)", "Node.js (Backend)", "Google Cloud (Cloud)", "React Native (Aplicativo Móvel)", "MySQL (Banco de Dados)"],
            role: "Programador Full-stack, Idealizador, CTO e Sócio da Startup",
            mainFeatures: [
                "Buscador de serviços parceiros pelo site (para clientes finais).",
                "Sistema de gestão de agendas para profissionais (horários e disponibilidade).",
                "Gestão de serviços, produtos e vendas.",
                "CRM (Customer Relationship Management) integrado para controle financeiro e relacionamento com clientes.",
                "Integração com bot de WhatsApp para automação e facilitação de processos de comunicação com o cliente final."
            ],
            challenges: [
                "Projeto em construção, enfrentando desafios inerentes ao desenvolvimento de uma solução complexa de agendamento e CRM em tempo real." // Manter genérico pois ainda em construção
            ],
            results: "Ainda em construção, mas visa transformar e facilitar a gestão de agendamentos e clientes para comércios de serviços."
        },
        {
            name: "Gourmetech",
            description: "Sistema de ERP (Enterprise Resource Planning) abrangente para restaurantes, complementado por um aplicativo de marketplace (similar ao iFood) para pedidos e entregas.",
            technologies: ["Vue.js (Frontend)", "Node.js (Backend)", "MySQL (Banco de Dados)", "AWS (Cloud)"],
            role: "Idealizador e Programador Full-stack",
            mainFeatures: [
                "Gerenciamento financeiro completo do restaurante.",
                "Controle de estoque e produtos.",
                "Gestão de vendas, reservas e mesas.",
                "Módulo de clientes e entregas.",
                "Sistema de pedidos e integrações com restaurantes afiliados no marketplace."
            ],
            challenges: [
                "Projeto em desenvolvimento, lidando com a complexidade de um ERP completo para o setor alimentício e a integração com uma plataforma de marketplace." // Manter genérico pois ainda em construção
            ],
            results: "Ainda em desenvolvimento, com o objetivo de otimizar a operação de restaurantes e expandir sua presença em plataformas de pedidos online."
        }
    ],

    // 6. Educação e Certificações
    education: [
        {
            degree: "Tecnólogo em Análise e desenvolvimento de sistemas",
            institution: "Unicesumar",
            graduationYear: "2024",
            relevantCourses: "Estrutura de Dados, Algoritmos, Inteligência Artificial, Engenharia de Software, Redes."
        }
    ],

    // 7. Metas de Carreira e o que você procura na próxima oportunidade
    careerGoals: {
        shortTerm: "A curto prazo, busco uma posição onde eu possa aprofundar minha experiência em desenvolvimento fullstack em todos as areas de atuação e contribuir ativamente para o sucesso de projetos desafiadores.",
        longTerm: "A longo prazo, almejo me tornar um líder técnico ou arquiteto de software, utilizando minha expertise em desenvolvimento e IA para impulsionar a inovação e o crescimento da empresa.",
        whatILookFor: "Procuro uma cultura que valorize a inovação, o aprendizado contínuo, a colaboração em equipe e que ofereça oportunidades de crescimento profissional. Gosto de trabalhar em projetos que resolvam problemas complexos e que tenham um impacto positivo."
    },

    // 8. Pontos Fortes e Fracos (prepare-se para discutir)
    strengths: [
        "Resolução de problemas complexos (demonstrado no projeto AABM com depuração de áudio e Tailwind).",
        "Curiosidade e aprendizado rápido (sempre buscando novas tecnologias e melhores práticas, ex: aprendizado de `getDisplayMedia` e WebSockets para real-time).",
        "Proatividade e automotivação (iniciativa para resolver desafios técnicos de forma independente).",
        "Habilidade de comunicação e colaboração (trabalho bem em equipe e explico conceitos técnicos de forma clara).",
        "Adaptabilidade e resiliência (superação de obstáculos técnicos inesperados)."
    ],
    weaknesses: [
        "Tendência a se aprofundar demais em detalhes técnicos, às vezes perdendo a visão geral (estou trabalhando para equilibrar isso com uma visão mais estratégica do projeto).",
        "Assumo muitas tarefas (estou aprendendo a delegar e a priorizar melhor para evitar sobrecarga).",
        "Sou teimoso, tem dias que fico até quatro horas da manhã para terminar de implementar uma feature, e enquanto não dá certo eu não paro."
    ],

    // 9. Perguntas para o Entrevistador (sempre tenha algumas!)
    questionsForInterviewer: [
        "Qual é o maior desafio técnico que sua equipe enfrenta atualmente?",
        "Como a equipe lida com o feedback e a melhoria contínua dos processos de desenvolvimento?",
        "Quais são as oportunidades de desenvolvimento profissional e aprendizado que a empresa oferece?",
        "Como vocês medem o sucesso de um desenvolvedor nesta função?",
        "Podem me dar um exemplo de um projeto no qual a equipe trabalhou recentemente e que a deixou orgulhosa?"
    ]
};

module.exports = userContext;