import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import IndexNavbar from "@/components/navBar/indexNavbar";
import Footer from "@/components/footer/Footer";

const inter = Kanit( { weight:'400' ,subsets: ["latin"] } );

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
        <main className="bg-[#E2E9FF] dark:bg-[#140E36] pl-64 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
