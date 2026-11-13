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
    name: "PropertyMap",
    url: gh("PropertyMap"),
    lang: "C#",
    stack: [".NET 9", "Clean architecture", "React", "Multi-tenant", "Azure"],
    featured: true,
    en: "Real-estate management platform: agencies, agents, properties with images and neighborhoods on an interactive map. Multi-tenant .NET 9 Web API with a React client, built on a clean-architecture starter kit and deployed to Azure with GitHub Actions.",
    he: "פלטפורמה לניהול נדל\"ן: סוכנויות, סוכנים, נכסים עם תמונות ושכונות על גבי מפה אינטראקטיבית. Web API מרובה דיירים ב-.NET 9 עם לקוח React, על בסיס starter kit בארכיטקטורה נקייה, עם פריסה ל-Azure ב-GitHub Actions.",
  },
  {
    name: "PokerPals",
    lang: "TypeScript",
    stack: ["React Native", "Expo", "Firebase", "Cloud Functions"],
    featured: true,
    private: true,
    en: "Mobile app for running poker clubs: live tournament clock with blind structures, rebuys and eliminations, a TV-casting view, season leaderboards and prize-pool math. Timers run server-side on Cloud Functions, so every device stays in sync.",
    he: "אפליקציית מובייל לניהול מועדוני פוקר: שעון טורניר חי עם מבני בליינדים, ריביים והדחות, תצוגה לשידור לטלוויזיה, טבלאות עונה וחישוב קופת פרסים. הטיימרים רצים בצד השרת ב-Cloud Functions, כך שכל המכשירים מסונכרנים.",
  },
  {
    name: "GetWild",
    url: gh("GetWild"),
    lang: "C#",
    stack: [".NET", "Web API", "SQL", "Unit tests"],
    en: "Layered .NET backend (BLL / DAL / Web API) with a third-party fitness-platform integration, SQL tooling and unit tests.",
    he: "בקאנד .NET בשכבות (BLL / DAL / Web API) עם אינטגרציה לפלטפורמת כושר חיצונית, כלי SQL ובדיקות יחידה.",
  },
  {
    name: "TMA2",
    url: gh("TMA2"),
    lang: "C#",
    stack: [".NET 7", "Web API", "React", "Docker", "Azure DevOps"],
    featured: true,
    en: "TMA: a tournament management app with player scores, averages, earnings and leaderboards. Layered .NET Web API (BLL / DAL) with a React front end, token auth and Docker CI pipelines.",
    he: "TMA: אפליקציה לניהול טורנירים עם ניקוד שחקנים, ממוצעים, רווחים וטבלאות דירוג. Web API ב-.NET בשכבות (BLL / DAL) עם פרונט React, הזדהות בטוקן ופייפליינים של Docker.",
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
