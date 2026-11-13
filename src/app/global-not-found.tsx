import "./globals.css";
import Link from "next/link";
import { themeScript } from "@/components/ThemeToggle";
import he from "@/content/he";
import en from "@/content/en";

export const metadata = { title: "404 | SBH#DEV" };

export default function GlobalNotFound() {
  return (
    <html lang="he" dir="rtl" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="grid min-h-screen place-items-center px-5">
        <div className="bg-grid fixed inset-0 -z-10" />
        <div dir="ltr" className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-code font-mono text-sm text-code-fg">
          <div className="border-b border-white/10 px-4 py-3 text-[11px] text-zinc-500">agent-trace</div>
          <div className="space-y-1 p-5 leading-7">
            <div><span className="text-zinc-500">$</span> sbh resolve --route=$PATH</div>
            <div className="text-zinc-400">▸ search  sitemap, redirects, cache</div>
            <div className="text-amber-400">✗ 404  {en.notFound.title.replace("404: ", "")}</div>
            <div className="pt-3 text-zinc-300">{en.notFound.sub}</div>
            <div dir="rtl" className="text-zinc-300">{he.notFound.sub}</div>
            <div className="flex gap-4 pt-4">
              <Link href="/" className="rounded-full bg-[#c6f135] px-4 py-2 font-semibold text-black">{he.notFound.back}</Link>
              <Link href="/en" className="rounded-full border border-white/20 px-4 py-2">{en.notFound.back}</Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
