"use client";
import Icon from "./Icon";

export const themeScript = `(()=>{try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`;

export default function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <button onClick={toggle} aria-label={label} title={label}
      className="relative grid size-9 place-items-center rounded-full border border-line text-fg-2 transition hover:border-line-strong hover:text-fg">
      <Icon name="sun" className="size-[18px] hidden dark:block" />
      <Icon name="moon" className="size-[18px] block dark:hidden" />
    </button>
  );
}
