import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { MDXComponents } from "@/components/mdx/MDXComponents";

type MdxContentProps = {
  source: string;
};

/** 프로젝트 상세와 개발용 마크다운 점검 페이지가 같은 렌더링 설정을 사용합니다. */
export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose-content">
      <MDXRemote
        components={MDXComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        source={source}
      />
    </div>
  );
}
