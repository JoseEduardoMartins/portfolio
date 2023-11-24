import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ href, size, color, children, ...rest }) =>
  !!href ? (
    <a
      href={href}
      className={`
                ${style.button}
                ${style["size_" + size]}
                ${style["color_" + color]}
            `}
    >
      {children}
    </a>
  ) : (
    <button
      {...rest}
      className={`
            ${style.button}
            ${style["size_" + size]}
            ${style["color_" + color]}
        `}
    >
      {children}
    </button>
  );

Button.defaultProps = {
  size: "medium",
  color: "primary",
};

Button.propTypes = {
  href: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
};

export default Button;
