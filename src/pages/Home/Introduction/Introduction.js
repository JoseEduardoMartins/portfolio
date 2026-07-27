import { useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import Translator from "../../../components/I18n/Translator";
import Icon from "../../../components/Icon";
import socials from "../../../data/socials";
import {
    resumeEnglish,
    resumePortuguese,
    resumeSpanish,
} from "../../../assets/resumes";
import style from "./Introduction.module.css";

const Introduction = () => {
    const { i18n } = useTranslation();
    const [resume, setResume] = useState(resumePortuguese);

    useLayoutEffect(() => {
        if (i18n.language === "en-US") setResume(resumeEnglish);
        else if (i18n.language === "es") setResume(resumeSpanish);
        else setResume(resumePortuguese);
    }, [i18n.language]);

    return (
        <section id="home" className={style.hero}>
            <div className={style.inner}>
                <span className={style.badge}>
                    <span className={style.pulse} />
                    <Translator path="home.introduction.available" />
                </span>

                <p className={style.greeting}>
                    <Translator path="home.introduction.hi" />
                </p>

                <h1 className={style.name}>José Eduardo Martins</h1>

                <h2 className={style.role}>
                    <Translator path="home.introduction.developer" />
                </h2>

                <p className={style.description}>
                    <Translator path="home.introduction.description" />
                </p>

                <div className={style.actions}>
                    <a
                        className={style.primary}
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Translator path="home.introduction.resume" />
                        <Icon size="small">download</Icon>
                    </a>
                    <a className={style.secondary} href="#repositories">
                        <Translator path="home.introduction.viewWork" />
                        <Icon size="small">arrow</Icon>
                    </a>
                </div>

                <div className={style.socials}>
                    {socials.map((social) => (
                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            className={style.social}
                        >
                            <Icon size="small">{social.icon}</Icon>
                        </a>
                    ))}
                </div>
            </div>

            <a href="#about" className={style.scroll} aria-label="scroll">
                <span className={style.mouse}>
                    <span className={style.wheel} />
                </span>
            </a>
        </section>
    );
};

export default Introduction;
