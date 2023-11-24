import PropTypes from "prop-types";
import style from "./Box.module.css";

const Box = ({ order, justify, color, size, onClick, children }) => (
  <div
    onClick={onClick}
    className={`
      ${style.box}
      ${style["order_" + order]}
      ${style["justify_" + justify]}
      ${style["color_" + color]}
      ${style["size_" + size]}
    `}
  >
    {children}
  </div>
);

Box.defaultProps = {
  order: "row",
  justify: "flex-start",
  color: "primary",
  size: "medium",
};

Box.propTypes = {
  order: PropTypes.oneOf(["row", "column"]),
  justify: PropTypes.oneOf(["flex-start", "space-between", "space-around"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "quintenary",
    "sextenary",
    "seventenary",
  ]),
  size: PropTypes.oneOf(["very-small", "small", "medium", "large"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Box;
