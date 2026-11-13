"use client";
import { useState } from "react";
import { stack, stackCats, type StackCat } from "@/content/stack";
import type { Lang } from "@/lib/i18n";

export default function StackGrid({ lang, allLabel }: { lang: Lang; allLabel: string }) {
  const [cat, setCat] = useState<StackCat | "all">("all");
  const cats = Object.keys(stackCats) as StackCat[];
  return (
    <div>
      <div className="reveal mb-6 flex flex-wrap gap-2">
        {(["all", ...cats] as const).map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition ${cat === c ? "border-transparent bg-fg text-bg" : "border-line text-muted hover:border-line-strong hover:text-fg"}`}>
            {c === "all" ? allLabel : stackCats[c][lang]}
          </button>
        ))}
      </div>
      <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
        {stack.map((s) => {
          const on = cat === "all" || s.cat === cat;
          return (
            <div key={s.name}
              className={`group flex min-h-20 flex-col justify-between bg-surface p-4 transition-all duration-300 ${on ? "opacity-100" : "opacity-25 grayscale"}`}>
              <span dir="ltr" className="font-mono text-[10px] uppercase tracking-wider text-muted rtl:text-end">{stackCats[s.cat].en}</span>
              <span dir="ltr" className="mt-2 text-[15px] font-medium transition-colors group-hover:text-accent rtl:text-end">{s.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
