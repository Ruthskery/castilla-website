import type { Metadata } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barangay Cumadcad — Castilla, Sorsogon | Official Website",
  description:
    "The official website of Barangay Cumadcad and Sangguniang Kabataan Cumadcad. Access barangay services, announcements, youth programs, and connect with your local government.",
  keywords: [
    "Barangay Cumadcad",
    "Cumadcad Castilla",
    "Castilla Sorsogon",
    "Sorsogon barangay",
    "Sangguniang Kabataan",
    "SK Cumadcad",
    "LGU Cumadcad",
  ],
  openGraph: {
    title: "Barangay Cumadcad — Official Website",
    description:
      "Serving the community of Cumadcad, Castilla, Sorsogon with transparency, integrity, and service.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
