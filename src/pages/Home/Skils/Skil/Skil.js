import PropTypes from "prop-types";
import style from "./Skil.module.css";

const Skil = ({ children }) => (
    <div className={style.skil}>
        {children}
    </div>
);

Skil.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Skil;