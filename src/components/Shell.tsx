import "../app/globals.css";
import type { Lang } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";
import Effects from "./Effects";
import { themeScript } from "./ThemeToggle";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sharon Ben Haim",
  jobTitle: "CTO & AI Engineering Lead",
  url: "https://sbh.co.il",
  sameAs: ["https://www.linkedin.com/in/sharon-ben-haim/", "https://github.com/SharonBH"],
  knowsAbout: ["AI engineering", "LLM applications", "AI agents", "Software architecture", "Azure", "AWS", "Fintech"],
};

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="#07080a" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-fill focus:px-3 focus:py-2 focus:text-on-accent">Skip</a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <Effects />
      </body>
    </html>
  );
}
