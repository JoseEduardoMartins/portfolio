import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import works from "../../data/works";

const infinider = works.find((work) => work.id === "infinider");

const linkButtonBase =
  "inline-flex items-center gap-2 py-2.5 px-4 rounded-xl text-[14px] font-semibold transition-[transform,border-color,color,background] duration-200 ease-[var(--ease)] [&_svg]:w-4 [&_svg]:h-4";

const Infinider = () => {
  const { t } = useTranslation();

  if (!infinider) return null;

  return (
    <article className="max-w-[980px] mx-auto px-6 pt-[calc(70px+clamp(2.5rem,7vw,5rem))] pb-24 flex flex-col gap-[clamp(3rem,7vw,5rem)]">
      <Reveal className="flex flex-col gap-6">
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 self-start text-[14px] font-medium text-text-muted transition-colors duration-200 ease-[var(--ease)] hover:text-accent [&_svg]:w-4 [&_svg]:h-4"
        >
          <span className="rotate-180">
            <Icon size="small">arrow</Icon>
          </span>
          {t("works.infinider.back")}
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center py-[5px] px-3 text-[12.5px] font-medium text-accent bg-[var(--accent-soft)] border border-border rounded-full">
            {t("works.type")}
          </span>
          <span className="text-[13px] text-text-dim">{infinider.year}</span>
        </div>

        <h1 className="font-display text-[clamp(2.6rem,8vw,4.6rem)] leading-[0.98] font-bold tracking-[-0.03em] text-text">
          {infinider.name}
        </h1>
        <p className="max-w-[60ch] text-[clamp(1.1rem,2.4vw,1.35rem)] leading-[1.55] text-text-muted">
          {t(infinider.taglineKey)}
        </p>
      </Reveal>

      {/* Sobre + papel + stack */}
      <Reveal className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="flex flex-col gap-5">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-text">
            {t("works.infinider.aboutTitle")}
          </h2>
          <p className="text-[16px] leading-[1.7] text-text-muted">
            {t("works.infinider.summary")}
          </p>
        </div>

        <aside className="flex flex-col gap-6 h-fit p-6 bg-surface border border-border rounded-[var(--radius)]">
          <div className="flex flex-col gap-1.5">
            <span className="text-[12.5px] font-medium text-text-dim">
              {t("works.infinider.roleLabel")}
            </span>
            <span className="text-[15px] text-text">
              {t("works.infinider.role")}
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="text-[12.5px] font-medium text-text-dim">
              {t("works.infinider.stackLabel")}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {infinider.stack.map((tech) => (
                <span
                  key={tech}
                  className="py-[3px] px-[9px] text-[11.5px] font-medium text-text-muted bg-surface-2 border border-border rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </Reveal>

      {/* Arquitetura do sistema */}
      <Reveal className="flex flex-col gap-6">
        <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-text">
          {t("works.infinider.components.title")}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {infinider.components.map((component) => (
            <div
              key={component.id}
              className={`flex flex-col gap-4 p-6 bg-surface border border-border rounded-[var(--radius)] ${
                component.id === "designSystem" ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-text">
                  {t(component.nameKey)}
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-text-muted">
                  {t(component.descKey)}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {component.stack.map((tech) => (
                  <span
                    key={tech}
                    className="py-[3px] px-[9px] text-[11.5px] font-medium text-text-muted bg-surface-2 border border-border rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {component.link && component.linkLabelKey && (
                <a
                  className={`${linkButtonBase} self-start text-text bg-transparent border border-border-strong hover:-translate-y-0.5 hover:border-accent hover:text-accent`}
                  href={component.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(component.linkLabelKey)}
                  <Icon size="small">arrowUpRight</Icon>
                </a>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </article>
  );
};

export default Infinider;
