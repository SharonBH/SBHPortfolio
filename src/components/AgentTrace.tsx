"use client";
import { useEffect, useState } from "react";

type Line = { k: string; text: string; meta?: string; tone?: "ok" | "warn" | "dim" | "accent" };
type Run = { cmd: string; lines: Line[]; footer: string };

const RUNS: Run[] = [
  {
    cmd: 'sbh run agent:ship --idea="dark mode"',
    lines: [
      { k: "plan", text: "spec → build → test → ship", tone: "dim" },
      { k: "tool", text: "repo.read(src/) → 42 files", meta: "120ms" },
      { k: "tool", text: "code.write(theme, toggle, tokens)", meta: "38s" },
      { k: "test", text: "312 passed · 0 failed", meta: "pass" },
      { k: "guard", text: "a11y_contrast · security_scan", meta: "pass" },
      { k: "human", text: "preview ready → your review", meta: "you", tone: "warn" },
    ],
    footer: "done  52s · ready to ship",
  },
  {
    cmd: "sbh run agent:inbox-zero --since=monday",
    lines: [
      { k: "plan", text: "triage → summarize → draft", tone: "dim" },
      { k: "tool", text: "mail.fetch() → 142 threads", meta: "310ms" },
      { k: "sort", text: "2 urgent · 9 need reply · 131 fyi", meta: "ok" },
      { k: "draft", text: "9 replies in your tone", meta: "ok" },
      { k: "guard", text: "never_send_without_approval", meta: "pass" },
      { k: "human", text: "9 drafts waiting for you", meta: "you", tone: "warn" },
    ],
    footer: "done  14s · inbox: 0 (almost)",
  },
  {
    cmd: "sbh run agent:coffee --size=large",
    lines: [
      { k: "plan", text: "beans → grind → brew → pour", tone: "dim" },
      { k: "tool", text: "kitchen.find(beans) → 2 bags", meta: "ok" },
      { k: "tool", text: "grinder.run(fine)", meta: "18s" },
      { k: "guard", text: "decaf_check · mug_is_clean", meta: "pass" },
      { k: "eval", text: "aroma 0.98 · temp 68°C", meta: "pass" },
      { k: "human", text: "extra shot? approval needed", meta: "you", tone: "warn" },
    ],
    footer: "done  2m 41s · ☕ ready",
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
