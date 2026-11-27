import Reveal from "../Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

const SectionHeader = ({ eyebrow, title }: SectionHeaderProps) => (
  <Reveal className="flex flex-col gap-3 mb-2">
    <span className="inline-flex items-center gap-2 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-accent-3">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {eyebrow}
    </span>
    <h2 className="font-display text-[clamp(1.7rem,4vw,2.4rem)] font-bold tracking-[-0.02em] text-text">
      {title}
    </h2>
  </Reveal>
);

export default SectionHeader;
