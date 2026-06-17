import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
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
      <body>
        <div className="min-h-screen bg-(--color-paper) text-(--color-ink)">
          <Header />
          <Sidebar />
          <main className="mx-auto w-full max-w-(--content-max) px-5 pb-20 pt-24 md:px-10 lg:px-12 xl:ml-(--sidebar-width) xl:mr-auto xl:pt-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
