import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";
import skillGroups from "../../../data/skills";
import style from "./Skils.module.css";

const Skils = () => {
    const { t } = useTranslation();

    return (
        <section id="skils" className={style.section}>
            <SectionHeader
                index="03"
                eyebrow={t("home.skils.title")}
                title={t("home.skils.heading")}
            />

            <div className={style.grid}>
                {skillGroups.map((group, index) => (
                    <Reveal
                        key={group.id}
                        className={style.group}
                        delay={index * 70}
                    >
                        <div className={style.groupHead}>
                            <span className={style.groupIcon}>
                                <Icon size="small">{group.icon}</Icon>
                            </span>
                            <h3 className={style.groupTitle}>
                                {t(group.labelKey)}
                            </h3>
                        </div>
                        <div className={style.chips}>
                            {group.items.map((item) => (
                                <span key={item} className={style.chip}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Skils;
