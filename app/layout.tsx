import "./globals.css";
import type { Metadata } from "next";
import CustomCursor from "../components/customcursor";

export const metadata: Metadata = {
  title: "Naveen-PNTk",
  description: "Personal portfolio website of Navaneethakrishnan",
  manifest: "/favicon/site.webmanifest",
  themeColor: "#ffffff",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/030ff7f43dec5bbb2c99976c7acdd7b1?family=Olifant+W00+Normal"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
