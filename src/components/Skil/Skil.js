import PropTypes from "prop-types";
import style from "./Skil.module.css";

const Skil = ({ theme, children }) => (
    <div
        className={`
            ${style.skil}
            ${style["theme_" + theme]}
        `}
    >
        {children}
    </div>
);

Skil.propTypes = {
    theme: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
    children: PropTypes.node.isRequired,
};

export default Skil;
