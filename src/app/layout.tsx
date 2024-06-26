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
    <html data-theme='mytheme' lang="en" className="bg-slate">
      <body data-theme='mytheme' className="bg-base">
      
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
