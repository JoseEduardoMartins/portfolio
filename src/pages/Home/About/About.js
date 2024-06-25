import Translator from "../../../components/I18n/Translator";
import Section from "../../../components/Section";
import Subtitle from "../../../components/Subtitle";
import Text from "../../../components/Text";

const About = () => (
    <Section id="about">
        <Subtitle>
            <Translator path="home.about.title" />
        </Subtitle>
        <Text color="secondary">
            <Translator path="home.about.description1" />
        </Text>
        <Text color="secondary">
            <Translator path="home.about.description2" />
        </Text>
        <Text color="secondary">
            <Translator path="home.about.description3" />
        </Text>
    </Section>
);

export default About;
