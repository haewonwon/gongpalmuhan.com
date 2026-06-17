# gongpalmuhan.com

신입 프론트엔드 개발자 김해원의 포트폴리오 사이트입니다. Notion 문서처럼 읽기 쉬운 UI와 MDX 기반 프로젝트 상세 페이지를 목표로 합니다.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX
- lucide-react
- pnpm
- Cloudflare Pages static export

## Local Development

```bash
pnpm install
pnpm dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## Scripts

```bash
pnpm lint
pnpm build
```

`pnpm build`는 `next.config.ts`의 `output: "export"` 설정에 따라 정적 파일을 `out/` 디렉터리에 생성합니다.

## Design Workflow

이 repo에는 Hallmark와 Frontend Design 스킬을 프로젝트 스코프로 설치해 두었습니다.

- Hallmark: `.codex/skills/hallmark`
- Frontend Design: `.codex/skills/frontend-design`
- 디자인 기준: `DESIGN.md`
- 색상/타입 토큰: `tokens.css`
- Hallmark pre-flight 기록: `.hallmark/preflight.json`

새 UI를 추가할 때는 `DESIGN.md`와 `tokens.css`를 먼저 확인하고, 컴포넌트에서 직접 hex color나 font-family를 선언하지 않습니다. 현재 팔레트는 Stormy morning 기반이며, 검정 텍스트를 유지하되 storm, mist, rain, graphite를 역할별로 섞어 사용합니다.

## Project Structure

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    about/
      page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
  components/
    layout/
    project/
    mdx/
    ui/
  content/
    projects/
  data/
  lib/
```

프로젝트 상세 페이지는 `src/content/projects/*.mdx`에서 관리합니다. 공통 프로젝트 메타데이터는 `src/data/projects.ts`에 두고, 상세 본문은 MDX에서 작성합니다.

## Cloudflare Pages Deployment

Cloudflare Pages 프로젝트 설정:

- Framework preset: `Next.js` 또는 직접 설정
- Build command: `pnpm build`
- Output directory: `out`
- Node.js version: Cloudflare Pages에서 지원하는 최신 LTS 권장

정적 export를 위해 `next.config.ts`에는 다음 설정이 포함되어 있습니다.

```ts
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

## Domain Migration

`gongpalmuhan.com`을 Vercel에서 Cloudflare Pages로 옮길 때는 먼저 Pages 배포가 정상인지 확인한 뒤 도메인을 이전합니다.

1. Cloudflare Pages에서 먼저 `*.pages.dev` 주소로 정상 배포 확인
2. Cloudflare Pages Custom domains에 `gongpalmuhan.com` 추가
3. 필요하면 `www.gongpalmuhan.com`도 추가
4. Vercel project의 Domains에서 기존 `gongpalmuhan.com` 제거
5. DNS에서 Vercel용 레코드를 제거하고 Cloudflare Pages용 레코드만 남김
6. 최종 메인은 `gongpalmuhan.com`, `www`는 apex로 redirect 권장

## Previous Site Archive

기존 Astro/Vercel 기반 사이트는 `archive/previous-gongpalmuhan-site` 브랜치에 보존합니다. 새 포트폴리오 작업은 `main`에서 진행합니다.
