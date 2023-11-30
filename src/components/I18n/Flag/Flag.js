import React from "react";
import style from "./Flag.module.css";

const Flag = ({ image, isSelected, ...props }) => (
    <img
        alt="flag"
        src={image}
        className={`
            ${style.flag}
            ${isSelected ? style.selected : ""}
        `}
        {...props}
    />
);

export default Flag;
