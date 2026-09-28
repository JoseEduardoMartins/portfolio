import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../../../../components/Reveal";
import Icon from "../../../../components/Icon";
import {
  formatMonthYear,
  durationInYearsMonths,
  DurationLabels,
} from "../../../../utils/date";
import { Experience as ExperienceData } from "../../../../data/experiences";

interface ExperienceProps {
  experience: ExperienceData;
  delay: number;
}

const Experience = ({ experience, delay }: ExperienceProps) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(experience.current === true);

  const start = formatMonthYear(experience.start, i18n.language);
  const end = experience.current
    ? t("home.experience.present")
    : formatMonthYear(experience.end, i18n.language);

  const duration = durationInYearsMonths(
    experience.start,
    experience.end,
    t("home.experience.duration", { returnObjects: true }) as DurationLabels
  );

  const locationType = t(
    `home.experience.locationType.${experience.locationType}`
  );

  const cardCls = open
    ? "border-accent shadow-[var(--shadow-glow)]"
    : "border-border hover:border-border-strong";

  const toggleCls = open
    ? "text-accent border-accent"
    : "text-text-muted border-border hover:text-accent hover:border-accent";

  return (
    <Reveal className="relative" delay={delay}>
      <span className="absolute left-[-30px] top-[26px] w-[14px] h-[14px] rounded-full bg-bg border-2 border-accent shadow-[0_0_0_4px_var(--accent-softer)] z-[1] max-[560px]:left-[-22px]" />

      <div
        className={`bg-surface border rounded-[var(--radius)] py-[22px] px-6 cursor-pointer transition-[border-color,transform,box-shadow] duration-[250ms] ease-[var(--ease)] hover:-translate-y-0.5 max-[560px]:p-[18px] ${cardCls}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display text-[18px] font-semibold text-text">
              {experience.role}
            </h3>
            <div className="inline-flex items-center gap-2 text-accent font-medium text-[15px] [&_svg]:w-4 [&_svg]:h-4">
              <Icon size="small">briefcase</Icon>
              <span>{experience.company}</span>
              {experience.current && (
                <span className="py-[3px] px-2.5 text-[11px] font-semibold tracking-[0.04em] uppercase text-accent bg-[var(--accent-soft)] rounded-full">
                  {t("home.experience.present")}
                </span>
              )}
            </div>
          </div>
          <button
            className={`inline-flex items-center justify-center w-[34px] h-[34px] rounded-[10px] bg-surface-2 border cursor-pointer shrink-0 transition-[color,border-color] duration-200 ease-[var(--ease)] ${toggleCls}`}
            aria-label="toggle"
            type="button"
          >
            <Icon size="small">{open ? "minus" : "plus"}</Icon>
          </button>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3.5">
          <span className="inline-flex items-center gap-2 text-text-muted text-[13.5px] [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:text-text-dim">
            <Icon size="small">calendar</Icon>
            {start} — {end}
            {duration && <span className="text-text-dim">· {duration}</span>}
          </span>
          <span className="inline-flex items-center gap-2 text-text-muted text-[13.5px] [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:text-text-dim">
            <Icon size="small">location</Icon>
            {experience.location}
            <span className="py-0.5 px-[9px] text-[11px] font-medium capitalize text-text-muted bg-surface-2 border border-border rounded-full">
              {locationType}
            </span>
          </span>
        </div>

        {open && (
          <div className="mt-[18px] pt-[18px] border-t border-border flex flex-col gap-4">
            <p className="text-text-muted text-[15px] leading-[1.7]">
              {t(experience.descriptionKey)}
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="py-[5px] px-3 text-[12.5px] font-medium text-accent bg-[var(--accent-softer)] border border-border rounded-lg"
                >
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
