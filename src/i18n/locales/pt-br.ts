const ptBr = {
    translations: {
        translateOptions: {
            portuguese: "Português",
            english: "Inglês",
            spanish: "Espanhol",
        },
        nav: {
            home: "Início",
            journey: "Trajetória",
            work: "Trabalhos",
            contact: "Contato",
        },
        pages: {
            journey: {
                eyebrow: "Trajetória",
                title: "Experiência & formação",
                intro: "Onde trabalhei, as tecnologias que domino e como cheguei até aqui.",
            },
            work: {
                eyebrow: "Trabalhos",
                title: "Produtos & projetos",
                intro: "Produtos reais que construí de ponta a ponta, além de projetos open-source no meu GitHub.",
            },
        },
        works: {
            type: "Produto próprio",
            viewCase: "Ver case study",
            infinider: {
                tagline:
                    "Plataforma completa de gestão para restaurantes — do cardápio digital ao painel operacional em tempo real.",
                aboutTitle: "Sobre o projeto",
                summary:
                    "O Infinider é um produto full-stack que criei para digitalizar a operação de restaurantes: um portal de pedidos para o cliente, um painel de gestão para operadores e donos, e um backend multi-tenant com atualizações em tempo real.",
                solution:
                    "A arquitetura reúne três frontends em React e um backend em NestJS com WebSocket, RBAC e multi-tenancy — cada restaurante com dados isolados, pedidos e ocupação de mesas atualizados ao vivo direto da cozinha.",
                role: "Full-stack — arquitetura, frontend, backend e design system",
                roleLabel: "Meu papel",
                stackLabel: "Stack",
                galleryTitle: "Telas",
                back: "Trabalhos",
                liveLinks: {
                    landing: "Landing page",
                    manager: "Painel de gestão",
                    webOrder: "Cardápio online",
                },
                gallery: {
                    dashboard: "Painel de relatórios — faturamento e indicadores em tempo real",
                    map: "Mapa de mesas — status da operação do salão",
                    products: "Catálogo de produtos — gestão do cardápio",
                },
            },
        },
        header: {
            about: "Sobre",
            experiences: "Experiência",
            skills: "Habilidades",
            repositories: "Projetos",
            contact: "Contato",
        },
        home: {
            introduction: {
                hi: "Olá, eu sou",
                available: "Disponível para novas oportunidades",
                developer: "Software Engineer · Frontend Specialist",
                description:
                    "Especialista em JavaScript e TypeScript, construindo aplicações web escaláveis, microfrontends e design systems — do backend ao frontend, com foco em performance e experiência do usuário.",
                resume: "Baixar currículo",
                viewWork: "Ver projetos",
            },
            about: {
                title: "Um pouco sobre mim",
                quickFacts: "Resumo rápido",
                description1:
                    "Sou um desenvolvedor apaixonado por tecnologia, com mais de 5 anos de experiência construindo soluções modernas, escaláveis e de alta performance. Minha especialidade é o ecossistema JavaScript e TypeScript, do backend ao frontend, sempre com foco em qualidade, manutenibilidade e experiência do usuário.",
                description2:
                    "Atualmente atuo como Desenvolvedor Front-end na Viasoft, trabalhando com arquiteturas microfrontend e monolíticas usando Single-SPA, Webpack (Module Federation) e Vite. Participo do system design, definição de padrões de código, versionamento e releases, além da construção de design systems completos com React, Storybook e testes.",
                description3:
                    "No backend, tenho experiência com BFFs e microsserviços em Node.js, Express e NestJS. Meu trabalho cobre toda a cadeia de entrega — da modelagem de bancos à configuração de pipelines de CI/CD, testes e deploy em ambientes Linux com Docker e Nginx.",
                stats: {
                    years: "Anos de experiência",
                    projects: "Projetos entregues",
                    companies: "Empresas",
                },
                facts: [
                    "Florianópolis, Santa Catarina, Brasil",
                    "Atualmente na Viasoft (100% remoto)",
                    "Especialista em JavaScript & TypeScript",
                    "Foco em microfrontends e design systems",
                    "Idiomas: Português, Inglês e Espanhol",
                ],
            },
            experience: {
                title: "Minha trajetória",
                present: "Atual",
                present_short: "Atual",
                locationType: {
                    remote: "Remoto",
                    hybrid: "Híbrido",
                    onsite: "Presencial",
                },
                duration: {
                    year: "ano",
                    years: "anos",
                    month: "mês",
                    months: "meses",
                },
                items: {
                    viasoft:
                        "Desenvolvimento e manutenção de soluções micro frontend modulares com Single-SPA, Webpack (Module Federation) e Vite. Atuo em system design, configuração de import maps, versionamento e releases, contribuo no design system (Atomic Design, Storybook) e em pipelines de CI/CD com testes unitários, de integração e E2E.",
                    audacesMid:
                        "Arquitetura frontend monolítica, backend em microsserviços e BFF, com integrações a sistemas internos e externos (SAP, Superlógica, Bitrix). Gerenciei serviços AWS (S3, EC2, Lambda), ambientes Linux com Docker, PM2 e Nginx, modelagem de bancos relacionais e pipelines de CI/CD.",
                    audacesJunior:
                        "Desenvolvimento full stack de sistemas internos com Node.js e React, criação de integrações entre plataformas, modelagem de bancos relacionais e configuração de ambientes Linux com Docker e PM2. Participação ativa em code reviews, testes e correção de bugs.",
                    feeltech:
                        "Plataforma de recrutamento ágil ponta a ponta: definição de arquitetura de frontend e backend, componentes React reutilizáveis e design system com Styled Components, APIs REST em Node.js/TypeScript, integração com AWS e pipelines de CI/CD com testes automatizados.",
                },
            },
            skils: {
                title: "Habilidades",
                heading: "Tecnologias que eu uso",
                groups: {
                    frontend: "Frontend",
                    backend: "Backend",
                    devops: "DevOps & Cloud",
                    databases: "Banco de dados",
                    testing: "Testes & Qualidade",
                },
            },
            education: {
                title: "Formação",
                heading: "Educação",
                items: {
                    estacio: "Análise e Desenvolvimento de Sistemas",
                    ifsc: "Técnico em Desenvolvimento de Sistemas",
                },
            },
            repositorie: {
                title: "Projetos",
                heading: "Alguns dos meus projetos",
                stars: "estrelas",
                watching: "assistindo",
                forks: "forks",
                showMore: "Ver mais",
                showLess: "Ver menos",
                viewGithub: "Ver no GitHub",
                noDescription: "Sem descrição.",
            },
            contact: {
                eyebrow: "Vamos conversar",
                title: "Vamos construir algo juntos?",
                description:
                    "Estou aberto a novos projetos e oportunidades. Se quiser trocar uma ideia ou trabalhar comigo, é só chamar.",
                letsGo: "Falar no WhatsApp",
                whatsappMessage:
                    "Olá Eduardo, podemos conversar sobre um projeto?",
            },
        },
        footer: {
            copyright: "© 2026 Eduardo Martins. Todos os direitos reservados.",
            built: "Feito com React e muito café.",
        },
    },
};

export default ptBr;
