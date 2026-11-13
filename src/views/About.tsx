import { getDict, SITE, type Lang } from "@/lib/i18n";
import { PageHero, SectionHead } from "@/components/ui";
import { CtaBlock } from "@/components/cards";
import Icon from "@/components/Icon";

export default function About({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const a = d.about;
  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} sub={a.p[0]} />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-fg-2">
          {a.p.slice(1).map((p, i) => <p key={i} className="reveal">{p}</p>)}
          <div className="reveal flex gap-3 pt-2">
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent"><Icon name="linkedin" className="size-4" />LinkedIn</a>
            <a href={SITE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent"><Icon name="github" className="size-4" />GitHub</a>
          </div>
        </div>
        <aside className="reveal">
          <div className="overflow-hidden rounded-2xl border border-line bg-code text-code-fg" dir="ltr">
            <div className="border-b border-white/10 px-4 py-3 font-mono text-[11px] text-zinc-500">sharon.json</div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
{"{\n"}
{a.facts.map(([k, v], i) => (
  <span key={k}>{"  "}<span className="text-[#5cd0ff]">&quot;{k}&quot;</span>: <span className="text-[#c6f135]">&quot;{v}&quot;</span>{i < a.facts.length - 1 ? "," : ""}{"\n"}</span>
))}
{"}"}
            </pre>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-28">
        <SectionHead eyebrow="// values" title={a.valuesTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <div key={v.t} className="reveal spot hairline rounded-2xl p-6" style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
              <Icon name="spark" className="size-5 text-accent" />
              <h3 className="mt-4 font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28">
        <SectionHead eyebrow={d.work.eyebrow} title={d.work.title} sub={d.work.sub} />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {d.work.items.map((w) => (
            <div key={w.org} className="reveal grid gap-2 bg-surface p-6 sm:grid-cols-[120px_220px_1fr] sm:gap-6">
              <span className="font-mono text-xs text-muted">{w.when}</span>
              <span className="font-semibold">{w.role} <span className="text-accent">· {w.org}</span></span>
              <span className="text-sm leading-relaxed text-muted">{w.d}</span>
            </div>
          ))}
        </div>
      </section>
      <CtaBlock lang={lang} d={d} />
    </>
  );
}
