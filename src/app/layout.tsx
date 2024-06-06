import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge",
  description: "This is a front-end mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
