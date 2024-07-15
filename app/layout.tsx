import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Mamun's Portfolio",
  description: "Professional Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]` }>
        {children}
        <Toaster />
        </body>
    </html>
  );
}
