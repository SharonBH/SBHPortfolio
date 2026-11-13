import "../app/globals.css";
import { getDict, waLink, type Lang } from "@/lib/i18n";
import Icon from "./Icon";
import Header from "./Header";
import Footer from "./Footer";
import Effects from "./Effects";
import { themeScript } from "./ThemeToggle";
import { ldScript, siteGraph } from "@/lib/schema";

/** Hide .reveal elements only when JS runs. Injected as a <style> React doesn't own, so hydration can't strip it. */
const revealScript = `(()=>{var s=document.createElement("style");s.textContent="@media (prefers-reduced-motion:no-preference){.reveal:not(.in){opacity:0;transform:translateY(18px)}}";document.head.appendChild(s)})();`;

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <meta name="theme-color" content="#07080a" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={ldScript(siteGraph(lang))} />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-fill focus:px-3 focus:py-2 focus:text-on-accent">Skip</a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <a href={waLink(lang)} target="_blank" rel="noreferrer" aria-label={getDict(lang).contact.whatsappCta}
          className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105">
          <Icon name="whatsapp" className="size-7" />
        </a>
        <Effects />
      </body>
    </html>
  );
}
