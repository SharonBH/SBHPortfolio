import { getDict, href, type Lang } from "@/lib/i18n";
import { Btn, PageHero, SectionHead } from "@/components/ui";
import { CtaBlock } from "@/components/cards";
import Icon from "@/components/Icon";
import { ldScript, servicesGraph } from "@/lib/schema";

export default function Services({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const s = d.services;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldScript(servicesGraph(lang))} />
      <PageHero eyebrow={s.eyebrow} title={s.title} sub={s.sub} />
      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-5 md:grid-cols-2">
          {s.offers.map((o, i) => (
            <article key={o.name} style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
              className={`reveal spot relative flex flex-col rounded-2xl p-7 ${o.featured ? "border border-accent/50 bg-surface shadow-[0_0_60px_-20px_var(--glow)]" : "hairline"}`}>
              {o.featured && <span className="absolute -top-3 end-6 rounded-full bg-accent-fill px-3 py-1 font-mono text-[10px] font-bold uppercase text-on-accent">most requested</span>}
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-semibold">{o.name}</h3>
                <span className="shrink-0 font-mono text-xs text-muted">{o.dur}</span>
              </div>
              <p className="mt-3 text-muted">{o.for}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {o.gets.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-fg-2">
                    <Icon name="check" className="mt-0.5 size-5 shrink-0 text-accent" />{g}
                  </li>
                ))}
              </ul>
              <div className="mt-7"><Btn href={href(lang, "/discuss-project")} variant={o.featured ? "primary" : "ghost"}>{d.nav.cta}</Btn></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-28">
        <SectionHead eyebrow="// +" title={s.alsoTitle} />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {s.also.map((a, i) => (
            <div key={a.t} className="reveal bg-surface p-6" style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-semibold">{a.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-28">
        <SectionHead eyebrow="// faq" title={s.faqTitle} />
        <div className="divide-y divide-line border-y border-line">
          {s.faq.map((f) => (
            <details key={f.q} className="reveal group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                {f.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line font-mono text-sm text-muted transition group-open:rotate-45 group-open:text-accent">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBlock lang={lang} d={d} />
    </>
  );
}
