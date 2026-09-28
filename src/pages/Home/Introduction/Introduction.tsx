import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Translator from "../../../components/I18n/Translator";
import Icon from "../../../components/Icon";
import socials from "../../../data/socials";
import {
  resumeEnglish,
  resumePortuguese,
  resumeSpanish,
} from "../../../assets/resumes";

const actionBase =
  "inline-flex items-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-[15px] cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-[var(--ease)]";

const Introduction = () => {
  const { i18n } = useTranslation();
  const [resume, setResume] = useState(resumePortuguese);

  useLayoutEffect(() => {
    if (i18n.language === "en-US") setResume(resumeEnglish);
    else if (i18n.language === "es") setResume(resumeSpanish);
    else setResume(resumePortuguese);
  }, [i18n.language]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-70px)] w-full flex items-center justify-center pt-[90px] px-6 pb-[60px]"
    >
      <div className="w-full max-w-[820px] flex flex-col gap-[22px]">
        <span className="inline-flex items-center gap-2.5 self-start py-[7px] px-3.5 text-[13px] font-medium text-accent bg-[var(--accent-soft)] border border-border rounded-full">
          <span className="w-2 h-2 rounded-full bg-accent animate-[badgePulse_2s_infinite]" />
          <Translator path="home.introduction.available" />
        </span>

        <p className="text-[18px] text-text-muted">
          <Translator path="home.introduction.hi" />
        </p>

        <h1 className="font-display text-[clamp(2.7rem,8vw,5rem)] leading-[1.02] font-bold tracking-[-0.02em] bg-[image:var(--gradient)] bg-clip-text text-transparent">
          José Eduardo Martins
        </h1>

        <h2 className="font-display text-[clamp(1.4rem,4vw,2.3rem)] font-semibold text-text tracking-[-0.01em]">
          <Translator path="home.introduction.developer" />
        </h2>

        <p className="max-w-[620px] text-[17px] text-text-muted leading-[1.7]">
          <Translator path="home.introduction.description" />
        </p>

        <div className="flex flex-wrap gap-3.5 mt-1.5">
          <a
            className={`${actionBase} text-bg bg-accent border border-accent hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(45,212,191,0.6)]`}
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            <Translator path="home.introduction.resume" />
            <Icon size="small">download</Icon>
          </a>
          <a
            className={`${actionBase} text-text bg-transparent border border-border-strong hover:-translate-y-0.5 hover:border-accent hover:text-accent`}
            href="#repositories"
          >
            <Translator path="home.introduction.viewWork" />
            <Icon size="small">arrow</Icon>
          </a>
        </div>

        <div className="flex gap-3 mt-2.5">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-text-muted bg-surface border border-border transition-[transform,color,border-color] duration-200 ease-[var(--ease)] hover:-translate-y-[3px] hover:text-accent hover:border-accent"
            >
              <Icon size="small">{social.icon}</Icon>
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 opacity-70 max-[700px]:hidden"
        aria-label="scroll"
      >
        <span className="block w-[26px] h-[42px] border-2 border-border-strong rounded-[14px] relative">
          <span className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 rounded-[4px] bg-accent animate-[scrollWheel_1.6s_infinite]" />
        </span>
      </a>
    </section>
  );
};

export default Introduction;
