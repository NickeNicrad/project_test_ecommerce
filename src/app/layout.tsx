import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryContextProvider from "@/contexts/QueryContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "This E-Commerce Website is just for test purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryContextProvider>{children}</QueryContextProvider>
      </body>
    </html>
  );
}
