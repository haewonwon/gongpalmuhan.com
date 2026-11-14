import { ProjectCard } from '@/components/project/ProjectCard';
import { LinkButton } from '@/components/ui/LinkButton';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import type { Locale } from '@/i18n/config';

type HomePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-12">
      <section>
        <SectionTitle
          title={`${profile.title} ${profile.name}입니다.`}
          description={profile.summary}
        >
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <LinkButton href={profile.resume} external>
              이력서
            </LinkButton>
            <LinkButton href={`/${locale}/projects`}>프로젝트</LinkButton>
            <LinkButton href={profile.github} external>
              GitHub
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`}>이메일</LinkButton>
          </div>
        </SectionTitle>
      </section>

      <section aria-labelledby="featured-projects">
        <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="featured-projects" className="pb-2 text-2xl font-semibold">
            대표 프로젝트
          </h2>
          <LinkButton href={`/${locale}/projects`} className="h-auto leading-6">
            전체 보기
          </LinkButton>
        </div>
        <div>
          {featuredProjects.map((project) => (
            <ProjectCard
              headingLevel="h3"
              key={project.slug}
              locale={locale}
              project={project}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="experience-summary">
        <h2 id="experience-summary" className="mb-4 text-2xl font-semibold">
          경험
        </h2>
        <ul className="space-y-2 text-sm leading-7 text-(--color-muted-ink)">
          {[...profile.experience.slice(0, 1), ...profile.activities.slice(0, 2)].map((item) => (
            <li className="flex flex-col sm:flex-row sm:gap-3" key={item.title}>
              <span className="text-(--color-faint-ink) sm:w-40 sm:shrink-0">{item.period}</span>
              <span className="text-(--color-ink)">
                {item.title}
                {item.detail ? (
                  <span className="text-(--color-muted-ink)"> · {item.detail}</span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
        <LinkButton className="mt-4" href={`/${locale}/profile`}>
          Profile에서 자세히 보기
        </LinkButton>
      </section>
    </div>
  );
}
