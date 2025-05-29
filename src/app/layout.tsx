import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naijmazon",
  description: "come and buy what im selling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-7x1 m-auto min-w-[300px] p-4">{children}</main>
      </body>
    </html>
  );
}
