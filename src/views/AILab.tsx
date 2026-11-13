import { getDict, type Lang } from "@/lib/i18n";
import { Chip, PageHero, SectionHead } from "@/components/ui";
import { CtaBlock } from "@/components/cards";
import AgentTrace from "@/components/AgentTrace";
import StackGrid from "@/components/StackGrid";
import { toolbox } from "@/content/stack";

export default function AILab({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const a = d.ai;
  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} sub={a.sub} />

      {/* SDLC loop */}
      <section className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="// loop" title={a.sdlcTitle} sub={a.sdlcSub} />
        <div className="reveal relative grid gap-3 sm:grid-cols-5">
          {a.sdlc.map((s, i) => (
            <div key={s.t} className="spot hairline relative rounded-2xl p-5">
              <div dir="ltr" className="flex items-center justify-between font-mono text-xs text-muted">
                <span>step_{i + 1}</span>
                <span className={i === 0 || i === 4 ? "text-accent-2" : "text-accent"}>{i === 0 || i === 4 ? "human" : "agent"}</span>
              </div>
              <div dir="ltr" className="mt-4 font-mono text-xl font-semibold rtl:text-end">{s.t}</div>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
              {i < a.sdlc.length - 1 && <span className="absolute -end-3 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-accent sm:block rtl:-scale-x-100">→</span>}
            </div>
          ))}
        </div>
        <p dir="ltr" className="reveal mt-4 text-center font-mono text-xs text-muted">↻ loop until evals pass · nothing merges without a human</p>
      </section>

      {/* Principles + trace */}
      <section className="mx-auto max-w-6xl px-5 py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="// principles" title={a.principlesTitle} />
            <div className="space-y-6">
              {a.principles.map((p, i) => (
                <div key={p.t} className="reveal flex gap-5" style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold">{p.t}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal lg:sticky lg:top-28 lg:self-start"><AgentTrace /></div>
        </div>
      </section>

      {/* Toolbox */}
      <section className="border-y border-line bg-bg-2 py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow="// toolbox" title={a.toolboxTitle} sub={a.toolboxSub} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolbox.map((t, i) => (
              <div key={t.name} className="reveal spot hairline rounded-2xl p-5" style={{ "--d": `${(i % 4) * 60}ms` } as React.CSSProperties}>
                <Chip>{t.kind}</Chip>
                <h3 dir="ltr" className="mt-4 font-mono text-lg font-semibold rtl:text-end">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-28">
        <SectionHead eyebrow={d.stack.eyebrow} title={d.stack.title} sub={d.stack.sub} />
        <StackGrid lang={lang} allLabel={d.stack.all} />
      </section>
      <CtaBlock lang={lang} d={d} />
    </>
  );
}
