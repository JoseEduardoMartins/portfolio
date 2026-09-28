import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";
import education from "../../../data/education";
import style from "./Education.module.css";

const Education = () => {
    const { t } = useTranslation();

    return (
        <section id="education" className={style.section}>
            <SectionHeader
                index="04"
                eyebrow={t("home.education.title")}
                title={t("home.education.heading")}
            />

            <div className={style.grid}>
                {education.map((item, index) => (
                    <Reveal
                        key={item.id}
                        className={style.card}
                        delay={index * 80}
                    >
                        <span className={style.icon}>
                            <Icon size="small">education</Icon>
                        </span>
                        <div className={style.content}>
                            <h3 className={style.institution}>
                                {item.institution}
                            </h3>
                            <p className={style.course}>{t(item.courseKey)}</p>
                            <span className={style.period}>
                                <Icon size="small">calendar</Icon>
                                {item.start} — {item.end}
                            </span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Education;
