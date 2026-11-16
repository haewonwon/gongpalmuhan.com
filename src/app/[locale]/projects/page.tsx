import { ProjectCard } from '@/components/project/ProjectCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';
import type { Locale } from '@/i18n/config';

export const metadata = {
  title: 'Projects',
};

type ProjectsPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  return (
    <div>
      <SectionTitle
        title="Projects"
        description="팀 프로젝트와 인턴 업무에서 맡은 일과 개발 중 해결한 문제를 담았습니다."
      />
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} locale={locale} project={project} trimFirstBorder />
        ))}
      </div>
    </div>
  );
}
