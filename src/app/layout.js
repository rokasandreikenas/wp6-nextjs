import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mano puslapis",
  description: "Mano puslapis apie mano gyvenimą",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header">
          <h1>Logo</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/kontaktai">Kontaktai</Link>
            <Link href="/apie-mus">Apie mus</Link>
          </nav>
        </header>
        {/* children yra kiekvienas page */}
        <div className="container">{children}</div>
        <footer className="footer">
          <div>All rights reserved</div>
        </footer>
      </body>
    </html>
  );
}
