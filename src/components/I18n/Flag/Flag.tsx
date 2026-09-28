import { ImgHTMLAttributes } from "react";

interface FlagProps extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
  isSelected: boolean;
}

const Flag = ({ image, isSelected, ...props }: FlagProps) => (
  <img
    alt="flag"
    src={image}
    className={`w-[30px] h-[30px] cursor-pointer transition-[filter] ${
      isSelected ? "grayscale-0" : "grayscale hover:grayscale-0"
    }`}
    {...props}
  />
);

export default Flag;
