import React, { useState, useLayoutEffect, useRef } from "react";
import Translator from "../../I18n/Translator";
import TranslateOptions from "../../I18n/TranslateOptions";
import Icon from "../../Icon";
import style from "./Menu.module.css";

const Menu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    useLayoutEffect(() => {
        const pageClickEvent = (e) => {
            if (
                dropdownRef.current !== null &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsActive(!isActive);
            }
        };

        if (isActive) {
            window.addEventListener("click", pageClickEvent);
        }

        return () => {
            window.removeEventListener("click", pageClickEvent);
        };
    }, [isActive]);

    return (
        <>
            <div className={style.dropdown_conteiner} ref={dropdownRef}>
                <div onClick={onClick} className={style.burger}>
                    <Icon>menu</Icon>
                </div>
                {isActive && (
                    <nav className={style.dropdownMenu}>
                        <a className={style.link} href="#about">
                            <Translator path="header.about" />
                        </a>
                        <a className={style.link} href="#experiences">
                            <Translator path="header.experiences" />
                        </a>
                        <a className={style.link} href="#repositories">
                            <Translator path="header.repositories" />
                        </a>
                        <a className={style.link} href="#contact">
                            <Translator path="header.contact" />
                        </a>
                        <TranslateOptions />
                    </nav>
                )}
            </div>
            <div className={style.normal_conteiner}>
                <nav className={style.menu}>
                    <a className={style.link} href="#about">
                        <Translator path="header.about" />
                    </a>
                    <a className={style.link} href="#experiences">
                        <Translator path="header.experiences" />
                    </a>
                    <a className={style.link} href="#repositories">
                        <Translator path="header.repositories" />
                    </a>
                    <a className={style.link} href="#contact">
                        <Translator path="header.contact" />
                    </a>
                    <TranslateOptions />
                </nav>
            </div>
        </>
    );
};

export default Menu;
