import type { Metadata } from "next";
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
          <h1 className="text-3xl ml-5 cursor-pointer">Space Engine Object Catalog</h1>
        </div>
        <div className="h-[1px] bg-white"></div>
        {children}
      </body>
    </html>
  );
}
