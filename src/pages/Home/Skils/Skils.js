import Translator from "../../../components/I18n/Translator";
import List from "../../../components/List";
import Section from "../../../components/Section";
import Skil from "../../../components/Skil";
import Subtitle from "../../../components/Subtitle";

const skils = [
    { key: 1, value: "JavaScript" },
    { key: 2, value: "Node" },
    { key: 3, value: "React" },
    { key: 4, value: "Typescript" },
    { key: 5, value: "Vue.js" },
    { key: 6, value: "HTML5" },
    { key: 7, value: "CSS3" },
    { key: 8, value: "SCSS" },
    { key: 9, value: "Api Rest" },
    { key: 10, value: "Amazon web services" },
    { key: 11, value: "Jest" },
    { key: 12, value: "Swagger" },
    { key: 13, value: "Banco de dados" },
    { key: 14, value: "Programação Orientada a Objetos" },
    { key: 15, value: "Git" },
    { key: 16, value: "GitHub" },
    { key: 17, value: "GitLab" },
    { key: 18, value: "Linux" },
    { key: 19, value: "Nginx" },
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
