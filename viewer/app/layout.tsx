import type { Metadata } from "next";
import { Urbanist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import AuthProvider from "@/components/AuthProvider";
import { getContentTree, getFirstSlug } from "@/lib/content";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cohart Study Guide",
  description: "Interactive study guide for web fundamentals and interview prep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tree = getContentTree();
  const firstSlug = getFirstSlug();

  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${geistMono.variable} h-full`}
    >
      <body className="h-full bg-white text-gray-800 antialiased">
        <AuthProvider>
          <div className="flex h-full">
            <Sidebar tree={tree} firstSlug={firstSlug} />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
