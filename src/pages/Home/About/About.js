import Section from "../../../components/Section";
import Subtitle from "../../../components/Subtitle";
import Text from "../../../components/Text";

const About = () => {
  return (
    <Section id="about">
      <Subtitle>ABOUT ME</Subtitle>
      <Text color="secondary">
        I've been working in software development for over a year and my
        favorite language is Javascript and its full range of features and
        libraries.
      </Text>
      <Text color="secondary">
        I currently work as a Full Stack developer, developing automation
        systems, in order to improve quality, performance and user experience.
        For development I use React, Node, Typescript and SQL technologies.
      </Text>
      <Text color="secondary">
        I have experience with front-end and back-end development, but as I'm
        always looking to improve my skills, I recently did some freelance work,
        working with mobile programming using React Native, and more and more
        I'm understanding its beauty and benefits.
      </Text>
    </Section>
  );
};

export default About;
