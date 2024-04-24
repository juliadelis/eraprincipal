import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Era principle",
  description: "Faça parte da transformação digital com ERA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body>
        <Navbar />
        <main className={inter.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
