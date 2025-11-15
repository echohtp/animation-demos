import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loot Box Animation Examples",
  description: "8 engaging loot box animation patterns and reward claim lifecycle states for maximum user engagement",
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
