import { LinkButton } from '@/components/ui/LinkButton';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { profile, type TimelineItem } from '@/data/profile';
import { getProject } from '@/data/projects';
import type { Locale } from '@/i18n/config';

export const metadata = {
  title: 'Profile',
};

type ProfilePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

function ProfileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-2">
      <h2 className="mb-5 text-xl font-semibold text-(--color-ink)">{title}</h2>
      {children}
    </section>
  );
}

function Timeline({ items, locale }: { items: TimelineItem[]; locale: Locale }) {
  return (
    <ul className="max-w-3xl border-y border-(--color-rule-graphite)">
      {items.map((item) => {
        const relatedProjects = (item.projectSlugs ?? [])
          .map((slug) => getProject(slug))
          .filter((project) => project !== undefined);

        return (
          <li
            className="border-t border-(--color-rule-storm) py-5 first:border-t-0"
            key={`${item.title}-${item.period}`}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-semibold text-(--color-ink)">
                {item.title}
                {item.detail ? (
                  <span className="font-normal text-(--color-muted-ink)"> / {item.detail}</span>
                ) : null}
              </h3>
              <p className="shrink-0 text-sm text-(--color-muted-ink)">{item.period}</p>
            </div>
            {item.bullets?.length ? (
              <div className="mt-3 space-y-2 text-sm leading-7 text-(--color-muted-ink)">
                {item.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            ) : null}
            {relatedProjects.length ? (
              <p className="mt-3 text-sm text-(--color-muted-ink)">
                관련 프로젝트:{' '}
                {relatedProjects.map((project, index) => (
                  <span key={project.slug}>
                    {index > 0 ? ', ' : null}
                    <a
                      className="text-(--color-ink) underline decoration-(--color-rule-storm-strong) underline-offset-4 transition-colors duration-(--dur-fast) hover:text-(--color-graphite) hover:decoration-(--color-graphite)"
                      href={`/${locale}/projects/${project.slug}`}
                    >
                      {project.title}
                    </a>
                  </span>
                ))}
              </p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { locale } = await params;

  return (
    <div className="space-y-12">
      <SectionTitle
        title="Profile"
        description="경력과 활동, 교육 이력입니다."
      >
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <LinkButton href={profile.resume} external>
            이력서 PDF
          </LinkButton>
          <LinkButton href={profile.github} external>
            GitHub
          </LinkButton>
          <LinkButton href={`mailto:${profile.email}`}>{profile.email}</LinkButton>
        </div>
      </SectionTitle>

      <ProfileSection title="경력">
        <Timeline items={profile.experience} locale={locale} />
      </ProfileSection>

      <ProfileSection title="활동">
        <Timeline items={profile.activities} locale={locale} />
      </ProfileSection>

      <ProfileSection title="교육">
        <Timeline items={profile.education} locale={locale} />
      </ProfileSection>

      <ProfileSection title="자격">
        <Timeline items={profile.certificates} locale={locale} />
      </ProfileSection>

      <ProfileSection title="기록">
        <ul className="max-w-3xl border-y border-(--color-rule-graphite)">
          {profile.archiving.map((item) => (
            <li className="py-5" key={item.href}>
              <h3 className="font-semibold text-(--color-ink)">{item.label}</h3>
              <p className="mt-2 text-sm leading-7 text-(--color-muted-ink)">{item.description}</p>
              <p className="mt-3 text-sm">
                <a
                  className="wrap-break-word underline decoration-(--color-storm-soft) underline-offset-4 transition-colors duration-(--dur-fast) hover:text-(--color-graphite) hover:decoration-(--color-graphite)"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.href}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </ProfileSection>
    </div>
  );
}
