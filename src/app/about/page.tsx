import { LinkButton } from "@/components/ui/LinkButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <SectionTitle
        eyebrow="About"
        title="소개"
        description="아직 완성된 경력보다, 문제를 이해하고 구현 기록을 남기며 개선해 나가는 과정을 보여주는 포트폴리오입니다."
      />

      <section className="max-w-3xl space-y-4 text-[length:var(--text-lede)] leading-9 text-[color:var(--color-ink)]">
        <p>
          React와 TypeScript 기반의 웹/모바일 프로젝트를 만들고 있습니다. 화면을 빠르게 만드는 것뿐 아니라 API 스펙, 상태 흐름,
          배포 환경까지 실제 사용 가능한 형태로 연결하는 일에 관심이 있습니다.
        </p>
        <p>
          팀 프로젝트에서는 맡은 범위를 명확히 하고, 코드와 문서가 함께 남도록 정리하는 편입니다. 이 사이트의 프로젝트 상세
          내용도 실제 회고와 구현 기록을 기준으로 계속 업데이트할 예정입니다.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">경험</h2>
        <div className="border-y border-[color:var(--color-rule-storm)]">
          <div className="border-b border-[color:var(--color-rule-rain)] py-5">
            <p className="font-medium">Frontend / Full-stack 프로젝트</p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted-ink)]">
              React, Next.js, React Native, Supabase, Express 등을 활용한 개인 및 팀 프로젝트를 진행했습니다.
            </p>
          </div>
          <div className="py-5">
            <p className="font-medium">문서화와 배포 흐름 정리</p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted-ink)]">
              구현 과정, 배포 설정, API 연동 방식을 재사용 가능한 문서로 남기는 작업을 중요하게 봅니다.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">연락처</h2>
        <div className="flex flex-wrap gap-3">
          {profile.links.map((link) => (
            <LinkButton key={link.href} href={link.href} external={link.href.startsWith("http")}>
              {link.label}
            </LinkButton>
          ))}
        </div>
      </section>
    </div>
  );
}
