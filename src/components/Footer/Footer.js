import Translator from "../I18n/Translator";
import Text from "../Text";
import style from "./Footer.module.css";

const Footer = () => (
    <footer className={style.footer}>
        <Text color="secondary">
            <Translator path="footer.copyright" />
        </Text>
    </footer>
);

export default Footer;
