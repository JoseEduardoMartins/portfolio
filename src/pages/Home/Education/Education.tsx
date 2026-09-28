import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";
import education from "../../../data/education";

const Education = () => {
  const { t } = useTranslation();

  return (
    <section
      id="education"
      className="w-full max-w-[980px] mx-auto py-24 px-6 scroll-mt-20 flex flex-col gap-9"
    >
      <SectionHeader
        index="04"
        eyebrow={t("home.education.title")}
        title={t("home.education.heading")}
      />

      <div className="grid grid-cols-2 gap-[18px] max-[720px]:grid-cols-1">
        {education.map((item, index) => (
          <Reveal
            key={item.id}
            className="flex gap-4 p-6 bg-surface border border-border rounded-[var(--radius)] transition-[border-color,transform] duration-[250ms] ease-[var(--ease)] hover:border-border-strong hover:-translate-y-[3px]"
            delay={index * 80}
          >
            <span className="inline-flex items-center justify-center w-[42px] h-[42px] shrink-0 rounded-xl text-accent bg-[var(--accent-soft)] border border-border">
              <Icon size="small">education</Icon>
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-base font-semibold text-text">
                {item.institution}
              </h3>
              <p className="text-sm text-text-muted leading-[1.55]">
                {t(item.courseKey)}
              </p>
              <span className="inline-flex items-center gap-2 text-[13px] text-text-dim [&_svg]:w-[15px] [&_svg]:h-[15px]">
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
