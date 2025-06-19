import "./globals.css";
import type { Metadata } from "next";
import CustomCursor from "../components/customcursor";

export const metadata: Metadata = {
  title: "Naveen-PNTk",
  description: "Personal portfolio website of Navaneethakrishnan",
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
