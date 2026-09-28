import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => (
  <header className="fixed top-0 left-0 w-full h-[70px] flex justify-between items-center px-[clamp(20px,5vw,48px)] bg-[rgba(10,15,30,0.72)] backdrop-blur-[14px] border-b border-border z-50">
    <Link
      className="flex items-center gap-3"
      to="/"
      aria-label="José Eduardo Martins"
    >
      <span className="inline-flex items-center justify-center w-10 h-10 font-display text-[15px] font-bold text-bg bg-[image:var(--gradient)] rounded-[11px] tracking-[-0.02em]">
        JEM
      </span>
      <span className="font-display font-semibold text-base text-text max-[600px]:hidden">
        José Eduardo Martins
      </span>
    </Link>
    <Menu />
  </header>
);

export default Header;
