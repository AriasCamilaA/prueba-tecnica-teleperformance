import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "App/context";
import NavSuperior from "App/components/NavSuperior";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arias Shop",
  description: "Prueba técnica para Teleperformance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <NavSuperior/>
          <div className="mt-16">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
