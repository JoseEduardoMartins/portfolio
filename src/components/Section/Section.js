import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ id, children }) => (
    <section {...{ id }} className={style.container}>
        <div className={style.container_data}>{children}</div>
    </section>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Section;
