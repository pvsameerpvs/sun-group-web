import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sun Group — Company Websites",
  description: "Choose a company and open its static website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
