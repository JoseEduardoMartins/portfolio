import { CSSProperties, ElementType, ReactNode } from "react";
import useReveal from "../../hooks/useReveal";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}

/**
 * Wraps children in a scroll-reveal container.
 * `delay` (ms) staggers the entrance animation.
 */
const Reveal = ({ as: Tag = "div", delay = 0, style, children, ...rest }: RevealProps) => {
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
