import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Moonyard",
  description: "The knowledge must flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.lineicons.com/4.0/lineicons.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Actor&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={josefin.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
