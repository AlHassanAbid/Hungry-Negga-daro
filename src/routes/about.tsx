import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BadgeCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { person, education, certifications, pillars } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Al Hassan Abid — Developer & Engineer" },
      {
        name: "description",
        content:
          "The professional story behind the portfolio: diploma engineering in computer science, certifications, and strengths across code, data, design and marketing.",
      },
      { property: "og:title", content: "About | Al Hassan Abid" },
      {
        property: "og:description",
        content:
          "Education, certifications and professional strengths across development, data analysis, UI/UX and digital marketing.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
          About
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          A developer who understands technology, data, creativity and business.
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal delay={80} className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>{person.intro}</p>
          <p>
            Work so far has spanned building predictive models and dashboards, writing and
            optimising SQL against real usage data, engineering hardware-driven prototypes, and
            producing UI/UX and visual assets used in deployment. Alongside that sits digital and
            social media marketing — which keeps the technical work anchored to outcomes people
            actually feel.
          </p>
          <p>
            The approach is consistent: understand the problem, measure it, build something
            maintainable, then check that the numbers moved.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="card-surface p-7">
            <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary">
              <GraduationCap className="size-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-semibold">Education</h2>
            <p className="mt-3 text-sm font-medium">{education.program}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.institute}, {education.location}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{education.period}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/70 px-3 py-1.5 text-xs font-medium text-accent-foreground">
              <Sparkles className="size-3.5" /> {education.note}
            </p>
            <h3 className="mt-6 font-display text-sm font-semibold">Relevant coursework</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {education.coursework.map((course) => (
                <li key={course} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <section className="mt-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Strengths</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.key} delay={i * 80}>
              <article className="card-surface h-full p-6">
                <p className="font-display text-xs font-bold tracking-[0.18em] text-primary">
                  {pillar.key}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Certifications</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert} delay={i * 80}>
              <article className="card-surface flex h-full items-center gap-3 p-6">
                <BadgeCheck className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{cert}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
