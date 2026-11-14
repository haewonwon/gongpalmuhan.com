import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // `*.dev.tsx` 페이지(예: /ko/dev/markdown 마크다운 점검)는 `pnpm dev`에서만 라우트로 인식되고
  // 프로덕션 빌드에서는 제외됩니다.
  pageExtensions: isDev ? ["dev.tsx", "tsx", "ts", "jsx", "js"] : ["tsx", "ts", "jsx", "js"],
};

export default nextConfig;
