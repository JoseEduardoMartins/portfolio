const enUs = {
    translations: {
        translateOptions: {
            portuguese: "Portuguese",
            english: "English",
            spanish: "Spanish",
        },
        nav: {
            home: "Home",
            journey: "Journey",
            work: "Work",
            contact: "Contact",
        },
        pages: {
            journey: {
                eyebrow: "Journey",
                title: "Experience & education",
                intro: "Where I've worked, the technologies I know well, and how I got here.",
            },
            work: {
                eyebrow: "Work",
                title: "Products & projects",
                intro: "Real products I built end to end, plus open-source projects on my GitHub.",
            },
        },
        works: {
            type: "Own product",
            viewCase: "View case study",
            infinider: {
                tagline:
                    "A complete restaurant management platform — from the digital menu to a real-time operations dashboard.",
                aboutTitle: "About the project",
                summary:
                    "Infinider is a full-stack product I built to digitize restaurant operations: a customer ordering portal, a management dashboard for operators and owners, and a multi-tenant backend with real-time updates.",
                solution:
                    "The architecture combines three React frontends and a NestJS backend with WebSocket, RBAC and multi-tenancy — each restaurant with isolated data, orders and table occupancy updated live from the kitchen.",
                role: "Full-stack — architecture, frontend, backend and design system",
                roleLabel: "My role",
                stackLabel: "Stack",
                galleryTitle: "Screens",
                back: "Work",
                liveLinks: {
                    landing: "Landing page",
                    manager: "Management dashboard",
                    webOrder: "Online menu",
                },
                gallery: {
                    landing: "Landing page — product overview",
                    manager: "Management dashboard — operator sign-in",
                },
            },
        },
        header: {
            about: "About",
            experiences: "Experience",
            skills: "Skills",
            repositories: "Projects",
            contact: "Contact",
        },
        home: {
            introduction: {
                hi: "Hi, I'm",
                available: "Available for new opportunities",
                developer: "Software Engineer · Frontend Specialist",
                description:
                    "JavaScript and TypeScript specialist building scalable web apps, microfrontends and design systems — from backend to frontend, with a focus on performance and user experience.",
                resume: "Download resume",
                viewWork: "View projects",
            },
            about: {
                title: "A bit about me",
                quickFacts: "Quick facts",
                description1:
                    "I'm a developer passionate about technology, with 5+ years of experience building modern, scalable and high-performance solutions. My specialty is the JavaScript and TypeScript ecosystem, from backend to frontend, always focused on quality, maintainability and user experience.",
                description2:
                    "I currently work as a Front-end Developer at Viasoft, working with microfrontend and monolithic architectures using Single-SPA, Webpack (Module Federation) and Vite. I take part in system design, code standards, versioning and releases, as well as building complete design systems with React, Storybook and testing.",
                description3:
                    "On the backend, I have experience with BFFs and microservices in Node.js, Express and NestJS. My work covers the whole delivery chain — from database modeling to CI/CD pipelines, testing and deployment on Linux environments with Docker and Nginx.",
                stats: {
                    years: "Years of experience",
                    projects: "Projects shipped",
                    companies: "Companies",
                },
                facts: [
                    "Florianópolis, Santa Catarina, Brazil",
                    "Currently at Viasoft (fully remote)",
                    "JavaScript & TypeScript specialist",
                    "Focused on microfrontends and design systems",
                    "Languages: Portuguese, English and Spanish",
                ],
            },
            experience: {
                title: "Where I've worked",
                present: "Present",
                present_short: "Now",
                locationType: {
                    remote: "Remote",
                    hybrid: "Hybrid",
                    onsite: "On-site",
                },
                duration: {
                    year: "yr",
                    years: "yrs",
                    month: "mo",
                    months: "mos",
                },
                items: {
                    viasoft:
                        "Development and maintenance of modular micro frontend solutions with Single-SPA, Webpack (Module Federation) and Vite. I work on system design, import maps configuration, versioning and releases, contribute to the design system (Atomic Design, Storybook) and to CI/CD pipelines with unit, integration and E2E tests.",
                    audacesMid:
                        "Monolithic frontend architecture, microservices backend and BFF, with integrations to internal and external systems (SAP, Superlógica, Bitrix). Managed AWS services (S3, EC2, Lambda), Linux environments with Docker, PM2 and Nginx, relational database modeling and CI/CD pipelines.",
                    audacesJunior:
                        "Full stack development of internal systems with Node.js and React, building integrations between platforms, relational database modeling and Linux environment setup with Docker and PM2. Active participation in code reviews, testing and bug fixing.",
                    feeltech:
                        "End-to-end agile recruitment platform: frontend and backend architecture definition, reusable React components and a design system with Styled Components, REST APIs in Node.js/TypeScript, AWS integration and CI/CD pipelines with automated testing.",
                },
            },
            skils: {
                title: "Skills",
                heading: "Technologies I work with",
                groups: {
                    frontend: "Frontend",
                    backend: "Backend",
                    devops: "DevOps & Cloud",
                    databases: "Databases",
                    testing: "Testing & Quality",
                },
            },
            education: {
                title: "Education",
                heading: "Education",
                items: {
                    estacio: "Systems Analysis and Development",
                    ifsc: "Technical Degree in Systems Development",
                },
            },
            repositorie: {
                title: "Projects",
                heading: "Some of my projects",
                stars: "stars",
                watching: "watching",
                forks: "forks",
                showMore: "Show more",
                showLess: "Show less",
                viewGithub: "View on GitHub",
                noDescription: "No description.",
            },
            contact: {
                eyebrow: "Let's talk",
                title: "Let's build something together?",
                description:
                    "I'm open to new projects and opportunities. If you'd like to chat or work with me, just reach out.",
                letsGo: "Message on WhatsApp",
                whatsappMessage:
                    "Hi Eduardo, can we talk about a project?",
            },
        },
        footer: {
            copyright: "© 2026 Eduardo Martins. All rights reserved.",
            built: "Built with React and a lot of coffee.",
        },
    },
};

export default enUs;
