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
        {children}
      </body>
    </html>
  );
}
