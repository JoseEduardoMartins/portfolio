import { useTranslation } from "react-i18next";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";
import config from "../../../config";
import socials from "../../../data/socials";
import style from "./Contact.module.css";

const Contact = () => {
    const { t } = useTranslation();

    const whatsappHref = `${config.whatsapp.url}${config.whatsapp.phone}?text=${encodeURIComponent(
        t("home.contact.whatsappMessage")
    )}`;

    return (
        <section id="contact" className={style.section}>
            <Reveal className={style.card}>
                <div className={style.glow} />
                <span className={style.eyebrow}>{t("home.contact.eyebrow")}</span>
                <h2 className={style.title}>{t("home.contact.title")}</h2>
                <p className={style.description}>
                    {t("home.contact.description")}
                </p>

                <div className={style.actions}>
                    <a
                        className={style.primary}
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon size="small">whatsapp</Icon>
                        {t("home.contact.letsGo")}
                    </a>
                    <a
                        className={style.secondary}
                        href={`mailto:${config.email.address}`}
                    >
                        <Icon size="small">email</Icon>
                        {config.email.address}
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
            </Reveal>
        </section>
    );
};

export default Contact;
