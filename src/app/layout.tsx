import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import IndexNavbar from "@/components/navBar/indexNavbar";
import Footer from "@/components/footer/Footer";

const inter = Kanit({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Guastalli Alexis",
  description: "My Portfolio by Guastalli Alexis Dante",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: "portfolio, Guastalli Alexis, full stack developer, web developer",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="portfolio, Guastalli Alexis, full stack developer, web developer"/>
        <meta name="description" content="My Portfolio by Guastalli Alexis Dante" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio Guastalli Alexis</title>
      </head>
      <body className={inter.className}>
        <IndexNavbar />
        <main className="bg-[#E2E9FF] dark:bg-[#140E36] p-0 md:pl-64 md:p-0 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
