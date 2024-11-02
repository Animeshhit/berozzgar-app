import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Subheader from "@/components/SubHeader";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Berozzgar Engineers | Free Notes for Haldia Institute of Technology",
  description:
    "Berozzgar Engineers provides a platform for students at Haldia Institute of Technology to access top-tier notes and class materials shared by the best students, completely anonymously.",
  keywords: ["haldia", "haldia institute of technology", "hit"],
  icons: {
    icon: "/icon.ico",
  },
};

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader color="red" height={1} showSpinner={false} />
        <Subheader />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
