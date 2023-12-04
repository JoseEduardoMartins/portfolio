import Menu from "./Menu";
import style from "./Header.module.css";

const Header = () => (
    <header className={style.header}>
        <a className={style.logo} href="/#">
            José Eduardo Martins
        </a>
        <Menu />
    </header>
);
export default Header;
