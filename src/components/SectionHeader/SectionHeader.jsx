import Reveal from "../Reveal";
import style from "./SectionHeader.module.css";

const SectionHeader = ({ index, eyebrow, title }) => (
    <Reveal className={style.header}>
        <div className={style.top}>
            {index && <span className={style.index}>{index}</span>}
            <span className={style.eyebrow}>{eyebrow}</span>
        </div>
        <h2 className={style.title}>{title}</h2>
    </Reveal>
);

export default SectionHeader;
