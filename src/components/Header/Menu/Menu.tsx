import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TranslateOptions from "../../I18n/TranslateOptions";
import Icon from "../../Icon";

const navItems = [
  { to: "/", key: "nav.home", end: true },
  { to: "/about", key: "nav.about", end: false },
  { to: "/work", key: "nav.work", end: false },
  { to: "/contact", key: "nav.contact", end: false },
];

const linkBase =
  "relative text-[14.5px] font-medium transition-colors duration-200 ease-[var(--ease)] hover:text-text " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:rounded-[2px] " +
  "after:bg-accent after:transition-[width] after:duration-[250ms] after:ease-[var(--ease)]";

const Menu = () => {
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };
    if (isActive) window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isActive]);

  const renderLinks = (onClick?: () => void) =>
    navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        end={item.end}
        onClick={onClick}
        className={({ isActive: active }) =>
          `${linkBase} ${
            active
              ? "text-accent after:w-full"
              : "text-text-muted after:w-0"
          }`
        }
      >
        {t(item.key)}
      </NavLink>
    ));

  return (
    <>
      <nav className="flex items-center gap-7 max-[860px]:hidden">
        {renderLinks()}
        <TranslateOptions />
      </nav>

      <div className="hidden relative max-[860px]:flex" ref={dropdownRef}>
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className="inline-flex items-center justify-center w-[42px] h-[42px] text-text bg-surface border border-border rounded-[11px] cursor-pointer"
          aria-label="menu"
          type="button"
        >
          <Icon size="small">{isActive ? "close" : "menu"}</Icon>
        </button>
        {isActive && (
          <nav className="absolute top-[54px] right-0 min-w-[200px] flex flex-col gap-[18px] py-[22px] px-6 bg-[rgba(13,20,38,0.96)] backdrop-blur-[14px] border border-border rounded-[var(--radius)] shadow-[var(--shadow)]">
            {renderLinks(() => setIsActive(false))}
            <div className="pt-1.5 border-t border-border">
              <TranslateOptions />
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Menu;
