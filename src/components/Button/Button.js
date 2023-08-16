import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ size, color, children, ...rest }) => (
    <button
        {...rest}
        className={`
            ${style.button}
            ${style["size_"+size]}
            ${style["color_"+color]}
        `}
    >
        {children}
    </button>
);

Button.defaultProps = {
    size: "medium",
    color: "primary"
};

Button.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.oneOf(["primary", "secondary"]),
    children: PropTypes.node.isRequired,
};


export default Button;