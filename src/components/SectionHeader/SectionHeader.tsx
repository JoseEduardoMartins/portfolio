import Reveal from "../Reveal";

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: string;
}

const SectionHeader = ({ index, eyebrow, title }: SectionHeaderProps) => (
  <Reveal className="flex flex-col gap-2 mb-2">
    <div className="flex items-center gap-3">
      {index && (
        <span className="font-display text-sm font-semibold text-accent">
          {index}
        </span>
      )}
      <span className="text-[13px] font-semibold tracking-[0.14em] uppercase text-text-muted">
        {eyebrow}
      </span>
    </div>
    <h2 className="font-display text-[clamp(1.7rem,4vw,2.4rem)] font-bold tracking-[-0.02em] text-text">
      {title}
    </h2>
  </Reveal>
);

export default SectionHeader;
