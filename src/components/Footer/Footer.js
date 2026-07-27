import { useTranslation } from "react-i18next";
import Translator from "../I18n/Translator";
import Icon from "../Icon";
import socials from "../../data/socials";
import style from "./Footer.module.css";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={style.footer}>
            <div className={style.inner}>
                <div className={style.left}>
                    <span className={style.mark}>JEM</span>
                    <div className={style.meta}>
                        <p className={style.copyright}>
                            <Translator path="footer.copyright" />
                        </p>
                        <p className={style.built}>{t("footer.built")}</p>
                    </div>
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
        </footer>
    );
};

export default Footer;
