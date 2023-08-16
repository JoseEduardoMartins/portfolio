import PropTypes from "prop-types";
import style from "./Text.module.css";

const Text = ({ color, children }) => (
    <p
        className={`
            ${style.text}
            ${style["color_"+color]}
        `}
    >
        {children}
    </p>
);

Text.defaultProps = {
    color: "primary",
};

Text.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    children: PropTypes.node.isRequired
};

export default Text;