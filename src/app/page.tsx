import { ProjectCard } from '@/components/project/ProjectCard';
import { LinkButton } from '@/components/ui/LinkButton';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle
          title="함께 이해하고 확장할 수 있는 구조를 만듭니다."
          description={profile.summary}
        />
        {/* <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/projects">프로젝트 보기</LinkButton>
          <LinkButton href={profile.github} external>
            GitHub
          </LinkButton>
        </div> */}
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">Strengths</h2>
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {profile.strengths.map((strength) => (
            <p
              className="border-t border-(--color-rule-storm) pt-3 text-sm leading-7 text-(--color-muted-ink)"
              key={strength}
            >
              {strength}
            </p>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold pb-2">Projects</h2>
          </div>
          <LinkButton href="/projects" className="h-auto leading-6">
            View all
          </LinkButton>
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
