import { ProjectCard } from "@/components/project/ProjectCard";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-16">
      <section>
        <SectionTitle eyebrow="Frontend Portfolio" title={`${profile.name}입니다.`} description={profile.summary} />
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/projects">프로젝트 보기</LinkButton>
          <LinkButton href={profile.github} external>
            GitHub
          </LinkButton>
        </div>
      </section>

      <section className="border-l border-(--color-rule-rain) pl-4">
        <h2 className="mb-5 text-xl font-semibold">핵심 역량</h2>
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {profile.strengths.map((strength) => (
            <p className="border-t border-(--color-rule-storm) pt-3 text-sm leading-7 text-(--color-muted-ink)" key={strength}>
              {strength}
            </p>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">대표 프로젝트</h2>
            <p className="mt-2 text-sm text-(--color-muted-ink)">세부 내용은 초안이며, 실제 구현 기록으로 계속 보완할 예정입니다.</p>
          </div>
          <LinkButton href="/projects">전체 보기</LinkButton>
        </div>
        <div>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
