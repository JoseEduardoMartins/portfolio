import PropTypes from "prop-types";
import style from "./List.module.css";

const List = ({ gap, flexWrap, direction, justify, children }) => (
  <div
    className={`
      ${style.list}
      ${style["gap_"+gap]}
      ${style["flexWrap_"+flexWrap]}
      ${style["direction_"+direction]}
      ${style["justify_"+justify]}
    `}
  >
    {children}
  </div>
);

List.defaultProps = {
  gap: "10",
  direction: "row",
  justify: "flex-start",
};

List.propTypes = {
  gap: PropTypes.oneOf(["10", "20"]),
  flexWrap: PropTypes.oneOf(["wrap"]),
  direction: PropTypes.oneOf(["row", "column"]),
  justify: PropTypes.oneOf(["flex-start", "space-between", "space-around"]),
  children: PropTypes.node.isRequired,
};

export default List;