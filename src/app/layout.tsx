import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
})

export const metadata: Metadata = {
  title: "Music request",
  description: "Request music to be played on set",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={poppins.className}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
