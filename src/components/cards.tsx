import Link from "next/link";
import type { Repo } from "@/content/repos";
import type { Article } from "@/content/articles";
import { href, SITE, waLink, type Dict, type Lang } from "@/lib/i18n";
import Icon from "./Icon";
import { Chip, Btn } from "./ui";

const langColor: Record<string, string> = { TypeScript: "#3178c6", "C#": "#9b4f96", JavaScript: "#f1e05a", MDX: "#fcb32c" };

export function RepoCard({ repo, lang, t, i = 0 }: { repo: Repo; lang: Lang; t: Dict["repos"]; i?: number }) {
  return (
    <article style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
      className="reveal spot hairline group flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-3">
        <div dir="ltr" className="flex items-center gap-2 font-mono text-sm">
          <Icon name="github" className="size-4 text-muted" />
          <span className="text-muted">SharonBH/</span><span className="font-semibold">{repo.name}</span>
        </div>
        {repo.ai && <span className="rounded-full bg-accent-fill px-2 py-0.5 font-mono text-[10px] font-bold text-on-accent">AI</span>}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-fg-2">{repo[lang]}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">{repo.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
        <span dir="ltr" className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="size-2.5 rounded-full" style={{ background: langColor[repo.lang] ?? "var(--muted)" }} />{repo.lang}
        </span>
        <span className="flex gap-4">
          {repo.demo && <a href={repo.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-muted transition hover:text-accent">{t.demo}<Icon name="external" className="size-3.5" /></a>}
          {repo.url && !repo.private && <a href={repo.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-muted transition hover:text-accent">{t.view}<Icon name="external" className="size-3.5" /></a>}
        </span>
      </div>
    </article>
  );
}

export function articleHref(a: Article, lang: Lang) {
  if (lang === "en" && a.en) return href("en", `/writing/${a.slug}`);
  return a.hePath;
}

export function ArticleRow({ a, lang, d, i = 0 }: { a: Article; lang: Lang; d: Dict; i?: number }) {
  const body = (lang === "en" ? a.en : a.he) ?? a.he!;
  const heOnly = lang === "en" && !a.en;
  const date = new Date(a.date).toLocaleDateString(lang === "he" ? "he-IL" : "en-GB", { month: "short", year: "numeric", timeZone: "UTC" });
  return (
    <Link href={articleHref(a, lang)} style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
      className="reveal group grid gap-2 border-b border-line py-6 transition sm:grid-cols-[140px_1fr_auto] sm:items-baseline sm:gap-8">
      <div className="flex items-center gap-2 font-mono text-xs text-muted">
        <span>{date}</span><span className="text-accent">·</span><span>{a.tag}</span>
      </div>
      <div dir={heOnly ? "rtl" : undefined}>
        <h3 className="text-lg font-medium transition group-hover:text-accent sm:text-xl">{body.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-[15px] text-muted">{body.excerpt}</p>
      </div>
      <div className="flex items-center gap-3 font-mono text-xs text-muted">
        {heOnly && <Chip>{d.writingTeaser.heOnly}</Chip>}
        <span>{a.minutes} {d.writing.min}</span>
        <Icon name="arrow" className="size-4 transition group-hover:translate-x-1 group-hover:text-accent rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
      </div>
    </Link>
  );
}

export function CtaBlock({ lang, d }: { lang: Lang; d: Dict }) {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="reveal relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-16">
        <div className="bg-dots absolute inset-0 -z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
        <div className="orb -bottom-40 start-1/2 size-[380px] -translate-x-1/2 bg-accent-fill/30" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">{d.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{d.cta.sub}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Btn href={href(lang, "/discuss-project")}>{d.cta.button}</Btn>
            <a href={waLink(lang)} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 px-5 py-3 text-sm font-semibold transition hover:bg-[#25D366]/10 hover:text-[#25D366]">
              <Icon name="whatsapp" className="size-4" />{d.contact.whatsapp}
            </a>
            <a href={`mailto:${SITE.email}`} className="px-4 py-3 text-sm text-muted underline-offset-4 hover:text-fg hover:underline">{d.cta.alt}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GuideCard({ a, lang, d, i = 0 }: { a: Article; lang: Lang; d: Dict; i?: number }) {
  const body = (lang === "en" ? a.en : a.he) ?? a.he!;
  const heOnly = lang === "en" && !a.en;
  return (
    <Link href={articleHref(a, lang)} style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
      className="reveal spot hairline group flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] text-fg-2">
          <Icon name="guide" className="size-3.5 text-accent" />{d.writing.kindGuide}
        </span>
        <span className="font-mono text-[11px] text-muted">{a.minutes} {d.writing.min}</span>
      </div>
      <div dir={heOnly ? "rtl" : undefined} className="mt-5 flex-1">
        <h3 className="text-lg font-semibold leading-snug transition group-hover:text-accent">{body.title}</h3>
        <p className="mt-2 line-clamp-3 text-[15px] text-muted">{body.excerpt}</p>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-muted">
        <span className="flex items-center gap-2">{a.tag}{heOnly && <Chip>{d.writingTeaser.heOnly}</Chip>}</span>
        <Icon name="arrow" className="size-4 transition group-hover:translate-x-1 group-hover:text-accent rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
      </div>
    </Link>
  );
}
