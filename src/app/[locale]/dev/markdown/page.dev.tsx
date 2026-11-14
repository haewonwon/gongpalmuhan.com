import fs from "node:fs/promises";
import path from "node:path";
import { MdxContent } from "@/components/mdx/MdxContent";
import { SectionTitle } from "@/components/ui/SectionTitle";

/**
 * 개발 전용 마크다운 렌더링 점검 페이지 (/ko/dev/markdown).
 * next.config.ts의 pageExtensions 설정으로 `pnpm dev`에서만 열리고 빌드 결과물에는 포함되지 않습니다.
 */
export default async function MarkdownTestPage() {
  const source = await fs.readFile(
    path.join(process.cwd(), "src/content/dev/markdown-test.mdx"),
    "utf8",
  );

  return (
    <article>
      <SectionTitle
        title="Markdown 점검"
        description="프로젝트 상세와 같은 MdxContent로 렌더링합니다. 개발 서버에서만 열립니다."
      />
      <MdxContent source={source} />
    </article>
  );
}
