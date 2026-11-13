import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";

export const dynamic = "force-static";
const base = "https://sbh.co.il";

/** Most recent content date, used as lastModified for the static pages. */
const latest = articles.map((a) => a.updated ?? a.date).sort().at(-1);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/services", "/ai", "/code", "/about", "/writing", "/discuss-project"];
  const out: MetadataRoute.Sitemap = [];
  for (const p of pages) {
    const enP = p === "/" ? "/en" : `/en${p}`;
    const alt = { languages: { he: base + p, en: base + enP } };
    out.push({ url: base + p, lastModified: latest, alternates: alt, priority: p === "/" ? 1 : 0.8 });
    out.push({ url: base + enP, lastModified: latest, alternates: alt, priority: p === "/" ? 0.9 : 0.7 });
  }
  for (const a of articles) {
    const lastModified = a.updated ?? a.date;
    const enUrl = `${base}/en/writing/${a.slug}`;
    const alternates = a.he && a.en ? { languages: { he: base + a.hePath, en: enUrl } } : undefined;
    if (a.he) out.push({ url: base + a.hePath, lastModified, alternates });
    if (a.en) out.push({ url: enUrl, lastModified, alternates });
  }
  return out;
}
