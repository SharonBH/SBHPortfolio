import type { MetadataRoute } from "next";
export const dynamic = "force-static";

/** AI crawlers are welcomed by name: being quoted by AI answer engines is a goal for this site. */
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, { userAgent: aiBots, allow: "/" }],
    sitemap: "https://sbh.co.il/sitemap.xml",
  };
}
