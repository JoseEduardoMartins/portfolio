import useReveal from "../../hooks/useReveal";

/**
 * Wraps children in a scroll-reveal container.
 * `delay` (ms) staggers the entrance animation.
 */
const Reveal = ({ as: Tag = "div", delay = 0, style, children, ...rest }) => {
    const ref = useReveal();

    return (
        <Tag
            ref={ref}
            data-reveal=""
            style={{ transitionDelay: `${delay}ms`, ...style }}
            {...rest}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
