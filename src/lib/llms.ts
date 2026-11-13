/**
 * llms.txt (https://llmstxt.org): a Markdown summary of the site for LLM crawlers
 * and AI answer engines. Generated from the same content as the pages.
 */
import { articles, type Article, type Block } from "@/content/articles";
import { getDict, SITE } from "./i18n";

const en = getDict("en");
const enUrl = (a: Article) => `${SITE.url}/en/writing/${a.slug}`;
const heUrl = (a: Article) => SITE.url + a.hePath;

function header() {
  const facts = en.about.facts.map(([k, v]) => `- ${k}: ${v}`).join("\n");
  return `# Sharon Ben Haim (SBH#DEV)

> ${en.meta.description}

Sharon Ben Haim is a four-time CTO with 20+ years of experience building and shipping production software, based in Rehovot, Israel. Sharon works through SBH#DEV as a fractional CTO and hands-on AI engineer for startups and businesses, in Hebrew and English. The core view: in the agentic era AI writes the code, and experience decides what ships.

${en.about.p.join("\n\n")}

## Quick facts

${facts}
- Current role: CTO at Ottri (embedded finance)
- Contact: ${SITE.email}, WhatsApp +972-54-255-7990, ${SITE.url}/en/discuss-project
- LinkedIn: ${SITE.linkedin}
- GitHub: ${SITE.github}

## Services

${en.services.offers.map((o) => `- **${o.name}** (${o.dur}): ${o.for} Includes: ${o.gets.join("; ")}.`).join("\n")}
${en.services.also.map((a) => `- **${a.t}**: ${a.d}`).join("\n")}

## FAQ

${en.services.faq.map((f) => `- **${f.q}** ${f.a}`).join("\n")}
`;
}

function index() {
  const line = (a: Article) => {
    const b = a.en ?? a.he!;
    const url = a.en ? enUrl(a) : heUrl(a);
    const lang = a.en ? "" : " (Hebrew)";
    return `- [${b.title}](${url})${lang}: ${b.tldr ?? b.excerpt}`;
  };
  return `## Articles (CTO perspective)

${articles.filter((a) => a.kind === "article").map(line).join("\n")}

## Guides (for business owners)

${articles.filter((a) => a.kind === "guide").map(line).join("\n")}

## Pages

- [Home](${SITE.url}/en): AI engineering and technical leadership
- [Services](${SITE.url}/en/services): engagement types and FAQ
- [AI Lab](${SITE.url}/en/ai): how Sharon uses AI day to day, principles and toolbox
- [About](${SITE.url}/en/about): background and experience
- [Contact](${SITE.url}/en/discuss-project): book a free intro call
- Hebrew version of the site: ${SITE.url}/
- [Full text of all articles](${SITE.url}/llms-full.txt)
`;
}

const md = (b: Block): string => {
  switch (b.t) {
    case "p": return b.v;
    case "h2": return `### ${b.v}`;
    case "h3": return `#### ${b.v}`;
    case "ul": return b.v.map((x) => `- ${x}`).join("\n");
    case "ol": return b.v.map((x, i) => `${i + 1}. ${x}`).join("\n");
    case "table": return [b.head, b.head.map(() => "---"), ...b.rows].map((r) => `| ${r.join(" | ")} |`).join("\n");
  }
};

export const llmsTxt = () => `${header()}\n${index()}`;

export const llmsFullTxt = () => {
  const body = articles.map((a) => {
    const b = a.en ?? a.he!;
    const url = a.en ? enUrl(a) : heUrl(a);
    return `## ${b.title}\n\nURL: ${url}\nPublished: ${a.date}\nAuthor: Sharon Ben Haim\n\n${b.tldr ? `**In short:** ${b.tldr}\n\n` : ""}${b.blocks.map(md).join("\n\n")}`;
  });
  return `${header()}\n# Articles and guides\n\n${body.join("\n\n---\n\n")}\n`;
};
