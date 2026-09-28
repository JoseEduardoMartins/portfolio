import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => (
  <header className="fixed top-0 left-0 w-full h-[70px] flex justify-between items-center px-[clamp(20px,5vw,48px)] bg-[rgba(10,15,30,0.72)] backdrop-blur-[14px] border-b border-border z-50">
    <Link className="flex items-center" to="/" aria-label="Eduardo Martins">
      <img src="/logo.svg" alt="" width="40" height="40" className="w-10 h-10" />
    </Link>
    <Menu />
  </header>
);

export default Header;
