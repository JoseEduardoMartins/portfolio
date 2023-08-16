import { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import icons from "./icons";
import style from "./Icon.module.css";

const Icon = ({ size, color, children }) => {
    const [Component, setComponent] = useState(<></>);

    useLayoutEffect(() => {
        if (typeof children !== "string") return;

        const NewComponent = icons[children];
        if (!NewComponent) return;

        setComponent(
            <NewComponent
                className={`
                    ${style["size_"+size]}
                    ${color && style["color_"+color]}
                `}
            />
        );
        
    }, [children, size, color]);

    return (Component);
}

Icon.defaultProps = {
    size: "medium"
};

Icon.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.oneOf(["primary", "secondary"]),
    children: PropTypes.node.isRequired
};

export default Icon;