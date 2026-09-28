import { useTranslation } from "react-i18next";
import Translator from "../../../components/I18n/Translator";
import SectionHeader from "../../../components/SectionHeader";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";

const stats = [
  { value: "5+", labelKey: "home.about.stats.years" },
  { value: "15+", labelKey: "home.about.stats.projects" },
  { value: "3", labelKey: "home.about.stats.companies" },
];

const About = () => {
  const { t } = useTranslation();
  const facts = t("home.about.facts", { returnObjects: true }) as string[];

  return (
    <section
      id="about"
      className="w-full max-w-[980px] mx-auto py-24 px-6 scroll-mt-20 flex flex-col gap-9"
    >
      <SectionHeader
        index="01"
        eyebrow={t("header.about")}
        title={t("home.about.title")}
      />

      <div className="grid grid-cols-[1.5fr_1fr] gap-8 items-start max-[800px]:grid-cols-1">
        <Reveal className="flex flex-col gap-[18px] [&_p]:text-text-muted [&_p]:text-[16.5px] [&_p]:leading-[1.75]">
          <p>
            <Translator path="home.about.description1" />
          </p>
          <p>
            <Translator path="home.about.description2" />
          </p>
          <p>
            <Translator path="home.about.description3" />
          </p>

          <div className="flex gap-3.5 mt-3 flex-wrap">
            {stats.map((stat) => (
              <div
                key={stat.labelKey}
                className="flex-1 min-w-[120px] flex flex-col gap-1 py-[18px] px-5 bg-surface border border-border rounded-[var(--radius-sm)]"
              >
                <span className="font-display text-[30px] font-bold bg-[var(--gradient)] bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[13px] text-text-muted">
                  <Translator path={stat.labelKey} />
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          className="relative overflow-hidden flex flex-col gap-[18px] p-[26px] bg-surface border border-border rounded-[var(--radius)] shadow-[var(--shadow)]"
          delay={120}
        >
          <div className="absolute top-[-40%] right-[-30%] w-[220px] h-[220px] bg-[var(--gradient)] blur-[70px] opacity-[0.16] pointer-events-none" />
          <span className="inline-flex items-center gap-2 font-display font-semibold text-text [&_svg]:text-accent">
            <Icon size="small">sparkles</Icon>
            <Translator path="home.about.quickFacts" />
          </span>
          <ul className="flex flex-col gap-3">
            {Array.isArray(facts) &&
              facts.map((fact, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-text-muted text-[15px] leading-[1.5] [&_svg]:text-accent [&_svg]:shrink-0 [&_svg]:mt-[5px] [&_svg]:w-3 [&_svg]:h-3"
                >
                  <Icon size="small">dot</Icon>
                  <span>{fact}</span>
                </li>
              ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
