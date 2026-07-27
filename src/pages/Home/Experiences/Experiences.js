import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import experiences from "../../../data/experiences";
import Experience from "./Experience/Experience";
import style from "./Experiences.module.css";

const Experiences = () => {
    const { t } = useTranslation();

    return (
        <section id="experiences" className={style.section}>
            <SectionHeader
                index="02"
                eyebrow={t("header.experiences")}
                title={t("home.experience.title")}
            />

            <div className={style.timeline}>
                {experiences.map((experience, index) => (
                    <Experience
                        key={experience.id}
                        experience={experience}
                        delay={index * 90}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experiences;
