/**
 * JSON-LD structured data. Search engines and AI answer engines read these
 * as the canonical facts about Sharon and the site, so keep them in sync
 * with the About page.
 */
import { getDict, href, SITE, type Lang } from "./i18n";
import type { Article } from "@/content/articles";

const PERSON_ID = `${SITE.url}/#person`;
const SITE_ID = `${SITE.url}/#website`;
const SERVICE_ID = `${SITE.url}/#service`;

const abs = (path: string) => (path === "/" ? SITE.url : SITE.url + path);

export function siteGraph(lang: Lang) {
  const d = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Sharon Ben Haim",
        alternateName: "שרון בן חיים",
        jobTitle: "CTO & AI Engineering Lead",
        description:
          "Four-time CTO with 20+ years of experience building and shipping production software. Fractional CTO and hands-on AI engineer helping startups and businesses ship LLM apps, AI agents and AI-native engineering teams.",
        url: abs(href(lang, "/about")),
        image: { "@type": "ImageObject", url: `${SITE.url}/img/sharon-ben-haim.jpg`, width: 800, height: 800, caption: "Sharon Ben Haim" },
        email: `mailto:${SITE.email}`,
        sameAs: [SITE.linkedin, SITE.github],
        worksFor: { "@type": "Organization", name: "Ottri", description: "Embedded-finance platform" },
        hasOccupation: { "@type": "Occupation", name: "Chief Technology Officer", occupationLocation: { "@type": "Country", name: "Israel" } },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Hebrew University of Jerusalem" },
        address: { "@type": "PostalAddress", addressLocality: "Rehovot", addressCountry: "IL" },
        knowsLanguage: ["he", "en"],
        knowsAbout: [
          "AI engineering", "LLM applications", "AI agents", "Retrieval-augmented generation", "LLM evaluation",
          "AI-native engineering teams", "Coding agents", "Software architecture", "Fractional CTO",
          "Fintech", "Consumer lending", "Embedded finance", "Azure", "AWS", "C#", ".NET", "TypeScript", "Next.js",
        ],
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE.url,
        name: "SBH#DEV",
        description: d.meta.description,
        inLanguage: ["he", "en"],
        publisher: { "@id": PERSON_ID },
      },
    ],
  };
}

export function servicesGraph(lang: Lang) {
  const d = getDict(lang);
  const s = d.services;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": SERVICE_ID,
        name: "SBH#DEV",
        url: abs(href(lang, "/services")),
        description: s.sub,
        founder: { "@id": PERSON_ID },
        logo: `${SITE.url}/logo-sbh.jpeg`,
        image: `${SITE.url}/og.png`,
        telephone: "+972-54-255-7990",
        email: SITE.email,
        address: { "@type": "PostalAddress", addressLocality: "Rehovot", addressCountry: "IL" },
        areaServed: [{ "@type": "Country", name: "Israel" }, "Worldwide (remote)"],
        knowsLanguage: ["he", "en"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: s.title,
          itemListElement: [...s.offers, ...s.also.map((a) => ({ name: a.t, for: a.d }))].map((o) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: o.name, description: o.for, provider: { "@id": PERSON_ID } },
          })),
        },
      },
      {
        "@type": "FAQPage",
        inLanguage: lang,
        mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

export function articleLd(a: Article, lang: Lang, path: string) {
  const body = (lang === "en" ? a.en : a.he)!;
  const url = abs(path);
  return {
    "@context": "https://schema.org",
    "@type": a.kind === "guide" ? "Article" : "BlogPosting",
    headline: body.title,
    description: body.tldr ?? body.excerpt,
    abstract: body.tldr,
    datePublished: a.date,
    dateModified: a.updated ?? a.date,
    inLanguage: lang,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE.url}/og.png`,
    keywords: a.tag,
    author: { "@id": PERSON_ID, "@type": "Person", name: "Sharon Ben Haim", url: abs(href(lang, "/about")) },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": SITE_ID },
  };
}

export const ldScript = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
