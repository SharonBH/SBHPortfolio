import en, { type Dict, type Lang } from "@/content/en";
import he from "@/content/he";

export type { Dict, Lang };
export const getDict = (lang: Lang): Dict => (lang === "en" ? en : he);

/** Build a localized href. Hebrew is served at the root, English under /en. */
export const href = (lang: Lang, path: string) => {
  if (lang === "he") return path;
  return path === "/" ? "/en" : `/en${path}`;
};

/** Counterpart URL in the other language. */
export const altHref = (lang: Lang, path: string) => {
  if (lang === "en") return path.replace(/^\/en(?=\/|$)/, "") || "/";
  return path === "/" ? "/en" : `/en${path}`;
};

export const SITE = {
  url: "https://sbh.co.il",
  email: "sharon.benhaim@gmail.com",
  linkedin: "https://www.linkedin.com/in/sharon-ben-haim/",
  github: "https://github.com/SharonBH",
};
