import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";
import skillGroups from "../../../data/skills";

const Skils = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skils"
      className="w-full max-w-[980px] mx-auto py-24 px-6 scroll-mt-20 flex flex-col gap-9"
    >
      <SectionHeader
        index="03"
        eyebrow={t("home.skils.title")}
        title={t("home.skils.heading")}
      />

      <div className="grid grid-cols-2 gap-[18px] max-[720px]:grid-cols-1">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            className="flex flex-col gap-4 p-6 bg-surface border border-border rounded-[var(--radius)] transition-[border-color,transform] duration-[250ms] ease-[var(--ease)] hover:border-border-strong hover:-translate-y-[3px]"
            delay={index * 70}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[10px] text-accent bg-[var(--accent-soft)] border border-border">
                <Icon size="small">{group.icon}</Icon>
              </span>
              <h3 className="font-display text-base font-semibold text-text">
                {t(group.labelKey)}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="py-1.5 px-3 text-[13px] font-medium text-text-muted bg-surface-2 border border-border rounded-lg transition-[color,border-color,background] duration-200 ease-[var(--ease)] hover:text-accent hover:border-accent hover:bg-[var(--accent-softer)]"
                >
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
