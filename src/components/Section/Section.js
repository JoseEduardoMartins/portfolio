import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ allPage, children }) => (
    <section className={`${style.container} ${allPage && style.allPage}`}>
        <div className={style.container_data}>{children}</div>
    </section>
);

Section.propTypes = {
    children: PropTypes.node.isRequired
};

export default Section;