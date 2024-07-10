import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import NextProvider from "@/provider/NextProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='w-[100%] lg:w-[80%] mx-auto'>
      <NextProvider><Navbar/>
       {children}</NextProvider> 
      </div>
      <Footer />
      </body>
    </html>
  );
}
