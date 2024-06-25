import Translator from "../I18n/Translator";
import TranslateOptions from "../I18n/TranslateOptions";
import style from "./Header.module.css";

const Header = () => (
    <header className={style.header}>
        <a className={style.logo} href="/#">
            José Eduardo Martins
        </a>
        <nav className={style.menu}>
            <a className={style.menu_link} href="#about">
                <Translator path="header.about" />
            </a>
            <a className={style.menu_link} href="#experiences">
                <Translator path="header.experiences" />
            </a>
            <a className={style.menu_link} href="#repositories">
                <Translator path="header.repositories" />
            </a>
            <a className={style.menu_link} href="#contact">
                <Translator path="header.contact" />
            </a>
            <TranslateOptions />
        </nav>
    </header>
);

export default Header;
