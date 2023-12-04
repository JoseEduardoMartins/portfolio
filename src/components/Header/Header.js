// import Translator from "../I18n/Translator";
// import TranslateOptions from "../I18n/TranslateOptions";
// import Icon from "../Icon";
import Menu from "./Menu";
import style from "./Header.module.css";

const Header = () => {
    // const handleMenu = () => {
    //     const element = document.getElementById("menu");

    //     const value = window.getComputedStyle(element).display;

    //     element.style.display = value === "none" ? "flex" : "none";
    // };

    return (
        <header className={style.header}>
            <a className={style.logo} href="/#">
                José Eduardo Martins
            </a>
            <Menu />
            {/* <div className={style.burger} onClick={handleMenu}>
                <Icon>menu</Icon>
            </div>
            <nav id="menu" className={style.menu}>
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
            </nav> */}
        </header>
    );
};

export default Header;
