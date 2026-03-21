import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thrust Labs — Technology Consulting",
  description: "High-velocity technology consulting. We build the infrastructure behind scale — strategy, engineering, and transformation end to end.",
  openGraph: {
    title: "Thrust Labs — Technology Consulting",
    description: "High-velocity technology consulting. We build the infrastructure behind scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased noise">
        {children}
      </body>
    </html>
  );
}
