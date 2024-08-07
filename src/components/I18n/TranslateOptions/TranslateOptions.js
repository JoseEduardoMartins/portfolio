import React, { useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import Flag from "../Flag";
import { BrasilFlag, EuaFlag, SpainFlag } from "../../../assets/flags";
import style from "./TranslateOptions.module.css";

const TranslateOptions = () => {
    const { i18n, t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState();

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        setSelectedLanguage(i18n.language);
    };

    useLayoutEffect(() => {
        setSelectedLanguage(i18n.language);
    }, [i18n.language]);

    return (
        <div className={style["flags-container"]}>
            <Flag
                title={t("translateOptions.portuguese")}
                image={BrasilFlag}
                isSelected={selectedLanguage === "pt-BR"}
                onClick={() => handleChangeLanguage("pt-BR")}
            />
            <Flag
                title={t("translateOptions.english")}
                image={EuaFlag}
                isSelected={selectedLanguage === "en-US"}
                onClick={() => handleChangeLanguage("en-US")}
            />
            <Flag
                title={t("translateOptions.spanish")}
                image={SpainFlag}
                isSelected={selectedLanguage === "es"}
                onClick={() => handleChangeLanguage("es")}
            />
        </div>
    );
};

export default TranslateOptions;
