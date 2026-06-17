import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-t border-[color:var(--color-rule-storm)] py-5 last:border-b">
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="min-w-0">
          <p className="text-[length:var(--text-caption)] text-[color:var(--color-muted-ink)]">
            {project.period} · {project.team} · {project.role}
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-normal text-[color:var(--color-ink)]">
            <a className="underline decoration-[color:var(--color-rule-rain)] underline-offset-4 transition-colors duration-[var(--dur-fast)] group-hover:text-[color:var(--color-graphite)]" href={`/projects/${project.slug}`}>
              {project.title}
            </a>
          </h2>
          <p className="mt-2 max-w-2xl leading-7 text-[color:var(--color-muted-ink)]">{project.description}</p>
        </div>
        <a
          aria-label={`${project.title} 상세 보기`}
          className="inline-flex size-9 shrink-0 items-center justify-center border border-[color:var(--color-rule-rain)] text-[color:var(--color-ink)] transition-colors duration-[var(--dur-fast)] hover:bg-[color:var(--color-paper-mark)] hover:text-[color:var(--color-graphite)]"
          href={`/projects/${project.slug}`}
        >
          <ArrowRight size={17} aria-hidden />
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
        {project.stack.slice(0, 6).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </article>
  );
}
