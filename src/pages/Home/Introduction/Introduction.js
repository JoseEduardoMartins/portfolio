import Translator from "../../../components/I18n/Translator";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Title/Title";
import Text from "../../../components/Text";
import Button from "../../../components/Button/Button";
import resume from "../../../assets/profile.pdf";
import style from "./Introduction.module.css";

const Introduction = () => (
    <Section>
        <div className={style.introduction}>
            <Text>
                <Translator path="home.introduction.hi" />
            </Text>
            <Title color="secondary">José Eduardo Martins</Title>
            <Title color="tertiary">
                <Translator path="home.introduction.developer" />
            </Title>
            <Text color="secondary">
                <Translator path="home.introduction.description" />
            </Text>
            <Button href={resume} size="small">
                <Translator path="home.introduction.resume" />
            </Button>
        </div>
    </Section>
);

export default Introduction;
