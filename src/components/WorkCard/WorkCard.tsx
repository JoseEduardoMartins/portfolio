import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Work } from "../../data/works";

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  const { t } = useTranslation();

  return (
    <Reveal>
      <Link
        to={work.route}
        className="group grid overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface transition-[border-color,box-shadow,transform] duration-[250ms] ease-[var(--ease)] hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow)] md:grid-cols-[1.1fr_1fr]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border md:border-b-0 md:border-r">
          <img
            src={work.cover}
            alt={work.name}
            loading="lazy"
            className="h-full w-full object-cover object-left-top transition-transform duration-500 ease-[var(--ease)] group-hover:scale-[1.04]"
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(10,15,30,0.55))]" />
        </div>

        <div className="flex flex-col gap-5 p-7 sm:p-9">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center py-[5px] px-3 text-[12.5px] font-medium text-accent bg-[var(--accent-soft)] border border-border rounded-full">
              {t("works.type")}
            </span>
            <span className="text-[13px] text-text-dim">{work.year}</span>
          </div>

          <h3 className="font-display text-[clamp(1.7rem,3.5vw,2.3rem)] font-bold tracking-[-0.02em] text-text">
            {work.name}
          </h3>

          <p className="text-[15.5px] leading-[1.6] text-text-muted">
            {t(work.taglineKey)}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {work.stack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="py-[3px] px-[9px] text-[11.5px] font-medium text-text-muted bg-surface-2 border border-border rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-auto inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent">
            {t("works.viewCase")}
            <span className="transition-transform duration-200 ease-[var(--ease)] group-hover:translate-x-1 [&_svg]:w-4 [&_svg]:h-4">
              <Icon size="small">arrow</Icon>
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
};

export default WorkCard;
