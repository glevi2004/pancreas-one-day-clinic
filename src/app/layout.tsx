import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pancreas One Day Clinic - Specialized Pancreatic Care",
  description:
    "Expert pancreatic care in a single day. Our specialized clinic provides comprehensive diagnosis, treatment, and follow-up care for all pancreatic conditions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          {children}
        </body>
      </html>
    </>
  );
}
