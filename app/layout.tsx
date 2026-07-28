import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://susquatch.net"),
  title: "susquatch — an independent archive",
  description: "A rough-cut listening archive for Tokyo's susquatch.",
  openGraph: {
    title: "susquatch — an independent archive",
    description: "A rough-cut listening archive for songs that refuse to sit still.",
    url: "https://susquatch.net",
    siteName: "susquatch archive",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "susquatch — an independent archive" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "susquatch — an independent archive",
    description: "A rough-cut listening archive for songs that refuse to sit still.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
