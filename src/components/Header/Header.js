import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <a className={style.link} href='/#'>José Eduardo Martins</a>
            <nav className={style.menu}>
                <a className={style.menu_link} href='#about'>About</a>
                <a className={style.menu_link} href='/#'>Experience</a>
                <a className={style.menu_link} href='/#'>Education</a>
                <a className={style.menu_link} href='/#'>Certifications</a>
                <a className={style.menu_link} href='/#'>Skills</a>
                <a className={style.menu_link} href='/#'>Languages</a>
            </nav>
        </header>
    );
}

export default Header;