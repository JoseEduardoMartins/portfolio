import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getAll, Repository as RepositoryData } from "./Repositories.service";
import SectionHeader from "../../components/SectionHeader";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import config from "../../config";
import Repository from "./Repository";

const INITIAL_LIMIT = 6;

const actionBase =
  "inline-flex items-center gap-2.5 py-3 px-[22px] rounded-xl text-sm font-semibold cursor-pointer transition-[transform,border-color,color] duration-200 ease-[var(--ease)]";

const Repositories = () => {
  const { t } = useTranslation();
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await getAll();
        const cleaned = response
          .filter(
            (repo) =>
              !repo.fork &&
              repo.name.toLowerCase() !== config.github.name.toLowerCase()
          )
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          );
        setRepositories(cleaned);
      } catch (error) {
        console.error(error);
      }
    };
    load();
  }, []);

  const visible = expanded
    ? repositories
    : repositories.slice(0, INITIAL_LIMIT);
  const hasMore = repositories.length > INITIAL_LIMIT;

  return (
    <section
      id="repositories"
      className="w-full max-w-[980px] mx-auto py-24 px-6 scroll-mt-20 flex flex-col gap-9"
    >
      <SectionHeader
        eyebrow={t("home.repositorie.title")}
        title={t("home.repositorie.heading")}
      />

      <div className="grid grid-cols-2 gap-[18px] max-[720px]:grid-cols-1">
        {visible.map((repository, index) => (
          <Repository
            key={repository.id}
            repository={repository}
            delay={(index % INITIAL_LIMIT) * 60}
          />
        ))}
      </div>

      {hasMore && (
        <Reveal className="flex justify-center gap-3.5 flex-wrap mt-2.5">
          <button
            className={`${actionBase} text-text bg-surface border border-border-strong hover:-translate-y-0.5 hover:border-accent hover:text-accent`}
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded
              ? t("home.repositorie.showLess")
              : t("home.repositorie.showMore")}
            <Icon size="small">{expanded ? "minus" : "plus"}</Icon>
          </button>
          <a
            className={`${actionBase} text-bg bg-accent border border-accent hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(45,212,191,0.6)]`}
            href={`${config.github.url}${config.github.name}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon size="small">github</Icon>
            {t("home.repositorie.viewGithub")}
          </a>
        </Reveal>
      )}
    </section>
  );
};

export default Repositories;
