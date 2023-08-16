import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <a className={style.logo} href="/#">José Eduardo Martins</a>
            <nav className={style.menu}>
                <a className={style.menu_link} href="#about">About</a>
                <a className={style.menu_link} href="/#">Experience</a>
                <a className={style.menu_link} href="/#">Education</a>
                <a className={style.menu_link} href="#repositories">Repositories</a>
                <a className={style.menu_link} href="#skils">Skills</a>
                <a className={style.menu_link} href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;