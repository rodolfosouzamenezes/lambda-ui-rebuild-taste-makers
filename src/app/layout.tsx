import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Superintelligence Cloud | Lambda",
  description:
    "Cloud GPUs, on-demand clusters, private cloud, and hardware for AI training and inference. Run B200 and H100, deploy fast, and scale cost effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
