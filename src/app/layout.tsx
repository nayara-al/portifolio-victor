import { Header }from "components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair } from "next/font/google";
import { Raleway } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
  title: "Victor Eugenio",
  description: "Protifólio Desenvolvedor Mobile Android",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
