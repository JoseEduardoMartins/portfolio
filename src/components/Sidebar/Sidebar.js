import Icon from "../Icon";
import socials from "../../data/socials";
import style from "./Sidebar.module.css";

const Sidebar = () => (
    <div className={style.container}>
        <div className={style.links}>
            {socials.map((social) => (
                <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={style.link}
                >
                    <Icon size="small">{social.icon}</Icon>
                </a>
            ))}
        </div>
        <span className={style.line} />
    </div>
);

export default Sidebar;
