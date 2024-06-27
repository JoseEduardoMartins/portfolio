import Translator from "../../../components/I18n/Translator";
import List from "../../../components/List";
import Section from "../../../components/Section";
import Skil from "../../../components/Skil";
import Subtitle from "../../../components/Subtitle";

const skils = [
    { key: 1, value: "Linux" },
    { key: 2, value: "Windows" },
    { key: 3, value: "JavaScript" },
    { key: 4, value: "TypeScript" },
    { key: 5, value: "Node.js" },
    { key: 6, value: "EsLint" },
    { key: 7, value: "Prettier" },
    { key: 8, value: "Express.js" },
    { key: 9, value: "Nest.js" },
    { key: 10, value: "Swagger" },
    { key: 11, value: "Class Validator" },
    { key: 12, value: "Class Transformer" },
    { key: 13, value: "Type ORM" },
    { key: 14, value: "React.js" },
    { key: 15, value: "Next.js" },
    { key: 16, value: "React Query" },
    { key: 17, value: "React Hook Form" },
    { key: 18, value: "Zod" },
    { key: 19, value: "Jest" },
    { key: 20, value: "HTML" },
    { key: 21, value: "CSS" },
    { key: 22, value: "Tailwind CSS" },
    { key: 23, value: "Bootstrap" },
    { key: 24, value: "GitHub" },
    { key: 25, value: "GitLab" },
    { key: 26, value: "Git" },
    { key: 27, value: "CI / CD" },
    { key: 28, value: "Docker" },
    { key: 29, value: "RabbitMQ" },
    { key: 30, value: "Amazon web services" },
    { key: 31, value: "PostgreSQL" },
    { key: 32, value: "Microsoft SQL Server" },
    { key: 33, value: "MySQL" },
    { key: 34, value: "MariaDB" },
    { key: 35, value: "MongoDB" },
];

const Skils = () => (
    <Section id="skils">
        <Subtitle>
            <Translator path="home.skils.title" />
        </Subtitle>
        <List flexWrap="wrap">
            {skils?.map((skil) => (
                <Skil key={skil.key} theme="primary">
                    {skil.value}
                </Skil>
            ))}
        </List>
    </Section>
);

export default Skils;
