import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({ 
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aminex Technical Services - Modern Infrastructure Solutions",
  description: "Professional ELV, ICT, AV, and Automation services for modern business infrastructures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <VisualEditsMessenger />
        {/* Chatbot - sticky with high z-index */}
        <div style={{ position: "fixed", bottom: 0, right: 0, zIndex: 9999 }}>
          <Script
            src="https://www.noupe.com/embed/019b0b101956786298dfd07dae0dfb360ad5.js"
            strategy="afterInteractive"
          />
        </div>
      </body>
    </html>
  );
}
