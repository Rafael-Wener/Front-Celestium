import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CelestiumMC",
  description: "A loja oficial do CelestiumMC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster
          position="top-right"
          closeButton
          toastOptions={{
            style: {
              background: "#12081f",
              color: "#f5e7ff",
              border: "2px solid #7c3aed",
              borderRadius: "8px",
              boxShadow:
                "0 0 0 3px #24102f, 0 0 25px rgba(124,58,237,0.45)",
              fontFamily: "monospace",
              fontWeight: "bold",
            },
          }}
        />
      </body>
    </html>
  );
}