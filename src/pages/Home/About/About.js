import { useTranslation } from "react-i18next";
import Translator from "../../../components/I18n/Translator";
import SectionHeader from "../../../components/SectionHeader";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";
import style from "./About.module.css";

const stats = [
    { value: "5+", labelKey: "home.about.stats.years" },
    { value: "15+", labelKey: "home.about.stats.projects" },
    { value: "3", labelKey: "home.about.stats.companies" },
];

const About = () => {
    const { t } = useTranslation();
    const facts = t("home.about.facts", { returnObjects: true });

    return (
        <section id="about" className={style.section}>
            <SectionHeader
                index="01"
                eyebrow={t("header.about")}
                title={t("home.about.title")}
            />

            <div className={style.grid}>
                <Reveal className={style.text}>
                    <p>
                        <Translator path="home.about.description1" />
                    </p>
                    <p>
                        <Translator path="home.about.description2" />
                    </p>
                    <p>
                        <Translator path="home.about.description3" />
                    </p>

                    <div className={style.stats}>
                        {stats.map((stat) => (
                            <div key={stat.labelKey} className={style.stat}>
                                <span className={style.statValue}>
                                    {stat.value}
                                </span>
                                <span className={style.statLabel}>
                                    <Translator path={stat.labelKey} />
                                </span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal className={style.card} delay={120}>
                    <div className={style.cardGlow} />
                    <span className={style.cardTitle}>
                        <Icon size="small">sparkles</Icon>
                        <Translator path="home.about.quickFacts" />
                    </span>
                    <ul className={style.facts}>
                        {Array.isArray(facts) &&
                            facts.map((fact, index) => (
                                <li key={index} className={style.fact}>
                                    <Icon size="small">dot</Icon>
                                    <span>{fact}</span>
                                </li>
                            ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
