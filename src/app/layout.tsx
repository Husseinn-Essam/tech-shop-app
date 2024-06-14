import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/queryProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech shop",
  description: "Ecommerce website that sells tech products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <AuthProvider>
          <QueryProvider>
            <Navbar/>
            {children}
          </QueryProvider>
        </AuthProvider>
        
      </body>
    </html>
  );
}
