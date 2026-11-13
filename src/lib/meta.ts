import type { Metadata } from "next";
import { altHref, getDict, SITE, type Lang } from "./i18n";

export function meta(lang: Lang, path: string, title?: string, description?: string, hasAlt = true): Metadata {
  const d = getDict(lang);
  const t = title ? `${title} | SBH#DEV` : d.meta.title;
  const desc = description ?? d.meta.description;
  const other = altHref(lang, path);
  const he = lang === "he" ? path : other;
  const en = lang === "en" ? path : other;
  return {
    metadataBase: new URL(SITE.url),
    title: t,
    description: desc,
    alternates: hasAlt ? { canonical: path, languages: { he, en, "x-default": he } } : { canonical: path },
    openGraph: { title: t, description: desc, url: path, siteName: "SBH#DEV", locale: lang === "he" ? "he_IL" : "en_US", type: "website", images: ["/og.png"] },
    twitter: { card: "summary_large_image", title: t, description: desc, images: ["/og.png"] },
  };
}
