import { useState, useEffect, useRef } from "react";
import Translator from "../../I18n/Translator";
import TranslateOptions from "../../I18n/TranslateOptions";
import Icon from "../../Icon";
import useActiveSection from "../../../hooks/useActiveSection";
import style from "./Menu.module.css";

const navItems = [
    { id: "about", path: "header.about" },
    { id: "experiences", path: "header.experiences" },
    { id: "skils", path: "header.skills" },
    { id: "repositories", path: "header.repositories" },
    { id: "contact", path: "header.contact" },
];

const sectionIds = [
    "home",
    "about",
    "experiences",
    "skils",
    "education",
    "repositories",
    "contact",
];

const Menu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const active = useActiveSection(sectionIds);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsActive(false);
            }
        };
        if (isActive) window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, [isActive]);

    const renderLinks = (onClick) =>
        navItems.map((item) => (
            <a
                key={item.id}
                className={`${style.link} ${
                    active === item.id ? style.active : ""
                }`}
                href={`#${item.id}`}
                onClick={onClick}
            >
                <Translator path={item.path} />
            </a>
        ));

    return (
        <>
            <nav className={style.desktop}>
                {renderLinks()}
                <TranslateOptions />
            </nav>

            <div className={style.mobile} ref={dropdownRef}>
                <button
                    onClick={() => setIsActive((prev) => !prev)}
                    className={style.burger}
                    aria-label="menu"
                    type="button"
                >
                    <Icon size="small">{isActive ? "close" : "menu"}</Icon>
                </button>
                {isActive && (
                    <nav className={style.dropdown}>
                        {renderLinks(() => setIsActive(false))}
                        <div className={style.dropdownLang}>
                            <TranslateOptions />
                        </div>
                    </nav>
                )}
            </div>
        </>
    );
};

export default Menu;
