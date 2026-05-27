import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BaiduAnalytics from "@/components/BaiduAnalytics";
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
  title: "FitCalc 热量计算器｜BMI & TDEE 基础代谢计算",
  description:
    "免费在线热量计算器，输入个人数据快速计算 BMI、基础代谢率、每日热量消耗，获取减脂、维持、增肌的参考热量区间，附带基础健康建议。",
  keywords: [
    "TDEE计算",
    "基础代谢计算器",
    "BMI计算器",
    "减脂热量",
    "每日消耗热量",
    "健身热量计算",
  ],
  openGraph: {
    title: "FitCalc 热量计算器｜BMI & TDEE 基础代谢计算",
    description:
      "免费在线热量计算器，输入个人数据快速计算 BMI、基础代谢率、每日热量消耗，获取减脂、维持、增肌的参考热量区间，附带基础健康建议。",
    type: "website",
    locale: "zh_CN",
    siteName: "FitCalc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3TEEDZHJCB"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3TEEDZHJCB');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-w-0 overflow-x-hidden font-sans`}
      >
        <BaiduAnalytics />
        {children}
      </body>
    </html>
  );
}
