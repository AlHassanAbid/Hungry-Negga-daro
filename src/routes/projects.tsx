import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Fire Fighter Robot Car & Solar Sync" },
      {
        name: "description",
        content:
          "Detailed case studies: an Arduino-based Fire Fighter Robot Car and Solar Sync, an SQL analysis of solar performance and grid power sharing.",
      },
      { property: "og:title", content: "Projects | Al Hassan Abid" },
      {
        property: "og:description",
        content:
          "Case studies covering overview, technologies, problem, solution and outcome for each project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Projects
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Case studies from hardware to data.
        </h1>
      </Reveal>

      <div className="mt-14 space-y-10">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 100}>
            <article className="card-surface overflow-hidden">
              <div className="relative border-b border-border bg-surface/60 px-7 py-8 sm:px-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-grid opacity-60"
                />
                <div className="relative flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-3xl font-semibold">{project.name}</h2>
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>
                <p className="relative mt-3 max-w-2xl text-sm text-muted-foreground">
                  {project.tagline}
                </p>
              </div>

              <div className="grid gap-8 px-7 py-8 sm:px-10 lg:grid-cols-[1.4fr_1fr]">
                <div className="space-y-7">
                  <Block title="Overview" body={project.overview} />
                  <Block title="Problem" body={project.problem} />
                  <Block title="Solution" body={project.solution} />
                  <Block title="Outcome" body={project.outcome} highlight />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Technologies
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg bg-accent/70 px-3 py-1.5 text-xs font-medium text-accent-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Block({
  title,
  body,
  highlight = false,
}: {
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <section className={highlight ? "rounded-xl border border-border bg-surface/70 p-5" : ""}>
      <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </section>
  );
}
