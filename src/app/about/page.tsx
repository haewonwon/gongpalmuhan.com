import { LinkButton } from '@/components/ui/LinkButton';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const metadata = {
  title: 'About',
};

const certificates = [
  '부트캠프 스테이지어스 프론트엔드 과정 수료, 2023.05 - 2024.02',
  '데이터분석준전문가(ADsP) 취득, 2025.02',
  'SQL 개발자(SQLD) 취득, 2026.03',
];

function AboutSection({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="pt-2">
      {title && <h2 className="mb-5 text-xl font-semibold text-(--color-ink)">{title}</h2>}
      {children}
    </section>
  );
}

function ExternalTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="wrap-break-word underline decoration-(--color-storm-soft) underline-offset-4 transition-colors duration-(--dur-fast) hover:text-(--color-graphite) hover:decoration-(--color-graphite)"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        title="About"
        description={`설계와 문서화를 바탕으로 함께 이해하고 확장할 수 있는 구조를 만들고,\n사용자의 경험이 조금 더 나아지는 방향을 고민하는 프론트엔드 개발자 김해원입니다.`}
      />

      <AboutSection>
        <div className="max-w-3xl space-y-4 text-(length:--text-lede) leading-9 text-(--color-muted-ink)">
          <p>
            React와 TypeScript 기반의 웹/모바일 프로젝트를 만들고 있습니다. 화면을 빠르게 구현하는
            것뿐 아니라 API 스펙, 상태 흐름, 배포 환경까지 실제 서비스로 이어지는 개발 흐름에 관심이
            있습니다.
          </p>
          <p>
            팀 프로젝트에서는 결정 사항과 컨벤션을 문서로 남기고, 함께 개발하는 사람이 같은 방향을
            이해할 수 있도록 정리하는 편입니다.
          </p>
          <p>
            최근에는 AI 도구를 단순 코드 생성이 아니라 설계 검토, 구현 방향 정렬, 코드 리뷰 보조
            도구로 활용하며 개발 생산성과 품질을 함께 높이는 방법을 실험하고 있습니다.
          </p>
        </div>
      </AboutSection>

      <AboutSection title="Experience">
        <div className="max-w-3xl border-y border-(--color-rule-graphite) py-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold text-(--color-ink)">주식회사 프랜더 | 프론트엔드 인턴</h3>
            <p className="text-sm text-(--color-muted-ink)">2025.09 - 2025.12</p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-(--color-muted-ink)">
            <li>기존 React 기반 서비스의 리팩토링 및 유지보수를 담당했습니다.</li>
            <li>
              신규 프로젝트의 프론트엔드 개발에 참여하며 초기 구조 설계와 주요 UI 구현을
              진행했습니다.
            </li>
            <li>
              다국어 지원 프로젝트에서 언어 리소스 구조를 설계하고 화면별 국제화 처리를
              적용했습니다.
            </li>
            <li>프론트엔드 개발과 함께 API 명세 정의 및 백엔드 구조 설계 논의에 참여했습니다.</li>
          </ul>
        </div>
      </AboutSection>

      <AboutSection title="Education">
        <div className="max-w-3xl border-y border-(--color-rule-graphite) py-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold text-(--color-ink)">인하대학교</h3>
            <p className="text-sm text-(--color-muted-ink)">2021.03 - 재학 중</p>
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-(--color-muted-ink)">
            <li>경영학(주전공) / 소프트웨어융합공학(연계전공)</li>
          </ul>
        </div>
      </AboutSection>

      <AboutSection title="Certificates">
        <ul className="max-w-3xl border-y border-(--color-rule-graphite) text-sm leading-7 text-(--color-muted-ink)">
          {certificates.map((certificate) => (
            <li
              className="border-t border-(--color-rule-storm) py-3 first:border-t-0"
              key={certificate}
            >
              {certificate}
            </li>
          ))}
        </ul>
      </AboutSection>

      <AboutSection title="Archiving">
        <div>
          <div className="border-y border-(--color-rule-graphite) py-5">
            <h3 className="font-semibold text-(--color-ink)">Velog</h3>
            <p className="mt-2 text-sm leading-7 text-(--color-muted-ink)">공부 기록 및 회고</p>
            <p className="mt-3 text-sm">
              <ExternalTextLink href="https://velog.io/@haewonwon/posts">
                https://velog.io/@haewonwon/posts
              </ExternalTextLink>
            </p>
          </div>
        </div>
      </AboutSection>

      <AboutSection title="Contact">
        <div className="flex flex-wrap gap-4">
          <LinkButton href="https://github.com/haewonwon" external>
            GitHub
          </LinkButton>
          <LinkButton href="mailto:khcw1029@daum.net">Email</LinkButton>
        </div>
      </AboutSection>
    </div>
  );
}
