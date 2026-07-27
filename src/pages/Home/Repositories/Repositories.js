import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getAll } from "./Repositories.service";
import SectionHeader from "../../../components/SectionHeader";
import Reveal from "../../../components/Reveal";
import Icon from "../../../components/Icon";
import config from "../../../config";
import Repository from "./Repository";
import style from "./Repositories.module.css";

const INITIAL_LIMIT = 6;

const Repositories = () => {
    const { t } = useTranslation();
    const [repositories, setRepositories] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const load = async () => {
            try {
                const response = await getAll();
                const cleaned = response
                    .filter(
                        (repo) =>
                            !repo.fork &&
                            repo.name.toLowerCase() !==
                                config.github.name.toLowerCase()
                    )
                    .sort(
                        (a, b) =>
                            b.stargazers_count - a.stargazers_count ||
                            new Date(b.pushed_at) - new Date(a.pushed_at)
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
        <section id="repositories" className={style.section}>
            <SectionHeader
                index="05"
                eyebrow={t("home.repositorie.title")}
                title={t("home.repositorie.heading")}
            />

            <div className={style.grid}>
                {visible.map((repository, index) => (
                    <Repository
                        key={repository.id}
                        repository={repository}
                        delay={(index % INITIAL_LIMIT) * 60}
                    />
                ))}
            </div>

            {hasMore && (
                <Reveal className={style.actions}>
                    <button
                        className={style.toggle}
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                    >
                        {expanded
                            ? t("home.repositorie.showLess")
                            : t("home.repositorie.showMore")}
                        <Icon size="small">
                            {expanded ? "minus" : "plus"}
                        </Icon>
                    </button>
                    <a
                        className={style.ghLink}
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
