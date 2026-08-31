import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Palette, Megaphone, GraduationCap, Award, Building2 } from "lucide-react";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { ToolOrbit } from "@/components/site/ToolOrbit";
import { SkillIcon } from "@/components/site/SkillIcon";
import { seoMeta, seoLinks } from "@/lib/seo";

import {
  person,
  pillars,
  credibility,
  projects,
  skillGroups,
  experience,
  achievements,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seoMeta({
      title: "Al Hassan Abid — Web Developer & Software Engineer",
      description:
        "Portfolio of Al Hassan Abid: web development, software engineering, data analysis, UI/UX design and digital marketing with measurable outcomes. Based in Khulna, Bangladesh.",
      path: "/",
    }),
    links: seoLinks("/"),
  }),
  component: Index,
});

const pillarIcons = { CODE: Code2, DATA: Database, CREATIVE: Palette, MARKETING: Megaphone };
const credibilityIcons = [GraduationCap, Award, Building2];
const credibilityNotes = [
  "Mangrove Institute of Science & Technology · 2022–2027",
  "Consistent academic standing across the diploma programme",
  "Leading engineering, data and design work end to end",
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -top-40 -left-24 size-[34rem] glow opacity-60"
        />
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute -right-24 top-24 size-[26rem] rounded-full opacity-40"
          style={{ background: "radial-gradient(closest-side, var(--brand-soft), transparent)" }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary" />
                {person.role} · {person.location}
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.06] sm:text-6xl">
                Building digital experiences with{" "}
                <span className="text-gradient">code, data &amp; creativity</span>.
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {person.intro}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  View My Work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="animate-float pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-70"
              style={{ background: "var(--gradient-soft)" }}
            />
            <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-lift">
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card/90 to-transparent"
              />
              <img
                src="/abid-portrait.png"
                alt="Portrait of Al Hassan Abid"
                width={1024}
                height={1536}
                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/80 px-4 py-3 backdrop-blur-md">
                <p className="font-display text-sm font-semibold">{person.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Founder &amp; Software Engineer · MADYS
                </p>
              </div>
            </div>
            <ToolOrbit />
          </Reveal>
        </div>

      </section>

      {/* Education & credibility */}
      <section className="border-y border-border bg-surface/70">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <Reveal>
            <SectionLabel>Education &amp; credibility</SectionLabel>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {credibility.map((item, i) => {
              const Icon = credibilityIcons[i] ?? GraduationCap;
              return (
                <Reveal key={item} delay={i * 90}>
                  <article className="card-surface flex h-full items-start gap-4 p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold leading-snug text-foreground">
                        {item}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {credibilityNotes[i]}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      {/* Code + Data + Creative */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Identity</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Four dimensions, one way of working.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.key as keyof typeof pillarIcons];
            return (
              <Reveal key={pillar.key} delay={i * 90}>
                <article className="card-surface group h-full p-6">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-5 font-display text-xs font-bold tracking-[0.18em] text-primary">
                    {pillar.key}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <SectionLabel>Featured work</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Projects built to solve something real.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 110}>
                <article className="card-surface group flex h-full flex-col p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
                    <span className="shrink-0 text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.tagline}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/projects"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Read the case study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programming languages preview */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Programming Languages</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            The languages I build with every day.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {(skillGroups[0]?.skills ?? []).map((skill, i) => (
            <Reveal key={skill.name} delay={i * 70}>
              <article className="card-surface group flex h-full flex-col items-center px-5 py-7 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-surface/70 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  <SkillIcon name={skill.icon} className="size-8" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{skill.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {skill.level}
                </p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${skill.pct}%`, backgroundImage: "var(--gradient-brand)" }}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Link
            to="/skills"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            See frameworks, databases & tools <ArrowRight className="size-4" />
          </Link>
        </Reveal>

      </section>

      {/* Experience preview */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Where the work happened.
            </h2>
          </Reveal>
          <ol className="relative mt-12 border-l border-border pl-8">
            {experience.map((role, i) => (
              <Reveal key={role.company} delay={i * 120} as="li" className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1.5 grid size-4 place-items-center rounded-full border-2 border-primary bg-background">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                <p className="text-xs font-medium tracking-wide text-primary">{role.period}</p>
                <h3 className="mt-1.5 font-display text-xl font-semibold">
                  {role.title} · {role.company}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {role.points[0]}
                </p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={140}>
            <Link
              to="/experience"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              View full timeline <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Achievements */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Achievements</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Verified results, not adjectives.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 110}>
              <article className="card-surface h-full p-8">
                <p className="font-display text-5xl font-semibold text-gradient">
                  <CountUp value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 font-display text-sm font-semibold tracking-wide text-foreground">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-7 py-14 text-center shadow-soft sm:px-16">
            <div
              aria-hidden
              className="animate-drift pointer-events-none absolute -bottom-32 left-1/2 size-[30rem] -translate-x-1/2 glow opacity-50"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
                Have a project, a role, or an idea worth building?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                I&apos;m open to conversations about development, data and design work. Send a short
                note and I&apos;ll get back to you.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Contact Me <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary/50" />
      {children}
    </span>
  );
}
