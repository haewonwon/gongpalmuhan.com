import { CalendarDays, Github, UserRound, UsersRound } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const items = [
    { icon: CalendarDays, label: "기간", value: project.period },
    { icon: UsersRound, label: "형태", value: project.team },
    { icon: UserRound, label: "역할", value: project.role },
  ];

  return (
    <dl className="grid gap-4 border-y border-(--color-rule-graphite) py-5 sm:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div className="border-l border-(--color-rule-storm) pl-3" key={item.label}>
            <dt className="flex items-center gap-1.5 text-xs font-medium text-(--color-muted-ink)">
              <Icon size={14} aria-hidden />
              {item.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-(--color-ink)">{item.value}</dd>
          </div>
        );
      })}
      <div className="border-l border-(--color-rule-rain) pl-3 sm:col-span-3">
        <dt className="flex items-center gap-1.5 text-xs font-medium text-(--color-muted-ink)">
          <Github size={14} aria-hidden />
          GitHub
        </dt>
        <dd className="mt-1 wrap-break-word text-sm">
          <a className="text-(--color-ink) underline decoration-(--color-storm-soft) underline-offset-4 hover:text-(--color-graphite) hover:decoration-(--color-graphite)" href={project.github} target="_blank" rel="noreferrer">
            {project.github}
          </a>
        </dd>
      </div>
    </dl>
  );
}
