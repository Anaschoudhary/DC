import { Roboto, Rozha_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const rozhaOne = Rozha_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rozha',
  display: 'swap',
});

export const metadata = {
  title: "Marvel",
  description: "Marvel Universe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-...your-integrity..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${roboto.variable} ${rozhaOne.variable}`}>
        <div className="layout-wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
