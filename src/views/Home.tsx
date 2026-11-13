import Link from "next/link";
import { getDict, href, type Lang } from "@/lib/i18n";
import AgentTrace from "@/components/AgentTrace";
import StackGrid from "@/components/StackGrid";
import Icon from "@/components/Icon";
import { Btn, Chip, Eyebrow, SectionHead } from "@/components/ui";
import { ArticleRow, CtaBlock, RepoCard } from "@/components/cards";
import { repos } from "@/content/repos";
import { articlesFor } from "@/content/articles";
import { stack } from "@/content/stack";

export default function Home({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const posts = articlesFor(lang).slice(0, 3);
  const enPosts = lang === "en" ? [...posts, ...articlesFor("he").filter((a) => !a.en)].slice(0, 3) : posts;

  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="orb -top-40 start-[-10%] -z-10 size-[520px] bg-accent-fill/25 animate-float" />
        <div className="orb top-40 end-[-10%] -z-10 size-[420px] bg-accent-2/20 animate-float [animation-delay:-4s]" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
          <div className="min-w-0">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-fg-2 backdrop-blur">
              <span className="size-2 rounded-full bg-accent-fill animate-pulse-dot" />
              {d.hero.status}
            </div>
            <div className="reveal mt-6" style={{ "--d": "60ms" } as React.CSSProperties}><Eyebrow>{d.hero.eyebrow}</Eyebrow></div>
            <h1 className="reveal mt-4 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]" style={{ "--d": "120ms" } as React.CSSProperties}>
              {d.hero.titleA}
              <br />
              <span className="text-shine">{d.hero.titleB}</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ "--d": "180ms" } as React.CSSProperties}>{d.hero.sub}</p>
            <div className="reveal mt-9 flex flex-wrap gap-3" style={{ "--d": "240ms" } as React.CSSProperties}>
              <Btn href={href(lang, "/discuss-project")}>{d.hero.primary}</Btn>
              <Btn href={href(lang, "/ai")} variant="ghost">{d.hero.secondary}</Btn>
            </div>
          </div>
          <div className="reveal relative min-w-0" style={{ "--d": "200ms" } as React.CSSProperties}>
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent-fill/20 via-transparent to-accent-2/20 blur-2xl" />
            <AgentTrace />
          </div>
        </div>

        {/* stats */}
        <div className="mx-auto mt-20 max-w-6xl px-5">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {d.stats.map((s, i) => (
              <div key={s.l} className="reveal bg-surface/80 p-6 backdrop-blur" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <dt className="font-mono text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  <span dir="ltr" className="inline-block">{s.v}</span>
                </dt>
                <dd className="mt-2 text-sm text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───── Marquee ───── */}
      <div className="marquee overflow-hidden border-y border-line bg-surface/50 py-4" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-sm text-muted">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-10">{s.name}<span className="text-accent">✦</span></span>
          ))}
        </div>
      </div>

      {/* ───── Pillars ───── */}
      <section className="mx-auto max-w-6xl px-5 py-28">
        <SectionHead eyebrow={d.pillars.eyebrow} title={d.pillars.title} sub={d.pillars.sub} />
        <div className="grid gap-5 md:grid-cols-2">
          {d.pillars.items.map((p, i) => (
            <article key={p.title} style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
              className="reveal spot hairline group relative overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="grid size-12 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition group-hover:border-accent/50 group-hover:shadow-[0_0_24px_var(--glow)]">
                  <Icon name={p.icon} className="size-6" />
                </div>
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">{p.tags.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Process ───── */}
      <section className="relative border-y border-line bg-bg-2 py-28">
        <div className="bg-dots absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHead eyebrow={d.process.eyebrow} title={d.process.title} sub={d.process.sub} />
          <ol className="relative grid gap-4 md:grid-cols-5">
            <div className="absolute inset-x-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent md:block" />
            {d.process.steps.map((s, i) => (
              <li key={s.k} className="reveal relative" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <div className="relative z-10 grid size-[52px] place-items-center rounded-full border border-line-strong bg-surface font-mono text-sm text-accent">{s.k}</div>
                <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Stack ───── */}
      <section className="mx-auto max-w-6xl px-5 py-28">
        <SectionHead eyebrow={d.stack.eyebrow} title={d.stack.title} sub={d.stack.sub} />
        <StackGrid lang={lang} allLabel={d.stack.all} />
      </section>

      {/* ───── Repos ───── */}
      <section className="mx-auto max-w-6xl px-5 pb-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow={d.repos.eyebrow} title={d.repos.title} sub={d.repos.sub} />
          <div className="reveal mb-12"><Btn href={href(lang, "/code")} variant="ghost">{d.repos.all}</Btn></div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {repos.filter((r) => r.featured).map((r, i) => <RepoCard key={r.name} repo={r} lang={lang} t={d.repos} i={i} />)}
        </div>
      </section>

      {/* ───── Work ───── */}
      <section className="border-y border-line bg-bg-2 py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead eyebrow={d.work.eyebrow} title={d.work.title} />
          </div>
          <ol className="relative border-s border-line">
            {d.work.items.map((w, i) => (
              <li key={w.org} className="reveal relative ps-8 pb-10 last:pb-0" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <span className={`absolute -start-[7px] top-1.5 size-3.5 rounded-full border-2 border-bg-2 ${i === 0 ? "bg-accent-fill animate-pulse-dot" : "bg-line-strong"}`} />
                <div className="font-mono text-xs text-muted">{w.when}</div>
                <h3 className="mt-1.5 text-lg font-semibold">
                  {w.role} <span className="text-muted">@</span> <span className="text-accent">{w.org}</span>
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">{w.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="mx-auto max-w-6xl px-5 py-28">
        <SectionHead eyebrow={d.testimonials.eyebrow} title={d.testimonials.title} />
        <div className="grid gap-5 md:grid-cols-3">
          {d.testimonials.items.map((t, i) => (
            <figure key={t.name} className="reveal spot hairline flex flex-col rounded-2xl p-6" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <span className="font-mono text-3xl leading-none text-accent">“</span>
              <blockquote className="mt-2 flex-1 leading-relaxed text-fg-2">{t.q}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt="" className="size-10 rounded-full object-cover ring-1 ring-line" loading="lazy" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ───── Writing ───── */}
      <section className="mx-auto max-w-6xl px-5 pb-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow={d.writingTeaser.eyebrow} title={d.writingTeaser.title} />
          <Link href={href(lang, "/writing")} className="reveal mb-12 font-mono text-sm text-muted hover:text-accent">{d.writingTeaser.all} →</Link>
        </div>
        <div className="border-t border-line">
          {enPosts.map((a, i) => <ArticleRow key={a.slug} a={a} lang={lang} d={d} i={i} />)}
        </div>
      </section>

      <CtaBlock lang={lang} d={d} />
    </>
  );
}
