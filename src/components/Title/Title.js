import PropTypes from "prop-types";
import style from "./Title.module.css";

const Title = ({ color, children }) => (<h1 className={`${style.title} ${style[color]}`}>{children}</h1>);

Title.defaultProps = {
    color: "primary",
};

Title.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    children: PropTypes.node.isRequired
};

export default Title;