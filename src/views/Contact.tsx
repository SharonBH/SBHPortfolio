import { getDict, SITE, waLink, type Lang } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";

export default function Contact({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <>
      <PageHero eyebrow={d.contact.eyebrow} title={d.contact.title} sub={d.contact.sub} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="reveal hairline rounded-2xl p-6 sm:p-8"><ContactForm t={d.contact} /></div>
        <aside className="reveal space-y-4">
          <a href={waLink(lang)} target="_blank" rel="noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-6 transition hover:border-[#25D366] hover:bg-[#25D366]/15">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white"><Icon name="whatsapp" className="size-6" /></span>
            <span>
              <span className="block font-semibold group-hover:text-[#25D366]">{d.contact.whatsappCta}</span>
              <span dir="ltr" className="mt-0.5 block font-mono text-sm text-fg-2 rtl:text-end">{SITE.phone}</span>
              <span className="mt-2 block text-sm text-muted">{d.contact.whatsappNote}</span>
            </span>
          </a>
          <div className="hairline rounded-2xl p-6">
            <p className="text-sm text-muted">{d.contact.direct}</p>
            <a href={`mailto:${SITE.email}`} className="mt-2 flex items-center gap-2 font-mono text-sm hover:text-accent"><Icon name="mail" className="size-4" />{SITE.email}</a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 font-mono text-sm hover:text-accent"><Icon name="linkedin" className="size-4" />linkedin/sharon-ben-haim</a>
          </div>
          <div className="hairline rounded-2xl p-6 text-sm text-muted">{d.footer.office}</div>
        </aside>
      </section>
    </>
  );
}
