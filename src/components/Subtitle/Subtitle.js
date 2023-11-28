import PropTypes from "prop-types";
import style from "./Subtitle.module.css";

const Subtitle = ({ color, children }) => (
  <h2
    className={`
            ${style.subtitle}
            ${style["color_" + color]}
        `}
  >
    {children}
  </h2>
);

Subtitle.defaultProps = {
  color: "tertiary",
};

Subtitle.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "five-year",
  ]),
  children: PropTypes.node.isRequired,
};

export default Subtitle;
