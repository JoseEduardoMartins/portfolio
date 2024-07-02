import React, { useState, useLayoutEffect } from "react";
import Button from "../../../components/Button";
import Translator from "../../../components/I18n/Translator";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import style from "./Introduction.module.css";

import { useTranslation } from "react-i18next";
import {
    resumeEnglish,
    resumePortuguese,
    resumeSpanish,
} from "../../../assets/resumes";

const Introduction = () => {
    const { i18n } = useTranslation();
    const [resume, setResume] = useState();

    useLayoutEffect(() => {
        if (i18n.language === "en-US") setResume(resumeEnglish);
        else if (i18n.language === "pt-BR") setResume(resumePortuguese);
        else if (i18n.language === "es") setResume(resumeSpanish);
    }, [i18n.language]);

    return (
        <Section>
            <div className={style.introduction}>
                <Text>
                    <Translator path="home.introduction.hi" />
                </Text>
                <Title color="secondary">José Eduardo Martins</Title>
                <Title color="tertiary">
                    <Translator path="home.introduction.developer" />
                </Title>
                <Text color="secondary">
                    <Translator path="home.introduction.description" />
                </Text>
                <Button href={resume} size="small">
                    <Translator path="home.introduction.resume" />
                </Button>
            </div>
        </Section>
    );
};

export default Introduction;
