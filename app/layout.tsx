import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/ui/layouts/Sidebar";
import Topbar from "@/components/ui/layouts/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docker Desktop Clone",
  description: "A Docker Desktop clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen bg-gray-950 text-white antialiased`}
      >
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="pl-64 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
