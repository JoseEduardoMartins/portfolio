import Section from "../../../components/Section/Section";
import Title from "../../../components/Title/Title";
import Text from "../../../components/Text";
import Button from "../../../components/Button/Button";
import curriculum from "../../../assets/profile.pdf";
import style from "./Introduction.module.css";

const Introduction = () => {
  return (
    <Section>
      <div className={style.introduction}>
        <Text>Hi, my name is</Text>
        <Title color="secondary">José Eduardo Martins</Title>
        <Title color="tertiary">Developer Full Stack</Title>
        <Text color="secondary">
          I'm a linux user developer passionate about all kinds of technology,
          with knowledge in hardware and software, who always seeks to improve
          himself as a professional.
        </Text>
        <Button href={curriculum} size="small">
          Curriculum
        </Button>
      </div>
    </Section>
  );
};

export default Introduction;
