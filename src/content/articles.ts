/**
 * Articles / posts.
 * - `path` for Hebrew lives at the site root (legacy SEO URLs are preserved).
 * - English versions live under /en/writing/<slug>.
 * Add a new post: append an object below. Blocks are simple typed nodes.
 */
export type Block =
  | { t: "p"; v: string }
  | { t: "h2"; v: string }
  | { t: "h3"; v: string }
  | { t: "ul"; v: string[] }
  | { t: "ol"; v: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

export type ArticleBody = { title: string; excerpt: string; blocks: Block[] };

export type Article = {
  slug: string;
  hePath: string; // Hebrew URL (root)
  date: string; // ISO
  tag: "AI" | "Engineering" | "Business";
  minutes: number;
  he?: ArticleBody;
  en?: ArticleBody;
};

export const articles: Article[] = [
  {
    slug: "llm-demo-to-production",
    hePath: "/writing/llm-demo-to-production",
    date: "2026-11-10",
    tag: "AI",
    minutes: 5,
    en: {
      title: "From demo to production: a CTO's checklist for shipping LLM features",
      excerpt: "A working demo takes a weekend. A feature customers trust takes discipline. Here's the checklist I run before anything AI goes live.",
      blocks: [
        { t: "p", v: "Every team I talk to has an impressive AI demo. Very few have an AI feature in production that they'd bet the business on. The gap isn't the model. It's the engineering around it." },
        { t: "h2", v: "1. Define 'good' before you write a prompt" },
        { t: "p", v: "Write down what a correct answer looks like, with 30–100 real examples. That golden set becomes your eval, your regression test and your argument with stakeholders." },
        { t: "h2", v: "2. Context beats model size" },
        { t: "ul", v: ["Clean, deduplicated source data", "Retrieval you can inspect and debug", "Short, explicit instructions with examples", "Tools with narrow, well-typed inputs"] },
        { t: "h2", v: "3. Put guardrails where the risk is" },
        { t: "p", v: "Validate outputs against schemas, cap what tools can do, and keep a human in the loop wherever money, health or legal outcomes are involved. Assume any text the model reads might try to instruct it." },
        { t: "h2", v: "4. Measure cost per outcome, not per token" },
        { t: "p", v: "Track what each successful result costs. Then route to the smallest model that still passes your eval. It's usually cheaper than you fear, and slower than you hope." },
        { t: "h2", v: "5. Ship with observability" },
        { t: "ul", v: ["Log inputs, retrieved context, tool calls and outputs", "Sample production traffic into your eval set weekly", "Alert on quality drift, not just errors"] },
        { t: "p", v: "None of this is glamorous. All of it is the difference between a demo and a product." },
      ],
    },
    he: {
      title: "מדמו לפרודקשן: צ'קליסט של CTO לשחרור פיצ'רים מבוססי LLM",
      excerpt: "דמו עובד לוקח סוף שבוע. פיצ'ר שלקוחות סומכים עליו דורש משמעת. זה הצ'קליסט שאני עובר לפני שמשהו מבוסס AI עולה לאוויר.",
      blocks: [
        { t: "p", v: "לכל צוות שאני פוגש יש דמו AI מרשים. למעט מאוד צוותים יש פיצ'ר AI בפרודקשן שהם מוכנים להמר עליו. הפער הוא לא במודל, הוא בהנדסה שמסביבו." },
        { t: "h2", v: "1. מגדירים מה זה 'טוב' לפני שכותבים פרומפט" },
        { t: "p", v: "כתבו איך נראית תשובה נכונה, עם 30–100 דוגמאות אמיתיות. ה-golden set הזה הופך ל-eval, לבדיקת רגרסיה ולטיעון מול בעלי העניין." },
        { t: "h2", v: "2. הקשר חשוב יותר מגודל המודל" },
        { t: "ul", v: ["דאטה מקור נקי וללא כפילויות", "אחזור (retrieval) שאפשר לבדוק ולדבג", "הנחיות קצרות ומפורשות עם דוגמאות", "כלים עם קלטים צרים ומוגדרים היטב"] },
        { t: "h2", v: "3. שמים guardrails איפה שהסיכון" },
        { t: "p", v: "מאמתים פלטים מול סכמות, מגבילים מה כלים יכולים לעשות, ומשאירים אדם בלולאה בכל מקום שיש בו כסף, בריאות או משפט. מניחים שכל טקסט שהמודל קורא עלול לנסות לתת לו הוראות." },
        { t: "h2", v: "4. מודדים עלות לתוצאה, לא לטוקן" },
        { t: "p", v: "עוקבים כמה עולה כל תוצאה מוצלחת, ומנתבים למודל הקטן ביותר שעדיין עובר את ה-eval. זה בדרך כלל זול ממה שחששתם, ואיטי ממה שקיוויתם." },
        { t: "h2", v: "5. משחררים עם observability" },
        { t: "ul", v: ["לוג של קלטים, הקשר שאוחזר, קריאות לכלים ופלטים", "דגימה שבועית של תעבורת פרודקשן לתוך ה-eval set", "התראות על ירידה באיכות, לא רק על שגיאות"] },
        { t: "p", v: "שום דבר מזה לא זוהר. כל זה הוא ההבדל בין דמו למוצר." },
      ],
    },
  },
  {
    slug: "ai-native-engineering-team",
    hePath: "/writing/ai-native-engineering-team",
    date: "2026-10-28",
    tag: "Engineering",
    minutes: 4,
    en: {
      title: "Running an AI-native engineering team",
      excerpt: "Coding agents don't replace engineers. They change what engineers spend their day on. Here's the operating model that's worked for me.",
      blocks: [
        { t: "p", v: "Once coding agents became genuinely useful, the bottleneck in my teams moved. Writing code got cheap; deciding what to build, reviewing it and keeping the system coherent did not." },
        { t: "h2", v: "Specs are back" },
        { t: "p", v: "An agent is only as good as the intent it's given. Short written specs with acceptance criteria, which we'd quietly stopped writing, are now the highest-leverage artifact on the team." },
        { t: "h2", v: "Context lives in the repo" },
        { t: "ul", v: ["An agent instructions file (AGENTS.md / CLAUDE.md) with conventions and commands", "Reusable skills for recurring tasks: migrations, new endpoints, release notes", "Architecture notes the agent can read before touching a module"] },
        { t: "h2", v: "Parallel work, strict gates" },
        { t: "p", v: "Agents work in separate worktrees on separate tasks. Nothing merges without passing tests, static analysis and a human review. The review bar goes up, not down." },
        { t: "h2", v: "What changes for engineers" },
        { t: "ul", v: ["More time on design, review and product thinking", "Less time on boilerplate and glue code", "Seniority shows up as judgment: knowing what to reject"] },
        { t: "p", v: "The teams that win aren't the ones generating the most code. They're the ones with the clearest intent and the tightest feedback loops." },
      ],
    },
    he: {
      title: "איך מנהלים צוות פיתוח AI-native",
      excerpt: "סוכני קוד לא מחליפים מפתחים. הם משנים על מה מפתחים מבלים את היום. זה מודל העבודה שעובד אצלי.",
      blocks: [
        { t: "p", v: "ברגע שסוכני הקוד נהיו שימושיים באמת, צוואר הבקבוק בצוותים שלי זז. כתיבת קוד נהייתה זולה. להחליט מה לבנות, לסקור את זה ולשמור על מערכת קוהרנטית, לא." },
        { t: "h2", v: "האפיון חזר" },
        { t: "p", v: "סוכן טוב בדיוק כמו הכוונה שהוא מקבל. אפיונים קצרים עם קריטריוני קבלה, שבשקט הפסקנו לכתוב, הם היום התוצר עם המינוף הגבוה ביותר בצוות." },
        { t: "h2", v: "ההקשר יושב בריפו" },
        { t: "ul", v: ["קובץ הנחיות לסוכן (AGENTS.md / CLAUDE.md) עם קונבנציות ופקודות", "Skills לשימוש חוזר במשימות קבועות: מיגרציות, endpoints חדשים, release notes", "הערות ארכיטקטורה שהסוכן קורא לפני שהוא נוגע במודול"] },
        { t: "h2", v: "עבודה במקביל, שערים קשוחים" },
        { t: "p", v: "סוכנים עובדים ב-worktrees נפרדים על משימות נפרדות. שום דבר לא נכנס ל-main בלי טסטים, ניתוח סטטי וסקירה אנושית. רף הסקירה עולה, לא יורד." },
        { t: "h2", v: "מה משתנה למפתחים" },
        { t: "ul", v: ["יותר זמן על תכנון, סקירה וחשיבה מוצרית", "פחות זמן על boilerplate וקוד דבק", "ותק מתבטא בשיקול דעת: לדעת מה לדחות"] },
        { t: "p", v: "הצוותים שמנצחים הם לא אלה שמייצרים הכי הרבה קוד. אלה הצוותים עם הכוונה הכי ברורה ולולאות הפידבק הכי הדוקות." },
      ],
    },
  },
  {
    slug: "ai-tools-small-business",
    hePath: "/AIToolsSmallBiz",
    date: "2025-06-01",
    tag: "AI",
    minutes: 3,
    he: {
      title: "5 כלי בינה מלאכותית שכל עסק קטן בישראל חייב להכיר",
      excerpt: "AI כבר לא שייך רק לחברות ענק. גם עסקים קטנים יכולים לחסוך זמן, לייעל תהליכים ולשפר שירות בעזרת כלים פשוטים וזמינים.",
      blocks: [
        { t: "p", v: "AI כבר לא שייך רק לחברות ענק. גם עסקים קטנים בישראל יכולים לחסוך זמן, לייעל תהליכים ולשפר שירות, בעזרת כלים פשוטים, זמינים וחכמים. הנה 5 כלים שאני ממליץ לבדוק." },
        { t: "h3", v: "1. Claude / ChatGPT: שירות לקוחות, תוכן והכוונה" },
        { t: "p", v: "מענה לשאלות נפוצות, כתיבת תכנים שיווקיים, ניתוח מסמכים או סיכום פגישות. העוזרים האלה כבר משנים עסקים קטנים בכל העולם." },
        { t: "h3", v: "2. Notion AI: ארגון מידע ותיעוד חכם" },
        { t: "p", v: "מסמכים חכמים, מאורגנים ומתעדכנים, כולל תזכורות, סיכומים ותוכן אוטומטי." },
        { t: "h3", v: "3. Pictory: יצירת סרטונים מהירה" },
        { t: "p", v: "רוצים סרטוני טיקטוק או סרטוני הסבר למוצר? הכלי יוצר סרטונים מטקסט תוך דקות, כולל קריינות וגרפיקה." },
        { t: "h3", v: "4. Tidio: צ'אטבוטים לשירות לקוחות" },
        { t: "p", v: "צ'אטבוט שעונה ללקוחות באתר 24/7, שולח מיילים ומעדכן אתכם בכל פנייה חדשה." },
        { t: "h3", v: "5. Make: אוטומציה בין מערכות" },
        { t: "p", v: "מחבר בין Gmail, WhatsApp, CRM ומערכות פנימיות, ויוצר תהליכים אוטומטיים שחוסכים שעות כל חודש." },
        { t: "h2", v: "רוצים עזרה בהטמעה?" },
        { t: "p", v: "אני עוזר לעסקים לא רק לבחור את הכלים הנכונים, אלא גם ליישם אותם בצורה מותאמת ולמדוד תוצאות." },
      ],
    },
  },
  {
    slug: "choose-web-developer",
    hePath: "/ChooseWebDeveloper",
    date: "2025-05-20",
    tag: "Business",
    minutes: 3,
    he: {
      title: "איך לבחור את מפתח האתרים המתאים לעסק שלך בישראל?",
      excerpt: "פרילנסר, סטודיו או חברה? מדריך קצר לבחירה נכונה ולהימנעות מטעויות נפוצות.",
      blocks: [
        { t: "p", v: "בין אם אתם מקימים אתר חדש לעסק קטן או בונים פלטפורמה מורכבת, בחירת מפתח אתרים היא החלטה קריטית. במדריך הזה נבין איך לבחור נכון, בין פרילנסר, סטודיו או חברה, ואיך להימנע מטעויות נפוצות." },
        { t: "h2", v: "פרילנסר או חברה? יתרונות וחסרונות" },
        { t: "table", head: ["", "פרילנסר", "חברה"], rows: [["יתרונות", "עלויות נמוכות, קשר ישיר", "צוות מקצועי, זמינות גבוהה, אחריות רחבה"], ["חסרונות", "תלות באדם אחד, פחות תהליכים", "מחיר גבוה יותר לרוב"]] },
        { t: "h2", v: "שאלות שחייבים לשאול" },
        { t: "ul", v: ["באילו טכנולוגיות אתה משתמש?", "האם יש ניסיון בפרויקטים דומים?", "האם אתה זמין לאורך זמן לתמיכה ושדרוגים?", "כמה זמן ייקח הפרויקט? מה כלול במחיר?"] },
        { t: "h2", v: "איך בודקים מקצועיות ואמינות" },
        { t: "ul", v: ["בקשו תיק עבודות ולא רק לינקים, גם תיאור תהליך", "בדקו חוות דעת בגוגל או בלינקדאין", "שימו לב איך הוא מדבר על הצרכים שלכם: האם הוא שואל שאלות עסקיות?"] },
        { t: "h2", v: "למה לקוחות בוחרים בי" },
        { t: "ul", v: ["גישה פרקטית: מבין את העסק שלך", "ניסיון עם מגוון תעשיות: פינטק, שירותים, טכנולוגיה", "שקיפות מלאה לאורך כל הדרך", "שירות כולל: UX, פיתוח, הטמעה, אופטימיזציה"] },
      ],
    },
  },
  {
    slug: "custom-software-israel",
    hePath: "/CustomSoftwareIsrael",
    date: "2025-05-10",
    tag: "Business",
    minutes: 3,
    he: {
      title: "פיתוח תוכנה בהתאמה אישית בישראל: פתרונות מדויקים לעסקים",
      excerpt: "מתי מוצר מדף לא מספיק, ואיך נראה תהליך פיתוח של מערכת שמותאמת בדיוק לעסק שלכם.",
      blocks: [
        { t: "p", v: "לא כל עסק דומה לשני, ולכן לפעמים הפתרון הנכון הוא לא מוצר מוכן אלא תוכנה מותאמת אישית: מערכות וכלים דיגיטליים שמדויקים לתהליכים, לעובדים ולצרכים של העסק." },
        { t: "h2", v: "מתי כדאי לפתח תוכנה מותאמת אישית?" },
        { t: "ul", v: ["יש לכם תהליך ייחודי שלא מתאים לכלים קיימים", "אתם מבזבזים זמן רב על עבודה ידנית", "אתם צריכים מערכת שלא תלויה במנוי צד ג׳", "יש צורך בחיבור בין כמה מערכות קיימות"] },
        { t: "h2", v: "מה כולל תהליך הפיתוח?" },
        { t: "ol", v: ["הבנת התהליך העסקי והאתגרים בשטח", "אפיון מסכים ותרחישים", "עיצוב UX/UI בהתאם לצרכי המשתמשים", "פיתוח צד שרת וצד לקוח בטכנולוגיות מתקדמות", "בדיקות, שיפור והתאמה מתמשכת"] },
        { t: "h2", v: "סיפור הצלחה" },
        { t: "p", v: "חברת שילוח ביקשה מערכת לניהול הזמנות ולקוחות שתחליף אקסלים ומיילים. תוך חודשיים פיתחנו פלטפורמה מבוססת ווב שחסכה מעל 30 שעות חודשיות לעובד, ותוך 3 חודשים דווח על שיפור של 25% בזמני התגובה ללקוחות." },
        { t: "h2", v: "טכנולוגיות בשימוש" },
        { t: "p", v: "React, Next.js, Node.js, .NET, PostgreSQL, MongoDB, Firebase, TypeScript, REST APIs, ושכבת AI איפה שהיא מוסיפה ערך." },
      ],
    },
  },
  {
    slug: "web-development-tel-aviv",
    hePath: "/WebdevTelAviv",
    date: "2025-05-01",
    tag: "Business",
    minutes: 3,
    he: {
      title: "פיתוח אתרים בתל אביב: אתרים ואפליקציות שמניעים תוצאות",
      excerpt: "אתרים ואפליקציות בהתאמה אישית לעסקים מקומיים, עם דגש על תוצאה עסקית, עיצוב מודרני וקוד איכותי.",
      blocks: [
        { t: "p", v: "מחפשים מי שיפתח לכם אתר בתל אביב, יבין את הצרכים שלכם, יחשוב עסקית ויפתח פתרון מדויק? אני בונה אתרים ואפליקציות בהתאמה אישית לעסקים מקומיים, עם דגש על תוצאה עסקית, עיצוב מודרני וקוד איכותי." },
        { t: "h2", v: "למה לבחור בי?" },
        { t: "ul", v: ["גישה אסטרטגית לפיתוח: לא רק קוד, אלא פתרון עסקי שלם", "ניסיון עם עסקים מקומיים וסטארטאפים", "זמינות מלאה, שירות בעברית ושיתוף פעולה לאורך כל הדרך", "טכנולוגיות עדכניות: React, Next.js, Node.js, Firebase ועוד"] },
        { t: "h2", v: "התהליך, שלב אחר שלב" },
        { t: "ol", v: ["שיחת אפיון ראשונית ללא התחייבות", "הצעה מותאמת אישית", "עיצוב UX/UI מודרני", "פיתוח מלא, התאמה למובייל ול-SEO", "בדיקות והטמעה עם ליווי אישי"] },
        { t: "h2", v: "סיפור הצלחה מתל אביב" },
        { t: "p", v: "סטודיו לעיצוב ביקש לשדרג את אתר התדמית שלו. תוך 3 שבועות עברנו מאתר ישן לאתר חדשני, מותאם לסלולרי, עם מערכת ניהול תוכן. מאז ההשקה:" },
        { t: "ul", v: ["עלייה של 48% בזמן השהייה באתר", "פי 2 יותר פניות דרך הטופס", "עלייה של 60% בחיפושים אורגניים תוך חודשיים"] },
      ],
    },
  },
];

export const sortedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));
export const articlesFor = (lang: "he" | "en") => sortedArticles.filter((a) => (lang === "en" ? a.en : a.he));
