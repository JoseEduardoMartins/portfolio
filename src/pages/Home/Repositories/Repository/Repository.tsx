import Translator from "../../../../components/I18n/Translator";
import Icon from "../../../../components/Icon";
import Reveal from "../../../../components/Reveal";
import { Repository as RepositoryData } from "../Repositories.service";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dockerfile: "#384d54",
  Shell: "#89e051",
  Python: "#3572A5",
  Java: "#b07219",
};

const prettifyName = (name: string) =>
  name.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

interface RepositoryProps {
  repository: RepositoryData;
  delay: number;
}

const Repository = ({ repository, delay }: RepositoryProps) => (
  <Reveal
    className="group flex flex-col gap-3.5 h-full p-6 bg-surface border border-border rounded-[var(--radius)] transition-[border-color,transform,box-shadow] duration-[250ms] ease-[var(--ease)] hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow)]"
    delay={delay}
  >
    <div className="flex items-center justify-between">
      <span className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-xl text-accent bg-[var(--accent-soft)] border border-border">
        <Icon size="small">repository</Icon>
      </span>
      <a
        className="inline-flex text-text-dim transition-[color,transform] duration-200 ease-[var(--ease)] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        href={repository.html_url}
        target="_blank"
        rel="noreferrer"
        aria-label={repository.name}
      >
        <Icon size="small">arrowUpRight</Icon>
      </a>
    </div>

    <a
      className="font-display text-[17px] font-semibold text-text transition-colors duration-200 ease-[var(--ease)] hover:text-accent"
      href={repository.html_url}
      target="_blank"
      rel="noreferrer"
    >
      {prettifyName(repository.name)}
    </a>

    <p className="flex-1 text-sm leading-[1.6] text-text-muted">
      {repository.description || (
        <Translator path="home.repositorie.noDescription" />
      )}
    </p>

    {repository.topics && repository.topics.length > 0 && (
      <div className="flex flex-wrap gap-1.5">
        {repository.topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="py-[3px] px-[9px] text-[11.5px] font-medium text-accent bg-[var(--accent-softer)] rounded-md"
          >
            {topic}
          </span>
        ))}
      </div>
    )}

    <footer className="flex items-center gap-[18px] pt-3.5 border-t border-border">
      {repository.language && (
        <span className="inline-flex items-center gap-[7px] text-[13px] text-text-muted">
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{
              background:
                LANGUAGE_COLORS[repository.language] || "var(--color-accent)",
            }}
          />
          {repository.language}
        </span>
      )}
      <span className="inline-flex items-center gap-[7px] text-[13px] text-text-muted [&_svg]:w-3.5 [&_svg]:h-3.5 [&_svg]:text-text-dim">
        <Icon size="small">star</Icon>
        {repository.stargazers_count}
      </span>
      <span className="inline-flex items-center gap-[7px] text-[13px] text-text-muted [&_svg]:w-3.5 [&_svg]:h-3.5 [&_svg]:text-text-dim">
        <Icon size="small">fork</Icon>
        {repository.forks_count}
      </span>
    </footer>
  </Reveal>
);

export default Repository;
