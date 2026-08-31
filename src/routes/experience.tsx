import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { experience } from "@/lib/portfolio-data";
import { seoMeta, seoLinks } from "@/lib/seo";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: seoMeta({
      title: "Experience | Al Hassan Abid — MADYS & LSKIT",
      description:
        "Professional timeline of Al Hassan Abid: Founder & Software Engineer at MADYS and Data Entry Specialist at LSKIT, with measurable outcomes in forecasting, dashboards and data accuracy.",
      path: "/experience",
    }),
    links: seoLinks("/experience"),
  }),
  component: Experience,
});

function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Experience
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Roles measured by what changed.
        </h1>
      </Reveal>

      <ol className="relative mt-14 border-l border-border pl-8 sm:pl-10">
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 120} as="li" className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] top-2 grid size-4 place-items-center rounded-full border-2 border-primary bg-background sm:-left-[49px]">
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
            <div className="card-surface p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl font-semibold">{role.company}</h2>
                <span className="rounded-full bg-accent/70 px-3 py-1 text-xs font-medium text-accent-foreground">
                  {role.period}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-primary">{role.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
              <ul className="mt-5 space-y-3">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
