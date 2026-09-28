import { useTranslation } from "react-i18next";
import Translator from "../I18n/Translator";
import Icon from "../Icon";
import socials from "../../data/socials";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border bg-bg-elevated">
      <div className="w-full max-w-[980px] mx-auto py-9 px-6 flex items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-3.5">
          <span className="inline-flex items-center justify-center w-[42px] h-[42px] font-display text-sm font-bold text-bg bg-[var(--gradient)] rounded-[11px]">
            JEM
          </span>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-text">
              <Translator path="footer.copyright" />
            </p>
            <p className="text-[13px] text-text-dim">{t("footer.built")}</p>
          </div>
        </div>

        <div className="flex gap-2.5">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex items-center justify-center w-10 h-10 rounded-[11px] text-text-muted bg-surface border border-border transition-[transform,color,border-color] duration-200 ease-[var(--ease)] hover:-translate-y-[3px] hover:text-accent hover:border-accent"
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
