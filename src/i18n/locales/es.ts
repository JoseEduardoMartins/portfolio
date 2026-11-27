const es = {
    translations: {
        translateOptions: {
            portuguese: "Portugués",
            english: "Inglés",
            spanish: "Español",
        },
        nav: {
            home: "Inicio",
            journey: "Trayectoria",
            work: "Trabajos",
            contact: "Contacto",
        },
        pages: {
            journey: {
                eyebrow: "Trayectoria",
                title: "Experiencia y formación",
                intro: "Dónde he trabajado, las tecnologías que domino y cómo llegué hasta aquí.",
            },
            work: {
                eyebrow: "Trabajos",
                title: "Productos y proyectos",
                intro: "Productos reales que construí de principio a fin, además de proyectos open-source en mi GitHub.",
            },
        },
        works: {
            type: "Producto propio",
            typeClient: "Proyecto de cliente",
            viewCase: "Ver caso de estudio",
            labels: {
                back: "Trabajos",
                aboutTitle: "Sobre el proyecto",
                roleLabel: "Mi rol",
                stackLabel: "Stack",
                modulesTitle: "Módulos del sistema",
                builtTitle: "Lo que construí",
                visitSite: "Ver en vivo",
            },
            infinider: {
                tagline:
                    "Plataforma completa de gestión para restaurantes — del menú digital al panel operativo en tiempo real.",
                aboutTitle: "Sobre el proyecto",
                summary:
                    "Infinider es un producto full-stack que creé para digitalizar la operación de restaurantes: un portal de pedidos para el cliente, un panel de gestión para operadores y dueños, y un backend multi-tenant con actualizaciones en tiempo real.",
                role: "Full-stack — arquitectura, frontend, backend y design system",
                roleLabel: "Mi rol",
                stackLabel: "Stack",
                back: "Trabajos",
                components: {
                    title: "Arquitectura del sistema",
                    liveLabel: "Ver en vivo",
                    npmLabel: "Ver en npm",
                    backend: {
                        name: "Backend",
                        desc: "API en NestJS con WebSocket para eventos en tiempo real, RBAC y multi-tenancy — cada restaurante con datos aislados. Persistencia con TypeORM y MySQL.",
                    },
                    manager: {
                        name: "Panel de gestión",
                        desc: "Frontend en React para operadores y dueños: pedidos en vivo, mapa de mesas, catálogo de productos, informes y auditoría.",
                    },
                    landing: {
                        name: "Landing page",
                        desc: "Sitio institucional de captación que presenta el producto y convierte restaurantes interesados.",
                    },
                    webOrder: {
                        name: "Menú online",
                        desc: "Portal de pedidos para el cliente final: menú digital, comanda y checkout directo desde la mesa o el mostrador.",
                    },
                    designSystem: {
                        name: "Design System",
                        desc: "Biblioteca de componentes publicada en npm como @fast-food/design-system: React + TypeScript + Vite, estructurada en Atomic Design, con Tailwind, tokens de color/espaciado/tipografía y documentación en Storybook — consumida por todos los frontends.",
                    },
                },
            },
            chavetta: {
                tagline:
                    "SaaS de gestión inmobiliaria que lleva un inmueble del anuncio al traspaso del alquiler en un solo sistema — escaparate, CRM, contratos y caja.",
                summary:
                    "Chavetta es un producto full-stack para corredores e inmobiliarias: el mismo registro del inmueble alimenta el escaparate público, el embudo de leads, la agenda de visitas, el contrato de alquiler y la caja. Sin copiar datos de una herramienta a otra — del primer anuncio al traspaso del alquiler, todo en un solo lugar.",
                role: "Full-stack — producto, arquitectura, frontend y API",
                components: {
                    listings: {
                        name: "Inmuebles & escaparate",
                        desc: "Registro de inmuebles con fotos, búsqueda con 13 filtros y un escaparate propio con la marca de la inmobiliaria, que publica en los portales ZAP, VivaReal y OLX y capta leads directo en el CRM.",
                        tags: ["Escaparate", "13 filtros", "Carga de fotos"],
                    },
                    crm: {
                        name: "CRM & embudo",
                        desc: "Embudo de ventas en kanban con 7 etapas: cada visitante del escaparate se convierte en lead automáticamente y avanza arrastrando la tarjeta.",
                        tags: ["Kanban", "7 etapas", "Leads automáticos"],
                    },
                    agenda: {
                        name: "Clientes & agenda",
                        desc: "Match entre las preferencias del cliente y los inmuebles disponibles, propietarios con datos bancarios y PIX, y agenda de visitas con confirmación automática por WhatsApp.",
                        tags: ["Match de inmuebles", "Agenda", "WhatsApp"],
                    },
                    finance: {
                        name: "Finanzas & caja",
                        desc: "Flujo de caja con ingresos y gastos; alquiler, traspaso, comisión y multa entran en la caja solos, con panel de inventario, embudo y saldo del mes.",
                        tags: ["Flujo de caja", "Comisiones", "Panel"],
                    },
                    rent: {
                        name: "Alquileres & cobranza",
                        desc: "Contratos de alquiler con cuotas automáticas, boleto y PIX con conciliación automática, morosidad con multa e intereses proporcionales y traspaso al propietario en lote.",
                        tags: ["Boleto & PIX", "Conciliación automática", "Traspaso"],
                    },
                    marketing: {
                        name: "Marketing con IA",
                        desc: "Feed en el estándar VRSync para los portales y textos para Instagram, Facebook y TikTok generados con IA en el tono de cada red.",
                        tags: ["VRSync", "ZAP · VivaReal · OLX", "IA generativa"],
                    },
                },
            },
            teamManager: {
                tagline:
                    "Kit de gestión de equipos para pequeñas y medianas empresas: lo que se decide en la reunión se convierte en resultado, sin planillas dispersas.",
                summary:
                    "El Kit de Gestión de Equipos reúne el ciclo completo de gestión en un solo sistema — del diagnóstico del área a los indicadores. Son 5 módulos y 15 herramientas para organizar responsabilidades, conducir reuniones con agenda, dar seguimiento a los compromisos, desarrollar a las personas y acompañar metas, con 5 perfiles de acceso e informes en PDF.",
                role: "Full-stack — producto, arquitectura, frontend y backend",
                components: {
                    organization: {
                        name: "Organización & procesos",
                        desc: "Diagnóstico del área, matriz de actividades, mapa de responsabilidades con niveles de decisión (ejecuta, recomienda, decide, aprueba) y procedimientos operativos.",
                        tags: ["Matriz de actividades", "Responsabilidades", "POPs"],
                    },
                    routine: {
                        name: "Rutina & reuniones",
                        desc: "Reuniones con agenda, decisiones y próximos pasos; acuerdos y compromisos ligados a la reunión de origen, cada uno con responsable y plazo.",
                        tags: ["Agenda", "Decisiones", "Compromisos"],
                    },
                    people: {
                        name: "Personas & desarrollo",
                        desc: "Seguimientos, feedbacks, PDIs y mediación de conflictos — registros confidenciales con reglas de acceso propias: un gestor no ve lo que registró otro.",
                        tags: ["Feedback", "PDI", "Privacidad por rol"],
                    },
                    performance: {
                        name: "Desempeño & mejora",
                        desc: "Registro de incidencias, planes de acción con responsable y plazo, y un panel de indicadores con meta, unidad y gráfico de evolución.",
                        tags: ["Planes de acción", "Indicadores", "Metas"],
                    },
                    tracking: {
                        name: "Seguimiento continuo",
                        desc: "Calendario de seguimiento y agenda integrada que reúnen, por fecha, eventos, reuniones, compromisos, acciones y actividades del período.",
                        tags: ["Agenda integrada", "Calendario", "Informes PDF"],
                    },
                },
            },
            kesia: {
                tagline:
                    "Sitio-portafolio para una diseñadora gráfica — presenta identidad visual, logos y contenido para redes, del concepto a la pieza final.",
                summary:
                    "Desarrollé el portafolio de Kesia Silva, diseñadora gráfica de Florianópolis: un sitio de página única que organiza seis proyectos de identidad visual, su trayectoria y sus servicios en una navegación fluida. Interfaz a medida para su marca, con tipografía editorial y diseño responsivo del escritorio al móvil.",
                role: "Frontend — interfaz, desarrollo y despliegue",
                components: {
                    hero: {
                        name: "Apertura & navegación",
                        desc: "Hero con tipografía editorial, índice navegable de las secciones y desplazamiento suave entre ellas, con CTA directo al contacto.",
                        tags: ["Tipografía editorial", "Índice", "Scroll suave"],
                    },
                    projects: {
                        name: "Galería de proyectos",
                        desc: "Seis proyectos de identidad visual y contenido para redes, cada uno con descripción y grilla de piezas — logo, empaque, tarjeta y social.",
                        tags: ["6 proyectos", "Grilla de piezas"],
                    },
                    journey: {
                        name: "Trayectoria & servicios",
                        desc: "Experiencia, formación y los ocho servicios de la diseñadora, organizados en secciones escaneables.",
                        tags: ["Experiencia", "8 servicios"],
                    },
                    contact: {
                        name: "Contacto & responsivo",
                        desc: "Sección de contacto con e-mail y LinkedIn y diseño totalmente responsivo, del escritorio al móvil.",
                        tags: ["Responsivo", "Contacto"],
                    },

                },
            },
        },
        header: {
            about: "Sobre mí",
            experiences: "Experiencia",
            skills: "Habilidades",
            repositories: "Proyectos",
            contact: "Contacto",
        },
        home: {
            introduction: {
                hi: "Hola, soy",
                available: "Disponible para nuevas oportunidades",
                developer: "Software Engineer · Frontend Specialist",
                description:
                    "Especialista en JavaScript y TypeScript, construyendo aplicaciones web escalables, microfrontends y design systems — del backend al frontend, con foco en rendimiento y experiencia de usuario.",
                resume: "Descargar CV",
                viewWork: "Ver proyectos",
            },
            about: {
                title: "Un poco sobre mí",
                quickFacts: "Resumen rápido",
                description1:
                    "Soy un desarrollador apasionado por la tecnología, con más de 5 años de experiencia construyendo soluciones modernas, escalables y de alto rendimiento. Mi especialidad es el ecosistema JavaScript y TypeScript, del backend al frontend, siempre con foco en calidad, mantenibilidad y experiencia de usuario.",
                description2:
                    "Actualmente trabajo como Desarrollador Front-end en Viasoft, con arquitecturas microfrontend y monolíticas usando Single-SPA, Webpack (Module Federation) y Vite. Participo en el system design, definición de estándares de código, versionado y releases, además de la construcción de design systems completos con React, Storybook y pruebas.",
                description3:
                    "En el backend, tengo experiencia con BFFs y microservicios en Node.js, Express y NestJS. Mi trabajo abarca toda la cadena de entrega — desde el modelado de bases de datos hasta pipelines de CI/CD, pruebas y despliegue en entornos Linux con Docker y Nginx.",
                stats: {
                    years: "Años de experiencia",
                    projects: "Proyectos entregados",
                    companies: "Empresas",
                },
                facts: [
                    "Florianópolis, Santa Catarina, Brasil",
                    "Actualmente en Viasoft (100% remoto)",
                    "Especialista en JavaScript & TypeScript",
                    "Enfocado en microfrontends y design systems",
                    "Idiomas: Portugués, Inglés y Español",
                ],
            },
            experience: {
                title: "Mi trayectoria",
                present: "Actual",
                present_short: "Actual",
                locationType: {
                    remote: "Remoto",
                    hybrid: "Híbrido",
                    onsite: "Presencial",
                },
                duration: {
                    year: "año",
                    years: "años",
                    month: "mes",
                    months: "meses",
                },
                items: {
                    viasoft:
                        "Desarrollo y mantenimiento de soluciones micro frontend modulares con Single-SPA, Webpack (Module Federation) y Vite. Trabajo en system design, configuración de import maps, versionado y releases, contribuyo al design system (Atomic Design, Storybook) y a pipelines de CI/CD con pruebas unitarias, de integración y E2E.",
                    audacesMid:
                        "Arquitectura frontend monolítica, backend en microservicios y BFF, con integraciones a sistemas internos y externos (SAP, Superlógica, Bitrix). Gestioné servicios AWS (S3, EC2, Lambda), entornos Linux con Docker, PM2 y Nginx, modelado de bases relacionales y pipelines de CI/CD.",
                    audacesJunior:
                        "Desarrollo full stack de sistemas internos con Node.js y React, creación de integraciones entre plataformas, modelado de bases relacionales y configuración de entornos Linux con Docker y PM2. Participación activa en code reviews, pruebas y corrección de bugs.",
                    feeltech:
                        "Plataforma de reclutamiento ágil de punta a punta: definición de arquitectura de frontend y backend, componentes React reutilizables y design system con Styled Components, APIs REST en Node.js/TypeScript, integración con AWS y pipelines de CI/CD con pruebas automatizadas.",
                },
            },
            skils: {
                title: "Habilidades",
                heading: "Tecnologías que utilizo",
                groups: {
                    frontend: "Frontend",
                    backend: "Backend",
                    devops: "DevOps & Cloud",
                    databases: "Bases de datos",
                    testing: "Pruebas & Calidad",
                },
            },
            education: {
                title: "Formación",
                heading: "Educación",
                items: {
                    estacio: "Análisis y Desarrollo de Sistemas",
                    ifsc: "Técnico en Desarrollo de Sistemas",
                },
            },
            repositorie: {
                title: "Proyectos",
                heading: "Algunos de mis proyectos",
                stars: "estrellas",
                watching: "mirando",
                forks: "forks",
                showMore: "Ver más",
                showLess: "Ver menos",
                viewGithub: "Ver en GitHub",
                noDescription: "Sin descripción.",
            },
            contact: {
                eyebrow: "Hablemos",
                title: "¿Construimos algo juntos?",
                description:
                    "Estoy abierto a nuevos proyectos y oportunidades. Si quieres conversar o trabajar conmigo, solo escríbeme.",
                letsGo: "Escribir por WhatsApp",
                whatsappMessage:
                    "Hola Eduardo, ¿podemos hablar sobre un proyecto?",
            },
        },
        footer: {
            copyright: "© 2026 Eduardo Martins. Todos los derechos reservados.",
            built: "Hecho con React y mucho café.",
        },
    },
};

export default es;
