import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "SharePanda - File Sharing App",
  description: "A simple file sharing app built with Next.js and Firebase.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} `}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
