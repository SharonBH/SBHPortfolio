import Link from "next/link";
import type { Article, Block } from "@/content/articles";
import { getDict, href, type Lang } from "@/lib/i18n";
import { Btn, Eyebrow } from "@/components/ui";
import Icon from "@/components/Icon";

function B({ b }: { b: Block }) {
  switch (b.t) {
    case "p": return <p>{b.v}</p>;
    case "h2": return <h2>{b.v}</h2>;
    case "h3": return <h3>{b.v}</h3>;
    case "ul": return <ul>{b.v.map((x) => <li key={x}>{x}</li>)}</ul>;
    case "ol": return <ol className="mb-5 list-decimal space-y-2 ps-5 text-fg-2 marker:font-mono marker:text-accent">{b.v.map((x) => <li key={x} className="ps-1 !before:content-none">{x}</li>)}</ol>;
    case "table": return (
      <div className="overflow-x-auto"><table><thead><tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
        <tbody>{b.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody></table></div>
    );
  }
}

export default function ArticleView({ a, lang }: { a: Article; lang: Lang }) {
  const d = getDict(lang);
  const body = (lang === "en" ? a.en : a.he)!;
  const guide = a.kind === "guide";
  const date = new Date(a.date).toLocaleDateString(lang === "he" ? "he-IL" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: body.title, description: body.excerpt, datePublished: a.date, inLanguage: lang, author: { "@type": "Person", name: "Sharon Ben Haim", url: "https://sbh.co.il/about" } };
  return (
    <article className="relative pt-32">
      <div className="bg-grid absolute inset-x-0 top-0 -z-10 h-96" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-5">
        <Link href={href(lang, guide ? "/writing#guides" : "/writing#articles")} className="font-mono text-xs text-muted hover:text-accent"><span className="inline-block rtl:-scale-x-100">←</span> {guide ? d.writing.backGuides : d.writing.back}</Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold ${guide ? "bg-surface-2 text-fg" : "bg-accent-fill text-on-accent"}`}>
            {guide && <Icon name="guide" className="size-3.5 text-accent" />}{guide ? d.writing.kindGuide : d.writing.kindArticle}
          </span>
          <Eyebrow>{`// ${a.tag.toLowerCase()} · ${a.minutes} ${d.writing.min}`}</Eyebrow>
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{body.title}</h1>
        <p className="mt-5 text-lg text-muted">{body.excerpt}</p>
        <div className="mt-6 flex items-center gap-3 border-b border-line pb-8 text-sm text-muted">
          <span className="grid size-8 place-items-center rounded-full bg-accent-fill font-mono text-xs font-bold text-on-accent">SB</span>
          <span>Sharon Ben Haim</span><span>·</span><time dateTime={a.date}>{date}</time>
        </div>
        <div className="prose-sbh mt-10 text-[17px]">{body.blocks.map((b, i) => <B key={i} b={b} />)}</div>
        <div className="mt-14 rounded-2xl border border-line bg-surface p-8 text-center">
          <h2 className="text-2xl font-semibold">{d.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">{d.cta.sub}</p>
          <div className="mt-6 flex justify-center"><Btn href={href(lang, "/discuss-project")}>{d.cta.button}</Btn></div>
        </div>
      </div>
    </article>
  );
}
