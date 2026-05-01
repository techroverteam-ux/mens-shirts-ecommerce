import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from '../src/context/ToastContext';
import { AuthProvider } from '../src/context/AuthContext';
import Layout from '../components/layout/Layout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VCHUKI - Men's Seasonal Shirts",
  description: "Premium shirts for Indian summers. Feel the fabric, stay comfortable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            <Layout>
              {children}
            </Layout>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
