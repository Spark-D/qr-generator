import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QR Generator",
  description: "QR 코드 생성기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
