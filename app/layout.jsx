import "./globals.css";
import Script from "next/script";
import CustomCursor from "../components/customcursor";

export const metadata = {
  title: "Naveen-PNTk",
  description: "Personal portfolio website of Navaneethakrishnan",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/030ff7f43dec5bbb2c99976c7acdd7b1?family=Olifant+W00+Normal"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-67ESBGLD5L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-67ESBGLD5L');
          `}
        </Script>
      </head>
      <body className="min-h-screen w-full overflow-x-hidden antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
