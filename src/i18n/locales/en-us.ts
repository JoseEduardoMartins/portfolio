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
            typeClient: "Client project",
            viewCase: "View case study",
            labels: {
                back: "Work",
                aboutTitle: "About the project",
                roleLabel: "My role",
                stackLabel: "Stack",
                modulesTitle: "System modules",
                builtTitle: "What I built",
                visitSite: "View live",
            },
            infinider: {
                tagline:
                    "A complete restaurant management platform — from the digital menu to a real-time operations dashboard.",
                aboutTitle: "About the project",
                summary:
                    "Infinider is a full-stack product I built to digitize restaurant operations: a customer ordering portal, a management dashboard for operators and owners, and a multi-tenant backend with real-time updates.",
                role: "Full-stack — architecture, frontend, backend and design system",
                roleLabel: "My role",
                stackLabel: "Stack",
                back: "Work",
                components: {
                    title: "System architecture",
                    liveLabel: "View live",
                    npmLabel: "View on npm",
                    backend: {
                        name: "Backend",
                        desc: "NestJS API with WebSocket for real-time events, RBAC and multi-tenancy — each restaurant with isolated data. Persistence with TypeORM and MySQL.",
                    },
                    manager: {
                        name: "Management dashboard",
                        desc: "React frontend for operators and owners: live orders, table map, product catalog, reports and audit log.",
                    },
                    landing: {
                        name: "Landing page",
                        desc: "Marketing site that presents the product and converts interested restaurants.",
                    },
                    webOrder: {
                        name: "Online menu",
                        desc: "Customer-facing ordering portal: digital menu, tab and checkout right from the table or counter.",
                    },
                    designSystem: {
                        name: "Design System",
                        desc: "Component library published to npm as @fast-food/design-system: React + TypeScript + Vite, built on Atomic Design, with Tailwind, color/spacing/typography tokens and Storybook docs — consumed by every frontend.",
                    },
                },
            },
            chavetta: {
                tagline:
                    "A real-estate management SaaS that takes a property from listing to rent payout in a single system — storefront, CRM, contracts and cash.",
                summary:
                    "Chavetta is a full-stack product for agents and real-estate agencies: the same property record feeds the public storefront, the lead funnel, the visit schedule, the lease contract and the cash register. No copying data between tools — from the first listing to the rent payout, everything in one place.",
                role: "Full-stack — product, architecture, frontend and API",
                components: {
                    listings: {
                        name: "Listings & storefront",
                        desc: "Property records with photos, search across 13 filters and a branded public storefront that publishes to the ZAP, VivaReal and OLX portals and captures leads straight into the CRM.",
                        tags: ["Storefront", "13 filters", "Photo upload"],
                    },
                    crm: {
                        name: "CRM & funnel",
                        desc: "A sales funnel as a 7-stage kanban: every storefront visitor becomes a lead automatically and advances by dragging the card.",
                        tags: ["Kanban", "7 stages", "Auto leads"],
                    },
                    agenda: {
                        name: "Clients & schedule",
                        desc: "Matching between client preferences and available properties, owners with banking and PIX details, and a visit schedule with automatic WhatsApp confirmation.",
                        tags: ["Property match", "Schedule", "WhatsApp"],
                    },
                    finance: {
                        name: "Finance & cash",
                        desc: "Cash flow with income and expenses; rent, payout, commission and late fees post to the register automatically, with a dashboard of inventory, funnel and monthly balance.",
                        tags: ["Cash flow", "Commissions", "Dashboard"],
                    },
                    rent: {
                        name: "Rentals & billing",
                        desc: "Lease contracts with automatic installments, boleto and PIX with automatic reconciliation, overdue control with proportional fees and interest, and batch payouts to owners.",
                        tags: ["Boleto & PIX", "Auto reconciliation", "Payout"],
                    },
                    marketing: {
                        name: "AI marketing",
                        desc: "A VRSync feed for the portals and copy for Instagram, Facebook and TikTok generated with AI in each network's tone.",
                        tags: ["VRSync", "ZAP · VivaReal · OLX", "Generative AI"],
                    },
                },
            },
            teamManager: {
                tagline:
                    "A team-management kit for small and mid-sized companies: what gets decided in the meeting turns into results, without scattered spreadsheets.",
                summary:
                    "The Team Management Kit brings the full management cycle into a single system — from diagnosing the area to the indicators. Five modules and fifteen tools to organize responsibilities, run meetings with an agenda, follow up on commitments, develop people and track goals, with five access profiles and PDF reports.",
                role: "Full-stack — product, architecture, frontend and backend",
                components: {
                    organization: {
                        name: "Organization & processes",
                        desc: "Area diagnosis, an activity matrix, a responsibility map with decision levels (executes, recommends, decides, approves) and operating procedures.",
                        tags: ["Activity matrix", "Responsibilities", "SOPs"],
                    },
                    routine: {
                        name: "Routine & meetings",
                        desc: "Meetings with an agenda, decisions and next steps; agreements and commitments tied to the source meeting, each with an owner and a deadline.",
                        tags: ["Agenda", "Decisions", "Commitments"],
                    },
                    people: {
                        name: "People & development",
                        desc: "Check-ins, feedback, IDPs and conflict mediation — confidential records with their own access rules: one manager can't see what another recorded.",
                        tags: ["Feedback", "IDP", "Per-role privacy"],
                    },
                    performance: {
                        name: "Performance & improvement",
                        desc: "Incident logging, action plans with an owner and deadline, and an indicators dashboard with target, unit and an evolution chart.",
                        tags: ["Action plans", "Indicators", "Goals"],
                    },
                    tracking: {
                        name: "Continuous tracking",
                        desc: "A follow-up calendar and an integrated agenda that bring together, by date, events, meetings, commitments, actions and activities for the period.",
                        tags: ["Integrated agenda", "Calendar", "PDF reports"],
                    },
                },
            },
            kesia: {
                tagline:
                    "A portfolio site for a graphic designer — showcasing visual identity, logos and social content, from concept to final piece.",
                summary:
                    "I built the portfolio for Kesia Silva, a graphic designer from Florianópolis: a single-page site that organizes six visual-identity projects, her background and her services into a smooth flow. A tailored interface for her brand, with editorial typography and a responsive layout from desktop to mobile.",
                role: "Frontend — interface, development and deploy",
                components: {
                    hero: {
                        name: "Opening & navigation",
                        desc: "A hero with editorial typography, a navigable section index and smooth scrolling between sections, with a direct CTA to contact.",
                        tags: ["Editorial type", "Index", "Smooth scroll"],
                    },
                    projects: {
                        name: "Project gallery",
                        desc: "Six visual-identity and social-content projects, each with a description and a grid of pieces — logo, packaging, card and social.",
                        tags: ["6 projects", "Piece grid"],
                    },
                    journey: {
                        name: "Background & services",
                        desc: "The designer's experience, education and eight services, organized into scannable sections.",
                        tags: ["Experience", "8 services"],
                    },
                    contact: {
                        name: "Contact & responsive",
                        desc: "A contact section with email and LinkedIn and a fully responsive layout, from desktop to mobile.",
                        tags: ["Responsive", "Contact"],
                    },
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
