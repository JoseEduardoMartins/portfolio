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
            typeClient: "Projeto de cliente",
            viewCase: "Ver case study",
            labels: {
                back: "Trabalhos",
                aboutTitle: "Sobre o projeto",
                roleLabel: "Meu papel",
                stackLabel: "Stack",
                modulesTitle: "Módulos do sistema",
                builtTitle: "O que eu construí",
                visitSite: "Ver ao vivo",
            },
            infinider: {
                tagline:
                    "Plataforma completa de gestão para restaurantes — do cardápio digital ao painel operacional em tempo real.",
                aboutTitle: "Sobre o projeto",
                summary:
                    "O Infinider é um produto full-stack que criei para digitalizar a operação de restaurantes: um portal de pedidos para o cliente, um painel de gestão para operadores e donos, e um backend multi-tenant com atualizações em tempo real.",
                role: "Full-stack — arquitetura, frontend, backend e design system",
                roleLabel: "Meu papel",
                stackLabel: "Stack",
                back: "Trabalhos",
                components: {
                    title: "Arquitetura do sistema",
                    liveLabel: "Ver ao vivo",
                    npmLabel: "Ver no npm",
                    backend: {
                        name: "Backend",
                        desc: "API em NestJS com WebSocket para eventos em tempo real, RBAC e multi-tenancy — cada restaurante com dados isolados. Persistência com TypeORM e MySQL.",
                    },
                    manager: {
                        name: "Painel de gestão",
                        desc: "Frontend em React para operadores e donos: pedidos ao vivo, mapa de mesas, catálogo de produtos, relatórios e auditoria.",
                    },
                    landing: {
                        name: "Landing page",
                        desc: "Site institucional de captação, apresentando o produto e convertendo restaurantes interessados.",
                    },
                    webOrder: {
                        name: "Cardápio online",
                        desc: "Portal de pedidos para o cliente final: cardápio digital, comanda e checkout direto da mesa ou do balcão.",
                    },
                    designSystem: {
                        name: "Design System",
                        desc: "Biblioteca de componentes publicada no npm como @fast-food/design-system: React + TypeScript + Vite, estruturada em Atomic Design, com Tailwind, tokens de cor/espaçamento/tipografia e documentação no Storybook — consumida por todos os frontends.",
                    },
                },
            },
            chavetta: {
                tagline:
                    "SaaS de gestão imobiliária que leva um imóvel do anúncio ao repasse do aluguel num sistema só — vitrine, CRM, contratos e caixa.",
                summary:
                    "O Chavetta é um produto full-stack para corretores e imobiliárias: o mesmo cadastro de imóvel alimenta a vitrine pública, o funil de leads, a agenda de visitas, o contrato de locação e o caixa. Nada de copiar dados de uma ferramenta para outra — do primeiro anúncio ao repasse do aluguel, tudo num lugar só.",
                role: "Full-stack — produto, arquitetura, frontend e API",
                components: {
                    listings: {
                        name: "Imóveis & vitrine",
                        desc: "Cadastro de imóveis com fotos, busca com 13 filtros e uma vitrine própria com a marca da imobiliária, que publica nos portais ZAP, VivaReal e OLX e capta leads direto no CRM.",
                        tags: ["Vitrine própria", "13 filtros", "Upload de fotos"],
                    },
                    crm: {
                        name: "CRM & funil",
                        desc: "Funil de vendas em kanban com 7 etapas: cada visitante da vitrine vira lead automaticamente e avança arrastando o card.",
                        tags: ["Kanban", "7 etapas", "Leads automáticos"],
                    },
                    agenda: {
                        name: "Clientes & agenda",
                        desc: "Match entre as preferências do cliente e os imóveis disponíveis, proprietários com dados bancários e PIX, e agenda de visitas com confirmação automática no WhatsApp.",
                        tags: ["Match de imóveis", "Agenda", "WhatsApp"],
                    },
                    finance: {
                        name: "Financeiro & caixa",
                        desc: "Fluxo de caixa com receitas e despesas; aluguel, repasse, comissão e multa entram no caixa sozinhos, com painel de estoque, funil e saldo do mês.",
                        tags: ["Fluxo de caixa", "Comissões", "Painel"],
                    },
                    rent: {
                        name: "Aluguéis & cobrança",
                        desc: "Contratos de locação com parcelas automáticas, boleto e PIX com baixa automática, inadimplência com multa e juros proporcionais e repasse ao proprietário em lote.",
                        tags: ["Boleto & PIX", "Baixa automática", "Repasse"],
                    },
                    marketing: {
                        name: "Marketing com IA",
                        desc: "Feed no padrão VRSync para os portais e textos para Instagram, Facebook e TikTok gerados com IA no tom de cada rede.",
                        tags: ["VRSync", "ZAP · VivaReal · OLX", "IA generativa"],
                    },
                },
            },
            teamManager: {
                tagline:
                    "Kit de gestão de equipes para pequenas e médias empresas: o que foi decidido na reunião vira resultado, sem planilhas espalhadas.",
                summary:
                    "O Kit de Gestão de Equipes reúne o ciclo completo de gestão num só sistema — do diagnóstico da área aos indicadores. São 5 módulos e 15 ferramentas para organizar responsabilidades, conduzir reuniões com pauta, cobrar compromissos, desenvolver as pessoas e acompanhar metas, com 5 perfis de acesso e relatórios em PDF.",
                role: "Full-stack — produto, arquitetura, frontend e backend",
                components: {
                    organization: {
                        name: "Organização & processos",
                        desc: "Diagnóstico da área, matriz de atividades, mapa de responsabilidades com níveis de decisão (executa, recomenda, decide, aprova) e procedimentos operacionais.",
                        tags: ["Matriz de atividades", "Responsabilidades", "POPs"],
                    },
                    routine: {
                        name: "Rotina & reuniões",
                        desc: "Reuniões com pauta, decisões e próximos passos; acordos e compromissos ligados à reunião de origem, cada um com responsável e prazo.",
                        tags: ["Pauta", "Decisões", "Compromissos"],
                    },
                    people: {
                        name: "Pessoas & desenvolvimento",
                        desc: "Acompanhamentos, feedbacks, PDIs e mediação de conflitos — registros confidenciais com regras de acesso próprias: um gestor não vê o que o outro registrou.",
                        tags: ["Feedback", "PDI", "Sigilo por perfil"],
                    },
                    performance: {
                        name: "Desempenho & melhoria",
                        desc: "Registro de ocorrências, planos de ação com responsável e prazo, e um painel de indicadores com meta, unidade e gráfico de evolução.",
                        tags: ["Planos de ação", "Indicadores", "Metas"],
                    },
                    tracking: {
                        name: "Acompanhamento contínuo",
                        desc: "Calendário de acompanhamento e agenda integrada que juntam, por data, eventos, reuniões, compromissos, ações e atividades do período.",
                        tags: ["Agenda integrada", "Calendário", "Relatórios PDF"],
                    },
                },
            },
            kesia: {
                tagline:
                    "Site-portfólio para uma designer gráfica — apresenta identidade visual, logos e conteúdo para redes, do conceito à peça final.",
                summary:
                    "Desenvolvi o portfólio da Kesia Silva, designer gráfica de Florianópolis: um site de página única que organiza seis projetos de identidade visual, a trajetória e os serviços dela numa navegação fluida. Interface sob medida para a marca, com tipografia editorial e layout responsivo do desktop ao celular.",
                role: "Frontend — interface, desenvolvimento e deploy",
                components: {
                    hero: {
                        name: "Abertura & navegação",
                        desc: "Hero com tipografia editorial, índice navegável das seções e rolagem suave entre elas, com CTA direto para o contato.",
                        tags: ["Tipografia editorial", "Índice", "Scroll suave"],
                    },
                    projects: {
                        name: "Galeria de projetos",
                        desc: "Seis projetos de identidade visual e conteúdo para redes, cada um com descrição e grade de peças — logo, embalagem, cartão e social.",
                        tags: ["6 projetos", "Grade de peças"],
                    },
                    journey: {
                        name: "Trajetória & serviços",
                        desc: "Experiência, formação e os oito serviços da designer, organizados em seções escaneáveis.",
                        tags: ["Experiência", "8 serviços"],
                    },
                    contact: {
                        name: "Contato & responsivo",
                        desc: "Seção de contato com e-mail e LinkedIn e layout totalmente responsivo, do desktop ao celular.",
                        tags: ["Responsivo", "Contato"],
                    },
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
