"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { Lexend } from 'next/font/google'
import { useRouter } from "next/navigation";
import "./globals.css";

const lexend = Lexend({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Router = useRouter();

  const HandleUpload = () => {
    Router.push(`/object/upload`);
  };

  return (
    <html lang="en">
      <title>SEO Catalog</title>
      <body className={lexend.className}>
        <div className="header">
          <Link href="/" className="text-3xl text-white cursor-pointer">Space Engine Object Catalog</Link>
          <div className="header-buttons">
            <button>Planets</button>
            <button>Stars</button>
            <button>Galaxies</button>
            <button>Other</button>
            <button onClick={HandleUpload}>Upload</button>
          </div>
        </div>
        <div className="h-[1px] bg-white"></div>
        {children}
      </body>
    </html>
  );
}
