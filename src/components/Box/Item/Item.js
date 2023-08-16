import PropTypes from "prop-types";
import style from "./Item.module.css";

const Item = ({ children }) => (
    <div className={style.item}>
        {children}
    </div>
);

Item.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Item;