import Link from "next/link";
import { getDict, href, SITE, waLink, type Lang } from "@/lib/i18n";
import { sortedArticles } from "@/content/articles";
import { Logo } from "./Header";
import Icon from "./Icon";

export default function Footer({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const legacy = sortedArticles.filter((a) => a.kind === "guide" && a.he).slice(0, 5);
  return (
    <footer className="relative mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo lang={lang} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{d.footer.tag}</p>
          <div className="mt-5 flex gap-2">
            {[["whatsapp", waLink(lang)], ["linkedin", SITE.linkedin], ["github", SITE.github], ["mail", `mailto:${SITE.email}`]].map(([i, u]) => (
              <a key={i} href={u} target="_blank" rel="noreferrer" aria-label={i}
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent">
                <Icon name={i} className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-muted">{d.footer.nav}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {([["/services", d.nav.services], ["/ai", d.nav.ai], ["/code", d.nav.code], ["/writing", d.nav.writing], ["/about", d.nav.about], ["/discuss-project", d.nav.cta]] as const).map(([p, l]) => (
              <li key={p}><Link className="text-fg-2 transition hover:text-accent" href={href(lang, p)}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-muted">{d.footer.guides}</h4>
          <ul className="mt-4 space-y-2.5 text-sm" dir="rtl">
            {legacy.map((a) => (
              <li key={a.slug}><Link className="text-fg-2 transition hover:text-accent" href={a.hePath}>{a.he!.title.split(":")[0].split("?")[0]}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-muted">{d.footer.contact}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-fg-2">
            <li><a className="inline-flex items-center gap-2 transition hover:text-accent" href={waLink(lang)} target="_blank" rel="noreferrer"><Icon name="whatsapp" className="size-4" />{d.contact.whatsapp} · <span dir="ltr">{SITE.phone}</span></a></li>
            <li><a className="transition hover:text-accent" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>{d.footer.office}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-5 font-mono text-[11px] text-muted">
          <span>© {new Date().getFullYear()} SBH#DEV · Sharon Ben Haim. {d.footer.rights}</span>
          <span dir="ltr">{"<"}/{">"} {d.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
