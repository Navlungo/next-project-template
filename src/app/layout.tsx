import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navlungo Template Demo",
  description: "A showcase of available components and their styling",
  icons: {
    icon: "/images/navlungo-branding/nav-mark-blue.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/navlungo-branding/nav-mark-blue.ico" />
      </head>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
