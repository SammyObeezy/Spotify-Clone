import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SideBar from '@/components/SideBar';
const font = Figtree ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Content",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <SideBar>{children}</SideBar> </body>
    </html>
  );
}
