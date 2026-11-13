"use client";
import { useEffect, useState } from "react";

type Line = { k: string; text: string; meta?: string; tone?: "ok" | "warn" | "dim" | "accent" };
type Run = { cmd: string; lines: Line[]; footer: string };

const RUNS: Run[] = [
  {
    cmd: "sbh run agent:loan-intake --env=prod",
    lines: [
      { k: "plan", text: "classify → enrich → route → draft", tone: "dim" },
      { k: "tool", text: 'crm.lookup(id: "A-1042")', meta: "182ms" },
      { k: "tool", text: 'docs.search("partner criteria") → 3 chunks', meta: "240ms" },
      { k: "guard", text: "pii_redaction · schema_check", meta: "pass" },
      { k: "eval", text: "faithfulness 0.97 · relevance 0.95", meta: "pass" },
      { k: "human", text: "approval requested → ops", meta: "queued", tone: "warn" },
    ],
    footer: "done  1.8s · $0.004 · 2,341 tok",
  },
  {
    cmd: "sbh run agent:pr-review --repo=platform",
    lines: [
      { k: "plan", text: "read diff → run checks → review", tone: "dim" },
      { k: "tool", text: "git.diff(base: main) → 14 files", meta: "90ms" },
      { k: "tool", text: "ci.run(tests, semgrep)", meta: "41s" },
      { k: "guard", text: "secrets_scan · license_check", meta: "pass" },
      { k: "review", text: "2 suggestions · 0 blockers", meta: "ok" },
      { k: "human", text: "ready for merge approval", meta: "you", tone: "warn" },
    ],
    footer: "done  46s · $0.11 · 18,920 tok",
  },
];

export default function AgentTrace() {
  const [run, setRun] = useState(0);
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState(0);
  const r = RUNS[run];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setTyped(r.cmd.length); setShown(r.lines.length + 1); return; }
    let timer: ReturnType<typeof setTimeout>;
    if (typed < r.cmd.length) timer = setTimeout(() => setTyped((n) => n + 1), 28);
    else if (shown <= r.lines.length) timer = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 350 : 520);
    else timer = setTimeout(() => { setRun((x) => (x + 1) % RUNS.length); setShown(0); setTyped(0); }, 3600);
    return () => clearTimeout(timer);
  }, [typed, shown, r]);

  const tone = (l: Line) =>
    l.tone === "warn" ? "text-amber-400" : l.tone === "dim" ? "text-zinc-400" : "text-[#c6f135]";

  return (
    <div dir="ltr" className="scanline relative overflow-hidden rounded-2xl border border-white/10 bg-code text-code-fg shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ms-3 font-mono text-[11px] text-zinc-500">agent-trace — live</span>
        <span className="ms-auto flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
          <span className="size-1.5 rounded-full bg-[#c6f135] animate-pulse-dot" /> streaming
        </span>
      </div>
      <div className="min-h-[300px] p-5 font-mono text-[12.5px] leading-[1.9] sm:text-[13px]">
        <div>
          <span className="text-[#5cd0ff]">~</span> <span className="text-zinc-500">$</span> {r.cmd.slice(0, typed)}
          {typed < r.cmd.length && <span className="ms-0.5 inline-block h-[1.05em] w-[7px] translate-y-[3px] bg-zinc-300 animate-blink" />}
        </div>
        {r.lines.slice(0, Math.min(shown, r.lines.length)).map((l, i) => (
          <div key={run + "-" + i} className="line-in flex gap-3">
            <span className="w-14 shrink-0 text-zinc-500">▸ {l.k}</span>
            <span className="min-w-0 flex-1 truncate text-zinc-200">{l.text}</span>
            {l.meta && <span className={`shrink-0 ${tone(l)}`}>{l.tone === "warn" ? "◷" : "✓"} {l.meta}</span>}
          </div>
        ))}
        {shown > r.lines.length && (
          <div className="mt-2 border-t border-dashed border-white/10 pt-2 text-[#c6f135]">✔ {r.footer}</div>
        )}
        {typed >= r.cmd.length && shown <= r.lines.length && (
          <div className="mt-1 flex items-center gap-2 text-zinc-500">
            <span className="inline-flex gap-1">
              <span className="size-1 rounded-full bg-zinc-500 animate-pulse" />
              <span className="size-1 rounded-full bg-zinc-500 animate-pulse [animation-delay:150ms]" />
              <span className="size-1 rounded-full bg-zinc-500 animate-pulse [animation-delay:300ms]" />
            </span>
            thinking
          </div>
        )}
      </div>
    </div>
  );
}
