import Menu from "./Menu";
import style from "./Header.module.css";

const Header = () => (
    <header className={style.header}>
        <a className={style.logo} href="#home" aria-label="José Eduardo Martins">
            <span className={style.mark}>JEM</span>
            <span className={style.logoText}>José Eduardo Martins</span>
        </a>
        <Menu />
    </header>
);

export default Header;
