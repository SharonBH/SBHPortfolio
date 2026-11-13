/** Tech stack + AI toolbox. Edit to match what you actually use. */
export type StackCat = "models" | "agents" | "devtools" | "data" | "cloud" | "app";

export const stackCats: Record<StackCat, { en: string; he: string }> = {
  models: { en: "Models & APIs", he: "מודלים ו-APIs" },
  agents: { en: "Agents & orchestration", he: "סוכנים ותזמור" },
  devtools: { en: "AI dev tools", he: "כלי פיתוח AI" },
  data: { en: "Data & retrieval", he: "דאטה ואחזור" },
  cloud: { en: "Cloud & infra", he: "ענן ותשתיות" },
  app: { en: "App stack", he: "סטאק אפליקטיבי" },
};

export const stack: { name: string; cat: StackCat }[] = [
  { name: "Anthropic Claude", cat: "models" },
  { name: "OpenAI", cat: "models" },
  { name: "Azure OpenAI", cat: "models" },
  { name: "AWS Bedrock", cat: "models" },
  { name: "Open-weight models", cat: "models" },
  { name: "MCP", cat: "agents" },
  { name: "Claude Agent SDK", cat: "agents" },
  { name: "Tool calling", cat: "agents" },
  { name: "Evals & tracing", cat: "agents" },
  { name: "Claude Code", cat: "devtools" },
  { name: "Codex", cat: "devtools" },
  { name: "Cursor", cat: "devtools" },
  { name: "GitHub Copilot", cat: "devtools" },
  { name: "PostgreSQL", cat: "data" },
  { name: "pgvector", cat: "data" },
  { name: "MongoDB", cat: "data" },
  { name: "SQL Server", cat: "data" },
  { name: "BI & analytics", cat: "data" },
  { name: "Azure", cat: "cloud" },
  { name: "AWS", cat: "cloud" },
  { name: "Docker", cat: "cloud" },
  { name: "Terraform", cat: "cloud" },
  { name: "Cloudflare", cat: "cloud" },
  { name: "TypeScript", cat: "app" },
  { name: "C# / .NET", cat: "app" },
  { name: "Next.js", cat: "app" },
  { name: "React", cat: "app" },
  { name: "Node.js", cat: "app" },
  { name: "React Native / Expo", cat: "app" },
];

/** AI Lab toolbox: tool + how it's used. */
export const toolbox: { name: string; kind: string; en: string; he: string }[] = [
  { name: "Claude Code", kind: "coding agent", en: "Primary coding agent: planning, multi-file changes, refactors, tests. Driven by repo instructions and skills.", he: "סוכן הקוד העיקרי: תכנון, שינויים בכמה קבצים, ריפקטורינג וטסטים. מונחה ע״י קובצי הנחיות ו-skills בריפו." },
  { name: "Codex", kind: "coding agent", en: "Second opinion and parallel tasks. Useful for cross-checking an approach.", he: "חוות דעת שנייה ומשימות במקביל. שימושי להצלבת גישות." },
  { name: "Cursor", kind: "AI IDE", en: "Hands-on editing and fast in-context iterations.", he: "עריכה ידנית ואיטרציות מהירות בתוך ההקשר." },
  { name: "GitHub Copilot", kind: "assistant", en: "Inline completion and PR assistance across the team.", he: "השלמות בתוך הקוד ועזרה ב-PRs לכל הצוות." },
  { name: "MCP servers", kind: "integration", en: "Connecting agents to ClickUp, Figma, GitHub, databases and internal tools.", he: "חיבור סוכנים ל-ClickUp, Figma, GitHub, מסדי נתונים וכלים פנימיים." },
  { name: "Claude / Cowork", kind: "assistant", en: "Research, specs, architecture reviews and day-to-day ops automation.", he: "מחקר, אפיונים, סקירות ארכיטקטורה ואוטומציה של עבודה יומיומית." },
  { name: "CI quality gates", kind: "guardrail", en: "Tests, linters and type checks run on every AI-written change before a human reviews it.", he: "טסטים, לינטרים ובדיקות טיפוסים רצים על כל שינוי שנכתב ע״י AI לפני שאדם סוקר אותו." },
  { name: "Git worktrees", kind: "workflow", en: "Agents run in isolated worktrees so tasks run in parallel without collisions.", he: "סוכנים רצים ב-worktrees מבודדים, כך שמשימות רצות במקביל בלי התנגשויות." },
];
