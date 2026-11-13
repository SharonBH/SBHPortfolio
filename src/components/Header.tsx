"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { altHref, getDict, href, type Lang } from "@/lib/i18n";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icon";
import { articles } from "@/content/articles";

const heOnly = new Set(articles.filter((a) => !a.en).map((a) => a.hePath));

export function Logo({ lang }: { lang: Lang }) {
  return (
    <Link href={href(lang, "/")} dir="ltr" className="group flex items-center gap-2 font-mono text-[15px] font-semibold tracking-tight">
      <span className="grid size-7 place-items-center rounded-md bg-accent-fill text-on-accent text-xs font-bold">S</span>
      <span>
        sbh<span className="text-accent">#</span>dev
        <span className="ms-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-accent animate-blink" />
      </span>
    </Link>
  );
}

export default function Header({ lang }: { lang: Lang }) {
  const t = getDict(lang).nav;
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { k: "services", p: "/services", l: t.services },
    { k: "ai", p: "/ai", l: t.ai },
    { k: "code", p: "/code", l: t.code },
    { k: "writing", p: "/writing", l: t.writing },
    { k: "about", p: "/about", l: t.about },
  ];
  const active = (p: string) => pathname === href(lang, p) || pathname.startsWith(href(lang, p) + "/");

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Logo lang={lang} />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((x) => (
            <Link key={x.k} href={href(lang, x.p)}
              className={`relative rounded-full px-3.5 py-1.5 text-sm transition ${active(x.p) ? "text-fg" : "text-muted hover:text-fg"}`}>
              {active(x.p) && <span className="absolute inset-0 -z-10 rounded-full bg-surface-2 ring-1 ring-line" />}
              {x.l}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={heOnly.has(pathname) ? "/en/writing" : altHref(lang, pathname)} hrefLang={lang === "he" ? "en" : "he"}
            className="grid h-9 min-w-9 place-items-center rounded-full border border-line px-2 font-mono text-xs text-fg-2 transition hover:border-line-strong hover:text-fg">
            {t.switchLang}
          </Link>
          <ThemeToggle label={t.theme} />
          <Link href={href(lang, "/discuss-project")}
            className="hidden items-center gap-1.5 rounded-full bg-accent-fill px-4 py-2 text-sm font-semibold text-on-accent transition hover:brightness-95 sm:inline-flex">
            {t.cta}
          </Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="menu" aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-line md:hidden">
            <Icon name={open ? "close" : "menu"} className="size-[18px]" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          {links.map((x) => (
            <Link key={x.k} href={href(lang, x.p)} className={`flex items-center justify-between border-b border-line py-3.5 text-lg ${active(x.p) ? "text-accent" : ""}`}>
              {x.l}
              <Icon name="arrow" className="size-4 text-muted rtl:-scale-x-100" />
            </Link>
          ))}
          <Link href={href(lang, "/discuss-project")} className="mt-5 flex justify-center rounded-full bg-accent-fill py-3 font-semibold text-on-accent">
            {t.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}
