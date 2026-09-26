"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@beyondhello.studio";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | sent | fallback
  const [error, setError] = useState("");

  function openMailFallback() {
    const subject = encodeURIComponent(`New enquiry from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("fallback");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (res.status === 400) {
        setStatus("idle");
        setError(data.error || "Please check the form and try again.");
        return;
      }

      // Not configured yet, or a server hiccup, so fall back to email.
      openMailFallback();
    } catch {
      openMailFallback();
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-line bg-card px-6 py-8 text-sm leading-relaxed text-paper/80">
        Thanks, that's sent. We reply within 1 business day.
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div className="rounded-lg border border-line bg-card px-6 py-8 text-sm leading-relaxed text-paper/80">
        Almost there, we've opened an email draft with your message ready to go. Hit send to
        finish, or reach us directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Your name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you building, and what do you need?"
          className="w-full rounded-lg border border-line bg-card px-4 py-3 text-paper"
        />
      </div>

      {error && (
        <p className="rounded-lg border border-pink/30 bg-pink/10 px-4 py-3 text-sm text-pink">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary self-start disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
