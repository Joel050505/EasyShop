import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";
import Header from "@/components/HomePage/Header";
import {ProductProvider} from "@/context/ProductContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "EasyShop",
//   description: "Your one-stop shop for everything",
// };

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased test`}
      >
        <ProductProvider>
          <Header />
          {children}
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}
