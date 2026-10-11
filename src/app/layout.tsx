import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piloh | Game Systems & Low-Level Developer",
  description:
    "Personal developer portfolio of Piloh. Low-level systems, custom game engines in C++, and performance-focused Luau architecture on Roblox.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable} ${firaCode.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-graphite-900 text-[#E2E8F0]">
        {children}
      </body>
    </html>
  );
}
