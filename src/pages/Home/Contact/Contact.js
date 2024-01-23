import Translator from "../../../components/I18n/Translator";
import Section from "../../../components/Section";
import Box from "../../../components/Box";
import Item from "../../../components/Box/Item";
import Subtitle from "../../../components/Subtitle";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import config from "../../../config";

const Contact = () => {
    const handleClick = () =>
        window.open(
            `${config.whatsapp.url}${config.whatsapp.phone}?text=Olá Eduardo Martins, podemos conversar sobre um projeto?`,
            "_blank"
        );

    return (
        <Section id="contact">
            <Box color="secondary" justify="space-around">
                <Item>
                    <Subtitle color="primary">
                        <Translator path="home.contact.title" />
                    </Subtitle>
                </Item>
                <Item>
                    <Text color="tertiary">
                        <Translator path="home.contact.description" />
                    </Text>
                </Item>
                <Item>
                    <Button color="secondary" onClick={handleClick}>
                        <Icon size="small">rocket</Icon>
                        <Translator path="home.contact.letsGo" />
                    </Button>
                </Item>
            </Box>
        </Section>
    );
};

export default Contact;
