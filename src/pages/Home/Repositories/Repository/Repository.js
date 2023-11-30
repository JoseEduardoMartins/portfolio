import Translator from "../../../../components/I18n/Translator";
import Box from "../../../../components/Box";
import Icon from "../../../../components/Icon";
import style from "./Repository.module.css";

const Repository = ({ repository }) => {
    return (
        <Box order="column" color="quintenary">
            <header className={style.repository_header}>
                <div className={style.repository_header_title}>
                    <Icon size="small">repository</Icon>
                    {repository.name}
                </div>
                <a href={repository.html_url} target="__blank">
                    <Icon color="primary" size="small" type="link">
                        link
                    </Icon>
                </a>
            </header>
            <div className={style.repository_body}>
                {repository.description}
            </div>
            <footer className={style.repository_footer}>
                <div>
                    Language: <strong>{repository.language}</strong>
                </div>
                <div className={style.repository_footer_counts}>
                    <div className={style.repository_footer_count}>
                        <Icon size="small">star</Icon>
                        {repository.stargazers_count}
                        <div className={style.repository_footer_count_label}>
                            <Translator path="home.repositorie.stars" />
                        </div>
                    </div>
                    <div className={style.repository_footer_count}>
                        <Icon size="small">eye</Icon>
                        {repository.watchers_count}
                        <div className={style.repository_footer_count_label}>
                            <Translator path="home.repositorie.watching" />
                        </div>
                    </div>
                    <div className={style.repository_footer_count}>
                        <Icon size="small">fork</Icon>
                        {repository.forks_count}
                        <div className={style.repository_footer_count_label}>
                            <Translator path="home.repositorie.forks" />
                        </div>
                    </div>
                </div>
            </footer>
        </Box>
    );
};

export default Repository;
