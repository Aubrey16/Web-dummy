import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Image Upload - Simple Image Hosting",
  description: "Upload dan bagikan gambar dengan mudah tanpa perlu login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
