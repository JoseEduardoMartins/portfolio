import Translator from "../../../../components/I18n/Translator";
import Icon from "../../../../components/Icon";
import Reveal from "../../../../components/Reveal";
import style from "./Repository.module.css";

const LANGUAGE_COLORS = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Dockerfile: "#384d54",
    Shell: "#89e051",
    Python: "#3572A5",
    Java: "#b07219",
};

const prettifyName = (name) =>
    name
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

const Repository = ({ repository, delay }) => (
    <Reveal className={style.card} delay={delay}>
        <div className={style.top}>
            <span className={style.folder}>
                <Icon size="small">repository</Icon>
            </span>
            <a
                className={style.external}
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                aria-label={repository.name}
            >
                <Icon size="small">arrowUpRight</Icon>
            </a>
        </div>

        <a
            className={style.name}
            href={repository.html_url}
            target="_blank"
            rel="noreferrer"
        >
            {prettifyName(repository.name)}
        </a>

        <p className={style.description}>
            {repository.description || (
                <Translator path="home.repositorie.noDescription" />
            )}
        </p>

        {repository.topics?.length > 0 && (
            <div className={style.topics}>
                {repository.topics.slice(0, 4).map((topic) => (
                    <span key={topic} className={style.topic}>
                        {topic}
                    </span>
                ))}
            </div>
        )}

        <footer className={style.footer}>
            {repository.language && (
                <span className={style.meta}>
                    <span
                        className={style.dot}
                        style={{
                            background:
                                LANGUAGE_COLORS[repository.language] ||
                                "var(--accent)",
                        }}
                    />
                    {repository.language}
                </span>
            )}
            <span className={style.meta}>
                <Icon size="small">star</Icon>
                {repository.stargazers_count}
            </span>
            <span className={style.meta}>
                <Icon size="small">fork</Icon>
                {repository.forks_count}
            </span>
        </footer>
    </Reveal>
);

export default Repository;
