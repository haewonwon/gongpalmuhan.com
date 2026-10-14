import { SiteShell } from "@/components/layout/SiteShell";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  const href = `/${defaultLocale}`;

  return (
    <SiteShell locale={defaultLocale}>
      <meta content={`0; url=${href}`} httpEquiv="refresh" />
      <SectionTitle
        title="한국어 페이지"
        description="프로젝트와 소개는 한국어로 정리되어 있습니다."
      />
      <LinkButton href={href}>페이지 열기</LinkButton>
    </SiteShell>
  );
}
