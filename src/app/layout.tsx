import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Acme MTC Guild - Learn, Earn, and Inspire",
  description: "Personalized retirement planning and strategic investment guidance. Build lasting wealth through our proven MTC framework.",
  keywords: "retirement planning, investment guidance, wealth building, financial planning, MTC framework",
  authors: [{ name: "Acme MTC Guild" }],
  openGraph: {
    title: "Acme MTC Guild - Learn, Earn, and Inspire",
    description: "Personalized retirement planning and strategic investment guidance",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
