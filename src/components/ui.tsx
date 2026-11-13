import Link from "next/link";
import Icon from "./Icon";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  const he = typeof children === "string" && /[\u0590-\u05FF]/.test(children);
  return <p dir={he ? undefined : "ltr"} className={`font-mono text-xs tracking-wide text-accent ${he ? "" : "rtl:text-end"}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, sub, center = false }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`reveal mb-12 max-w-2xl ${center ? "mx-auto text-center [&_p[dir]]:!text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}

export function Btn({ href, children, variant = "primary", external = false }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; external?: boolean }) {
  const cls = variant === "primary"
    ? "bg-accent-fill text-on-accent hover:shadow-[0_0_0_6px_var(--glow)]"
    : "border border-line-strong text-fg hover:bg-surface-2";
  const inner = (<>{children}<Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" /></>);
  const c = `group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${cls}`;
  return external ? <a href={href} className={c} target="_blank" rel="noreferrer">{inner}</a> : <Link href={href} className={c}>{inner}</Link>;
}

export function Chip({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span dir="ltr" className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] ${active ? "border-accent/40 bg-accent-fill/15 text-accent" : "border-line text-muted"}`}>
      {children}
    </span>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="orb -top-32 start-1/3 -z-10 size-[420px] bg-accent-fill/25" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{sub}</p>
        </div>
      </div>
    </section>
  );
}
