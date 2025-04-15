import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "よっぴ",
  description: "よっぴのポートフォリオ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className={"container"}>{children}</div>
      </body>
    </html>
  );
}
