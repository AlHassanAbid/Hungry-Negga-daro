import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SkillIcon } from "@/components/site/SkillIcon";
import { skillGroups } from "@/lib/portfolio-data";
import { seoMeta, seoLinks } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: seoMeta({
      title: "Technical Skills | Al Hassan Abid — Languages, Frameworks & Tools",
      description:
        "Technical skills of Al Hassan Abid: HTML/CSS, JavaScript, PHP, Java, Python, React.js, Node.js, Next.js, Firebase, MongoDB, Mongoose, Git and GitHub with proficiency levels.",
      path: "/skills",
    }),
    links: seoLinks("/skills"),
  }),
  component: Skills,
});

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Technical Skills
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          The stack behind the work.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Languages, frameworks, databases and platforms — with an honest read on how deep I go in
          each.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16">
        {skillGroups.map((group, gi) => (
          <section key={group.category}>
            <Reveal delay={gi * 60}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-2xl font-semibold">{group.category}</h2>
                <p className="text-sm text-muted-foreground">{group.context}</p>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {group.skills.map((skill, i) => (
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
                        style={{
                          width: `${skill.pct}%`,
                          backgroundImage: "var(--gradient-brand)",
                        }}
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
