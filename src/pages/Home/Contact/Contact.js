import Section from "../../../components/Section";
import Box from "../../../components/Box";
import Item from "../../../components/Box/Item";
import Subtitle from "../../../components/Subtitle";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import config from "../../../config";

const Contact = () => {
  const handleClick = () => window.open(`${config.whatsapp.url}${config.whatsapp.phone}?text=Olá%José%Eduardo,%podemos%conversar%sobre%um%projeto?`, '_blank');
  
  return(
    <Section id="contact">
        <Box color="secondary" justify="space-around">
            <Item>
                <Subtitle color="primary">Start a project</Subtitle>
            </Item>
            <Item>
                <Text color="tertiary">Interested in working together? We should queue up a time to chat.</Text>
            </Item>
            <Item>
                <Button color="secondary" onClick={handleClick}>
                    <Icon size="small">rocket</Icon>
                    Let's go
                </Button>
            </Item>
        </Box>
    </Section>
  )
};

export default Contact;