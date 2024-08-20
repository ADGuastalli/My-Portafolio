import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import IndexNavbar from "@/components/navBar/indexNavbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Guastalli Alexis",
  description: "My Portfolio by Guastalli Alexis Dante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IndexNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
