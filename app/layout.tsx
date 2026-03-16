import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HRM Building & Remodeling LLC",
  description:
    "Kitchen, bathroom, basement, deck, window, and door specialists serving Vernon, CT and surrounding communities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
