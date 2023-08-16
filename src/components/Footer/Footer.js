import Text from "../Text";
import style from "./Footer.module.css";

const Footer = () => (
    <footer className={style.footer}>
        <Text color="secondary">© Copyright 2023. Made by José Eduardo Martins</Text>
    </footer>
);

export default Footer;