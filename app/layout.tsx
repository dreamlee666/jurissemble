import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:4321",
  ),
  title: "Jurissemble · 律构集 — 开放法律模块网络",
  description: "发布、调用、精确引用、派生、组合和共同维护有边界的法律能力模块。",
  openGraph: {
    title: "Jurissemble · 律构集 — 开放法律模块网络",
    description: "让有边界的法律工作能力能够被复用、组合和共同维护。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jurissemble 律构集：发布、调用、派生和共同维护法律能力",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurissemble · 律构集 — 开放法律模块网络",
    description: "让有边界的法律工作能力能够被复用、组合和共同维护。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
