import type { Metadata } from "next";
import { ConfigProvider } from 'antd';
import "./globals.css";
import 'antd/dist/reset.css';

import Sidebar from "./sections/Sidebar";
import Header from "./sections/Header";
import Footer from "./sections/Footer";


export const metadata: Metadata = {
  title: "Pocket Chef",
  description: "Online Food Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider theme={{ legacy: true }}>
      <body
        className="flex"
      >
        <nav className="">
          <Sidebar />
        </nav>
        <div className="flex-1 max-h-screen overflow-y-auto scrollbar-hide relative">
          <Header />
          <main className="bg-secondary px-8 min-h-full">{children}</main>
          <Footer />
        </div>
      </body>
      </ConfigProvider>
    </html>
  );
}
