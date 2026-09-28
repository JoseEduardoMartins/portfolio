import { useTranslation } from "react-i18next";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";
import config from "../../../config";
import socials from "../../../data/socials";

const actionBase =
  "inline-flex items-center gap-2.5 py-3.5 px-6 rounded-xl text-[15px] font-semibold cursor-pointer transition-[transform,box-shadow,border-color,color] duration-200 ease-[var(--ease)]";

const Contact = () => {
  const { t } = useTranslation();

  const whatsappHref = `${config.whatsapp.url}${
    config.whatsapp.phone
  }?text=${encodeURIComponent(t("home.contact.whatsappMessage"))}`;

  return (
    <section
      id="contact"
      className="w-full max-w-[980px] mx-auto pt-24 px-6 pb-[60px] scroll-mt-20"
    >
      <Reveal className="relative overflow-hidden flex flex-col items-center text-center gap-[18px] py-14 px-8 bg-surface border border-border rounded-[var(--radius-lg)] shadow-[var(--shadow)] max-[560px]:py-10 max-[560px]:px-5">
        <div className="absolute top-[-60%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[image:var(--gradient)] blur-[90px] opacity-[0.14] pointer-events-none" />
        <span className="relative text-[13px] font-semibold tracking-[0.16em] uppercase text-accent">
          {t("home.contact.eyebrow")}
        </span>
        <h2 className="relative font-display text-[clamp(1.8rem,5vw,2.8rem)] font-bold tracking-[-0.02em] text-text">
          {t("home.contact.title")}
        </h2>
        <p className="relative max-w-[520px] text-base text-text-muted leading-[1.7]">
          {t("home.contact.description")}
        </p>

        <div className="relative flex flex-wrap justify-center gap-3.5 mt-2.5">
          <a
            className={`${actionBase} text-bg bg-accent border border-accent hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(45,212,191,0.6)]`}
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <Icon size="small">whatsapp</Icon>
            {t("home.contact.letsGo")}
          </a>
          <a
            className={`${actionBase} text-text bg-transparent border border-border-strong hover:-translate-y-0.5 hover:border-accent hover:text-accent max-[560px]:break-all`}
            href={`mailto:${config.email.address}`}
          >
            <Icon size="small">email</Icon>
            {config.email.address}
          </a>
        </div>

        <div className="relative flex gap-3 mt-2">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-text-muted bg-surface-2 border border-border transition-[transform,color,border-color] duration-200 ease-[var(--ease)] hover:-translate-y-[3px] hover:text-accent hover:border-accent"
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
