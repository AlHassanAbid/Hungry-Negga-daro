import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "@/components/site/Reveal";
import { person } from "@/lib/portfolio-data";
import { sendContactMessage } from "@/lib/contact.functions";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Work with Al Hassan Abid" },
      {
        name: "description",
        content:
          "Get in touch about web development, software engineering, data analysis or digital marketing work. Send a short message through the contact form.",
      },
      { property: "og:title", content: "Contact | Al Hassan Abid" },
      {
        property: "og:description",
        content: "A short, professional invitation to connect about development and data work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const send = useServerFn(sendContactMessage);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setPending(true);
    try {
      await send({
        data: {
          name: String(values.get("name") ?? ""),
          email: String(values.get("email") ?? ""),
          subject: String(values.get("subject") ?? ""),
          message: String(values.get("message") ?? ""),
        },
      });
      setSent(true);
      form.reset();
      toast.success("Message sent", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
    } catch {
      const payload = {
        subject: String(values.get("subject") ?? ""),
        body: `From: ${String(values.get("name") ?? "")} (${String(values.get("email") ?? "")})\n\n${String(values.get("message") ?? "")}`,
      };
      window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(payload.body)}`;
      toast.info("Opening your email app", {
        description: `Sending directly to ${person.email}.`,
      });
    } finally {

      setPending(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s build something worth measuring.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Open to conversations about development, data and design work. Share a few lines about
            what you need and I&apos;ll reply with next steps.
          </p>
          <div className="card-surface mt-8 inline-flex items-center gap-3 p-5">
            <MapPin className="size-5 text-primary" />
            <div>
              <p className="text-sm font-medium">{person.location}</p>
              <p className="text-xs text-muted-foreground">{person.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="card-surface p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" placeholder="What is this about?" />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="A few lines about your project or role…"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-4 focus:ring-ring/15"
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-70"
            >
              {pending ? "Sending…" : sent ? "Message sent" : "Send message"}
              {pending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              Messages are delivered straight to {person.email}. Prefer social? Links are in the
              footer.
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-4 focus:ring-ring/15"
      />
    </div>
  );
}
