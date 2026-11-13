import { notFound } from "next/navigation";
import ArticleView from "@/views/ArticleView";
import { articles } from "@/content/articles";
import { meta } from "@/lib/meta";

const list = articles.filter((a) => a.en);
export const dynamicParams = false;
export function generateStaticParams() {
  return list.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = list.find((x) => x.slug === slug)!;
  const b = a.en!;
  return meta("en", `/en/writing/${a.slug}`, b.title, b.excerpt);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = list.find((x) => x.slug === slug);
  if (!a) notFound();
  return <ArticleView a={a} lang="en" />;
}
