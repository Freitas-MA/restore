import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserAppHeader from "@/components/layout-components/user-app-header";
import UserAppSidebar from "@/components/layout-components/user-app-sidebar";
import { Analytics } from "@vercel/analytics/react";
import AppSignature from "@/components/layout-components/app.signature";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "picTuryun",
  description: "Using AI to make your life easy!",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
    // android: ["/android-chrome-192x192.png"],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <UserAppHeader />
        <div className="flex pt-10">
          <UserAppSidebar className="hidden md:block z-10 border-solid border-black" />
          {children}
          <Analytics />
        </div>
        <AppSignature />
      </body>
    </html>
  );
}
