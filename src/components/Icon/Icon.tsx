import { ReactElement, ReactNode, useLayoutEffect, useState } from "react";
import icons from "./icons";

type IconSize = "small" | "medium" | "large";
type IconColor = "primary" | "secondary";

interface IconProps {
  type?: "link";
  size?: IconSize;
  color?: IconColor;
  children: ReactNode;
}

const sizeClass: Record<IconSize, string> = {
  small: "w-5 h-5",
  medium: "w-[30px] h-[30px]",
  large: "w-10 h-10",
};

const colorClass: Record<IconColor, string> = {
  primary: "text-text",
  secondary: "text-bg",
};

const linkHoverClass: Record<IconColor, string> = {
  primary: "hover:text-text-muted",
  secondary: "hover:text-accent",
};

const Icon = ({ type, size = "medium", color, children }: IconProps) => {
  const [Component, setComponent] = useState<ReactElement>(<></>);

  useLayoutEffect(() => {
    if (typeof children !== "string") return;

    const NewComponent = icons[children];
    if (!NewComponent) return;

    const className = [
      sizeClass[size],
      type && color ? linkHoverClass[color] : "",
      color ? colorClass[color] : "",
    ]
      .filter(Boolean)
      .join(" ");

    setComponent(<NewComponent className={className} />);
  }, [children, type, size, color]);

  return Component;
};

export default Icon;
