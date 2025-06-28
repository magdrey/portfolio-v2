import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components";

export const metadata: Metadata = {
  title: "Johnson's Portfolio",
  description: "Goodness Johnson, FrontEnd Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}
