import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../../../../components/Reveal";
import Icon from "../../../../components/Icon";
import { formatMonthYear, durationInYearsMonths } from "../../../../utils/date";
import style from "./Experience.module.css";

const Experience = ({ experience, delay }) => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(experience.current === true);

    const start = formatMonthYear(experience.start, i18n.language);
    const end = experience.current
        ? t("home.experience.present")
        : formatMonthYear(experience.end, i18n.language);

    const duration = durationInYearsMonths(
        experience.start,
        experience.end,
        t("home.experience.duration", { returnObjects: true })
    );

    const locationType = t(
        `home.experience.locationType.${experience.locationType}`
    );

    return (
        <Reveal className={style.item} delay={delay}>
            <span className={style.node} />

            <div
                className={`${style.card} ${open ? style.open : ""}`}
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className={style.head}>
                    <div className={style.headMain}>
                        <h3 className={style.role}>{experience.role}</h3>
                        <div className={style.company}>
                            <Icon size="small">briefcase</Icon>
                            <span>{experience.company}</span>
                            {experience.current && (
                                <span className={style.badge}>
                                    {t("home.experience.present")}
                                </span>
                            )}
                        </div>
                    </div>
                    <button
                        className={style.toggle}
                        aria-label="toggle"
                        type="button"
                    >
                        <Icon size="small">{open ? "minus" : "plus"}</Icon>
                    </button>
                </div>

                <div className={style.meta}>
                    <span className={style.metaItem}>
                        <Icon size="small">calendar</Icon>
                        {start} — {end}
                        {duration && (
                            <span className={style.dim}>· {duration}</span>
                        )}
                    </span>
                    <span className={style.metaItem}>
                        <Icon size="small">location</Icon>
                        {experience.location}
                        <span className={style.chip}>{locationType}</span>
                    </span>
                </div>

                {open && (
                    <div className={style.body}>
                        <p className={style.description}>
                            {t(experience.descriptionKey)}
                        </p>
                        <div className={style.stack}>
                            {experience.stack.map((tech) => (
                                <span key={tech} className={style.tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Reveal>
    );
};

export default Experience;
