import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import style from "./Flag.module.css";

const Flag = ({ image, isSelected, ...props }) => {
    const [flagImage, setFlagImage] = useState();
    const [flagIsSelected, setFlagIsSelected] = useState();

    useLayoutEffect(() => {
        setFlagImage(image);
        setFlagIsSelected(isSelected);
    }, [image, isSelected]);

    return (
        <img
            alt="flag"
            src={flagImage}
            className={`
                ${style.flag}
                ${flagIsSelected ? style.selected : ""}
            `}
            {...props}
        />
    );
};

Flag.propTypes = {
    image: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default Flag;
