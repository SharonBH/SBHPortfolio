"use client";
import { useState } from "react";
import type { Dict } from "@/lib/i18n";

type T = Dict["contact"];
const empty = { name: "", company: "", email: "", phone: "", projectIdea: "" };

export default function ContactForm({ t }: { t: T }) {
  const [data, setData] = useState(empty);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err" | "fail">("idle");
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [k]: e.target.value });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Honeypot: real people never see or fill this field; bots usually do.
    if ((e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value) { setData(empty); return setState("ok"); }
    if (!data.name.trim() || !data.email.trim() || !data.phone.trim()) return setState("err");
    setState("sending");
    try {
      const [{ db }, { collection, addDoc, serverTimestamp }] = await Promise.all([import("@/lib/firebase"), import("firebase/firestore")]);
      // Same fields as the previous site's form: the Firestore rules for `contacts` were written for this shape.
      await addDoc(collection(db, "contacts"), { ...data, createdAt: serverTimestamp() });
    } catch (err) {
      console.error("Contact form: saving the lead failed", err);
      return setState("fail");
    }
    // The lead is saved. Email is only a notification, so a failure here must not ask the visitor to resubmit (that would duplicate the lead).
    const sent = { ...data };
    setData(empty);
    setState("ok");
    import("@emailjs/browser")
      .then((emailjs) => emailjs.send("service_7nnlj9d", "template_cl95ncj", {
        from_name: `${sent.name} - ${sent.company} ( ${sent.phone} - ${sent.email} )`,
        to_name: "SBH",
        message: sent.projectIdea || "No message entered",
      }, { publicKey: "rKj7eMi6MOmYV3Te9" }))
      .catch((err) => console.warn("Lead saved, email notification failed", err));
  };

  const field = "w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-[15px] outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-[var(--glow)]";
  return (
    <form onSubmit={submit} className="relative grid gap-4 sm:grid-cols-2">
      <input aria-hidden="true" tabIndex={-1} autoComplete="off" name="website" defaultValue="" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <input className={field} placeholder={t.name + " *"} value={data.name} onChange={set("name")} autoComplete="name" maxLength={100} />
      <input className={field} placeholder={t.company} value={data.company} onChange={set("company")} autoComplete="organization" maxLength={120} />
      <input className={field} type="email" placeholder={t.email + " *"} value={data.email} onChange={set("email")} autoComplete="email" dir="ltr" maxLength={200} />
      <input className={field} type="tel" placeholder={t.phone + " *"} value={data.phone} onChange={set("phone")} autoComplete="tel" dir="ltr" maxLength={30} />
      <textarea className={`${field} min-h-36 sm:col-span-2`} placeholder={t.idea} value={data.projectIdea} onChange={set("projectIdea")} maxLength={4000} />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button disabled={state === "sending"} className="rounded-full bg-accent-fill px-6 py-3 text-sm font-semibold text-on-accent transition hover:shadow-[0_0_0_6px_var(--glow)] disabled:opacity-60">
          {state === "sending" ? t.sending : t.submit}
        </button>
        <p role="status" className={`text-sm ${state === "ok" ? "text-accent" : "text-red-500"}`}>
          {state === "ok" ? t.ok : state === "err" ? t.err : state === "fail" ? t.fail : ""}
        </p>
      </div>
    </form>
  );
}
