/**
 * GitHub repos highlighted on the site.
 * Edit freely: set `featured: true` to show on the home page.
 * Private repos can be listed with `private: true` (no link is rendered).
 */
export type Repo = {
  name: string;
  url?: string;
  demo?: string;
  lang: string;
  stack: string[];
  ai?: boolean;
  featured?: boolean;
  private?: boolean;
  en: string;
  he: string;
};

const gh = (n: string) => `https://github.com/SharonBH/${n}`;

export const repos: Repo[] = [
  {
    name: "nodejs-api",
    url: gh("nodejs-api"),
    lang: "TypeScript",
    stack: ["Node.js", "LLM codegen", "Docker", "Jest", "AWS EB"],
    ai: true,
    featured: true,
    en: "LLM-powered code generator: describe a CRUD module in plain text and get clean, well-structured TypeScript on top of a production API template.",
    he: "מחולל קוד מבוסס LLM: מתארים מודול CRUD בטקסט חופשי ומקבלים קוד TypeScript נקי ומובנה, על גבי תבנית API מוכנה לפרודקשן.",
  },
  {
    name: "SupportTickets",
    url: gh("SupportTickets"),
    lang: "C#",
    stack: [".NET Aspire", "ASP.NET Core", "SPA client", "Docker"],
    featured: true,
    en: "Support-ticket system on .NET Aspire: an ASP.NET Core server and SPA client orchestrated with an Aspire AppHost and shared service defaults.",
    he: "מערכת קריאות שירות על .NET Aspire: שרת ASP.NET Core ולקוח SPA בתזמור AppHost של Aspire, עם service defaults משותפים.",
  },
  {
    name: "magicBall",
    url: gh("magicBall"),
    demo: "https://magic-ball-three.vercel.app",
    lang: "TypeScript",
    stack: ["React", "Firebase", "Vercel"],
    featured: true,
    en: "Sports-club platform with separate frontend and backend, Firebase-backed and deployed on Vercel.",
    he: "פלטפורמה למועדון ספורט עם פרונט ובקאנד נפרדים, מבוססת Firebase ופרוסה ב-Vercel.",
  },
  {
    name: "GetWild",
    url: gh("GetWild"),
    lang: "C#",
    stack: [".NET", "Web API", "SQL", "Unit tests"],
    featured: true,
    en: "Layered .NET backend (BLL / DAL / Web API) with a third-party fitness-platform integration, SQL tooling and unit tests.",
    he: "בקאנד .NET בשכבות (BLL / DAL / Web API) עם אינטגרציה לפלטפורמת כושר חיצונית, כלי SQL ובדיקות יחידה.",
  },
  {
    name: "docs",
    url: gh("docs"),
    lang: "MDX",
    stack: ["Mintlify", "AGENTS.md"],
    ai: true,
    en: "AI-ready documentation site on Mintlify, with an AGENTS.md so coding agents can write and maintain the docs.",
    he: "אתר תיעוד על Mintlify, מוכן ל-AI, עם AGENTS.md כדי שסוכני קוד יוכלו לכתוב ולתחזק את התיעוד.",
  },
  {
    name: "SBHPortfolio",
    url: gh("SBHPortfolio"),
    lang: "TypeScript",
    stack: ["Next.js", "Tailwind", "Firebase"],
    ai: true,
    en: "This website. Bilingual (Hebrew RTL / English), statically generated, light and dark themes, built together with coding agents.",
    he: "האתר הזה. דו-לשוני (עברית RTL / אנגלית), סטטי, עם מצב בהיר וכהה, ונבנה יחד עם סוכני קוד.",
  },
];
