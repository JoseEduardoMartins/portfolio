import { useState } from "react";
import Translator from "../../../components/I18n/Translator";
import Section from "../../../components/Section";
import Subtitle from "../../../components/Subtitle";
import List from "../../../components/List";
import Experience from "./Experience/Experience";

const experiences = [
    {
        title: "Trainee Developer",
        company: "Audaces",
        start_date: {
            month: "August",
            year: 2021,
        },
        end_date: {
            month: "April",
            year: 2023,
        },
        address: {
            city: "Florianópolis",
            state: "Santa Catarina",
            country: "Brasil",
        },
        location_type: "hybrid",
        isWorking: false,
        domain: "audaces.com",
        description:
            "Desenvolvimento de uma ferramenta ágil de recrutamento em prol de melhorar a experiência do usuário recrutador e recrutado. Funcionalidades de construção relacionadas a api´s de entidade, autenticação, regras de negocio do sistema, componentes React e funcionalidades dentro do Front-end utilizando as tecnologias node.js, typescript, React, MySQL workbench entre outras tecnologias do mercado.",
        skils: [
            { key: 1, value: "JavaScript" },
            { key: 2, value: "Node.js" },
            { key: 3, value: "React.js" },
            { key: 4, value: "React Native" },
            { key: 5, value: "TypeScript" },
            { key: 6, value: "HTML5" },
            { key: 7, value: "CSS3" },
            { key: 8, value: "Bootstrap" },
            { key: 9, value: "API REST" },
            { key: 10, value: "Express.js" },
            { key: 11, value: "Amazon Web Services (AWS)" },
            { key: 12, value: "Jest" },
            { key: 13, value: "ESLint" },
            { key: 14, value: "Swagger" },
            { key: 15, value: "Banco de dados" },
            { key: 16, value: "MySQL" },
            { key: 17, value: "Microsoft SQL Server" },
            { key: 18, value: "MongoDB" },
            { key: 19, value: "Programação orientada a objetos (POO)" },
            { key: 20, value: "JSON" },
            { key: 21, value: "JQuery" },
            { key: 22, value: "Git" },
            { key: 23, value: "GitHub" },
            { key: 24, value: "Gitlab" },
            { key: 25, value: "Servidor Linux" },
            { key: 26, value: "WinSCP" },
            { key: 27, value: "Nginx" },
            { key: 28, value: "JIRA" },
        ],
    },
    {
        title: "Junior Developer",
        company: "Flowupp",
        start_date: {
            month: "April",
            year: 2022,
        },
        end_date: {
            month: "April",
            year: 2023,
        },
        address: {
            city: "Florianópolis",
            state: "Santa Catarina",
            country: "Brasil",
        },
        location_type: "remote",
        isWorking: false,
        domain: "feeltechrh.com.br",
        description:
            "Desenvolvimento de uma ferramenta ágil de recrutamento em prol de melhorar a experiência do usuário recrutador e recrutado. Construo funcionalidades relacionadas a api´s de entidade, autenticação, regras de negocio do sistema, componentes React e funcionalidades dentro do Front-end utilizando as tecnologias node.js,  typescript, React, MySQL workbench entre outras tecnologias do mercado.",
        skils: [
            { key: 1, value: "JavaScript" },
            { key: 2, value: "Node.js" },
            { key: 3, value: "React" },
            { key: 4, value: "TypeScript" },
            { key: 5, value: "HTML5" },
            { key: 6, value: "CSS3" },
            { key: 7, value: "SASS" },
            { key: 8, value: "API REST" },
            { key: 9, value: "Express.js" },
            { key: 10, value: "Amazon Web Services (AWS)" },
            { key: 11, value: "Jest" },
            { key: 12, value: "ESLint" },
            { key: 13, value: "Banco de dados" },
            { key: 14, value: "MySQL" },
            { key: 15, value: "Programação orientada a objetos (POO)" },
            { key: 16, value: "JSON" },
            { key: 17, value: "Git" },
            { key: 18, value: "GitHub" },
        ],
    },
    {
        title: "Full Stack Developer",
        company: "Audaces",
        start_date: {
            month: "August",
            year: 2023,
        },
        end_date: {
            month: "November",
            year: 2023,
        },
        address: {
            city: "Florianópolis",
            state: "Santa Catarina",
            country: "Brasil",
        },
        location_type: "hybrid",
        isWorking: false,
        domain: "audaces.com",
        description:
            "Como desenvolvedor full stack na mesma empresa, mantive minhas responsabilidades anteriores, como o desenvolvimento de sistemas internos, criação de bancos de dados relacionais e integrações entre sistemas internos e externos. Além disso, assumi novas tarefas, como treinamento de novos colaboradores, liderança de reuniões para discutir estratégias de desenvolvimento, redução de erros por meio de revisões de código e testes, e investigação de falhas nos sistemas para identificar e implementar soluções eficazes.",
        skils: [
            { key: 1, value: "JavaScript" },
            { key: 2, value: "Node.js" },
            { key: 3, value: "React.js" },
            { key: 4, value: "React Native" },
            { key: 5, value: "TypeScript" },
            { key: 6, value: "HTML5" },
            { key: 7, value: "CSS3" },
            { key: 8, value: "Bootstrap" },
            { key: 9, value: "API REST" },
            { key: 10, value: "Express.js" },
            { key: 11, value: "Amazon Web Services (AWS)" },
            { key: 12, value: "Jest" },
            { key: 13, value: "ESLint" },
            { key: 14, value: "Swagger" },
            { key: 15, value: "Banco de dados" },
            { key: 16, value: "MySQL" },
            { key: 17, value: "Microsoft SQL Server" },
            { key: 18, value: "MongoDB" },
            { key: 19, value: "Programação orientada a objetos (POO)" },
            { key: 20, value: "JSON" },
            { key: 21, value: "JQuery" },
            { key: 22, value: "Git" },
            { key: 23, value: "GitHub" },
            { key: 24, value: "Gitlab" },
            { key: 25, value: "Servidor Linux" },
            { key: 26, value: "WinSCP" },
            { key: 27, value: "Nginx" },
            { key: 28, value: "JIRA" },
        ],
    },
    {
        title: "Full Stack Developer",
        company: "DavinTI - Soluções em Tecnologia",
        start_date: {
            month: "January",
            year: 2024,
        },
        end_date: {
            month: "May",
            year: 2024,
        },
        address: {
            city: "Belo Horizonte",
            state: "Minas Gerais",
            country: "Brasil",
        },
        location_type: "hybrid",
        isWorking: false,
        domain: "davinti.com.br",
        description:
            "Como desenvolvedor full stack, faço a criação de novas funcionalidades para a plataforma de software voltada para o varejo chamada Vitruvio. Minhas responsabilidades incluem o desenvolvimento tanto do frontend quanto do backend, além de contribuições no desenvolvimento de aplicativos móveis e na gestão de banco de dados. Utilizo tecnologias como React, Nest.js e PostgreSQL para oferecer soluções inovadoras e eficazes aos nossos clientes.",
        skils: [
            { key: 1, value: "JavaScript" },
            { key: 2, value: "Node.js" },
            { key: 3, value: "Git" },
            { key: 4, value: "Microservices" },
            { key: 5, value: "HTML5" },
            { key: 6, value: "CSS3" },
            { key: 7, value: "JSON" },
            { key: 8, value: "Banco de dados Oracle" },
            { key: 9, value: "PostgreSQL" },
            { key: 10, value: "UML (Linguagem de modelagem unificada)" },
            { key: 11, value: "Linux" },
            { key: 12, value: "AWS Lambda" },
            { key: 13, value: "Programação orientada a objetos (POO)" },
            { key: 14, value: "Prototipagem" },
            { key: 15, value: "Diagramação" },
            { key: 16, value: "Scrum" },
            { key: 17, value: "Amazon Web Services (AWS)" },
            { key: 18, value: "Servidor Linux" },
            { key: 19, value: "Qualidade de software" },
        ],
    },
];

const Experiences = () => {
    const [openExperience, setOpenExperience] = useState(0);

    const changeOpenExperience = (number) =>
        setOpenExperience(openExperience === number ? undefined : number);

    return (
        <Section id="experiences">
            <Subtitle>
                <Translator path="home.experience.title" />
            </Subtitle>
            <List direction="column">
                {experiences?.map((experience, index) => (
                    <Experience
                        key={index}
                        experience={
                            index === openExperience
                                ? { ...experience, key: index, isOpen: true }
                                : { ...experience, key: index }
                        }
                        changeExperience={changeOpenExperience}
                    />
                ))}
            </List>
        </Section>
    );
};

export default Experiences;
