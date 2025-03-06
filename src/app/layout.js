import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "90s music player",
  description: "Created with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu/>
        {children}
      </body>
    </html>
  );
}
