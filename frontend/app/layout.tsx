import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Trust",
  description: "Valid contacts for you",
  icons: ["favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
