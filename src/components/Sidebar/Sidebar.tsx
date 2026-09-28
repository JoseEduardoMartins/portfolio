import Icon from "../Icon";
import socials from "../../data/socials";

const Sidebar = () => (
  <div className="fixed bottom-0 left-7 flex flex-col items-center gap-[22px] z-40 max-[1180px]:hidden">
    <div className="flex flex-col gap-3.5">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="inline-flex items-center justify-center w-10 h-10 rounded-[11px] text-text-muted bg-surface border border-border transition-[transform,color,border-color] duration-200 ease-[var(--ease)] hover:-translate-y-[3px] hover:text-accent hover:border-accent"
        >
          <Icon size="small">{social.icon}</Icon>
        </a>
      ))}
    </div>
    <span className="w-px h-[90px] bg-[linear-gradient(to_bottom,var(--color-border-strong),transparent)]" />
  </div>
);

export default Sidebar;
