import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Cursor from "./components/ui/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Mamun",
  description: "Professional Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth dark">
      <body className={`${inter.className} bg-black text-white  bg-grid-small-white/[0.2]`}>
        {/* <Cursor /> */}
          {children}
          <Toaster />
      </body>
    </html>

  );
}