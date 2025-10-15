import type { Metadata } from "next";
import Link from "next/link";
import { Lexend } from 'next/font/google'
import "./globals.css";

const lexend = Lexend({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "SEO Catalog",
  description: "Space Engine Object Catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <div className="header">
          <Link href="/" className="text-3xl text-white cursor-pointer">Space Engine Object Catalog</Link>
          <div className="header-buttons">
            <button>Planets</button>
            <button>Stars</button>
            <button>Galaxies</button>
            <button>Other</button>
            <button>Upload</button>
          </div>
        </div>
        <div className="h-[1px] bg-white"></div>
        {children}
      </body>
    </html>
  );
}
