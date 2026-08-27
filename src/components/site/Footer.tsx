import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import { person, socials } from "@/lib/portfolio-data";

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  WhatsApp: MessageCircle,
} as const;


export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <p className="font-display text-base font-semibold">{person.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {person.role} · {person.location}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A developer who understands technology, data, creativity and business.
          </p>
        </div>

        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Get in touch
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                {person.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${person.phone}`}
                className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-primary" />
                {person.phone}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.name}
                  title={social.name}
                  className="group inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-lift"
                >
                  <Icon className="size-4 transition-transform group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>


        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Explore
          </p>
          <nav aria-label="Footer" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/experience", label: "Experience" },
              { to: "/projects", label: "Projects" },
              { to: "/skills", label: "Skills" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
