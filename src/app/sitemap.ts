import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";

export const dynamic = "force-static";
const base = "https://sbh.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/services", "/ai", "/code", "/about", "/writing", "/discuss-project"];
  const out: MetadataRoute.Sitemap = [];
  for (const p of pages) {
    const enP = p === "/" ? "/en" : `/en${p}`;
    const alt = { languages: { he: base + p, en: base + enP } };
    out.push({ url: base + p, alternates: alt, priority: p === "/" ? 1 : 0.8 });
    out.push({ url: base + enP, alternates: alt, priority: p === "/" ? 0.9 : 0.7 });
  }
  for (const a of articles) {
    if (a.he) out.push({ url: base + a.hePath, lastModified: a.date });
    if (a.en) out.push({ url: `${base}/en/writing/${a.slug}`, lastModified: a.date });
  }
  return out;
}
