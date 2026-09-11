import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "SkillHive — Learn · Grow · Belong | Career Acceleration & Skill Diagnostics",
  description:
    "SkillHive bridges university graduation and elite industry roles through verified skill gap diagnostics, real-time corporate benchmarking, and AI-curated placement pathways.",
  icons: {
    icon: "/images/skillhive-logo.png",
    apple: "/images/skillhive-logo.png",
  },
  openGraph: {
    title: "SkillHive — Learn · Grow · Belong",
    description: "The gateway between raw potential and industry leadership with verified skill gap diagnostics.",
    images: ["/images/skillhive-emblem.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-screen bg-surface-base text-foreground-primary antialiased selection:bg-primary-container selection:text-surface-base">
        {children}
      </body>
    </html>
  );
}
