import Icon from "../Icon";
import config from "../../config/config";
import style from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={style.container}>
            <a
                href={`${config.github.url}${config.github.name}`}
                target="__blank"
            >
                <Icon color="primary" size="small" type="link">
                    github
                </Icon>
            </a>
            <a
                href={`${config.linkedin.url}${config.linkedin.name}`}
                target="__blank"
            >
                <Icon color="primary" size="small" type="link">
                    linkedin
                </Icon>
            </a>
            <a
                href={`${config.instagram.url}${config.instagram.name}`}
                target="__blank"
            >
                <Icon color="primary" size="small" type="link">
                    instagram
                </Icon>
            </a>
            <a
                href={`${config.whatsapp.url}${config.whatsapp.phone}`}
                target="__blank"
            >
                <Icon color="primary" size="small" type="link">
                    whatsapp
                </Icon>
            </a>
        </div>
    );
};

export default Sidebar;
