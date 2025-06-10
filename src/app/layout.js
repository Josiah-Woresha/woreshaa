import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Footer from "./components/Footer";

import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WORESHA",
  description: "Developer Joe",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
              <Footer />
      </body>
    </html>
    </ViewTransitions>
  );
}
