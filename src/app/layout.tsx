"use client"
import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from '@/components/sidebar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/login"; // No mostrar sidebar en login

  return (
    <html lang="en">
      <body
        className={`flex ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {showSidebar && <Sidebar />}

        {/* Contenido principal */}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
