import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arias Shop",
  description: "Prueba técnica para Teleperformance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">
              {metadata.title}
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-blue-300 me-3">Todos los productos</a>
              </li>
              <li>
                <a href="/cart" className="hover:text-blue-300">Carrito</a>
              </li>
            </ul>
          </div>
        </nav>
        
        {children}
      </body>
    </html>
  );
}
