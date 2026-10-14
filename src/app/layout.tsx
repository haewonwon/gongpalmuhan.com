import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "김해원 | Frontend Portfolio",
    template: "%s | 김해원",
  },
  description: "신입 프론트엔드 개발자 김해원의 포트폴리오입니다.",
  metadataBase: new URL("https://gongpalmuhan.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
