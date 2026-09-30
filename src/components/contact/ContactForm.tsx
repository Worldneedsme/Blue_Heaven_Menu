"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getEmailLink, hotel } from "@/data/hotel";

type Labels = {
  name: string;
  email: string;
  phone: string;
  message: string;
  sendMessage: string;
  success: string;
  error: string;
};

export function ContactForm({ labels }: { labels: Labels }) {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    // Lightweight first version: open mailto with prefilled content.
    // Later: replace with API route / Resend / Formspree.
    const subject = encodeURIComponent(`Blue Heaven enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );
    const mail = hotel.email.includes("[")
      ? `mailto:?subject=${subject}&body=${body}`
      : `${getEmailLink()}?subject=${subject}&body=${body}`;

    window.location.href = mail;
    setStatus("ok");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          {labels.name}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border border-ink/15 bg-white px-3 py-3 text-ink outline-none transition focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          {labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-ink/15 bg-white px-3 py-3 text-ink outline-none transition focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          {labels.phone}
        </label>
        <input
          id="phone"
          name="phone"
          className="w-full border border-ink/15 bg-white px-3 py-3 text-ink outline-none transition focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-ink/15 bg-white px-3 py-3 text-ink outline-none transition focus:border-primary"
        />
      </div>
      <Button type="submit" size="lg">
        {labels.sendMessage}
      </Button>
      {status === "ok" ? (
        <p className="text-sm text-primary" role="status">
          {labels.success}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          {labels.error}
        </p>
      ) : null}
    </form>
  );
}
