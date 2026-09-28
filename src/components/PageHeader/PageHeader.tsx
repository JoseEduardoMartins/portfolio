import Reveal from "../Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
}

const PageHeader = ({ eyebrow, title, intro }: PageHeaderProps) => (
  <Reveal as="header" className="flex flex-col gap-5">
    {eyebrow && (
      <span className="text-sm font-medium tracking-[0.02em] text-text-dim">
        {eyebrow}
      </span>
    )}
    <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-text">
      {title}
    </h1>
    {intro && (
      <p className="max-w-[58ch] text-[clamp(1.05rem,2.2vw,1.25rem)] leading-[1.6] text-text-muted">
        {intro}
      </p>
    )}
    <span className="mt-2 h-px w-full bg-[image:var(--gradient)] opacity-30" />
  </Reveal>
);

export default PageHeader;
