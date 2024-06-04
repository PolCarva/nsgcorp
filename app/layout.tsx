import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const helvetica = localfont({
  src: [
    {
      path: "../public/fonts/helvetica/Helvetica.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/helvetica/Helvetica-Bold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-helvetica",
});

const durk = localfont({
  src: [
    {
      path: "../public/fonts/durk_cyr/DrukCyr-Medium.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/durk_cyr/DrukCyr-Bold.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/durk_cyr/DrukCyr-Heavy.woff2",
      weight: "800",
    },
  ],
  variable: "--font-durk",
});

export const metadata: Metadata = {
  title: "Ns Group | Demoscpía, Eyewatch, Illuminati Lab y Nicestream",
  description:
    "Somos un ecosistema de comunicación estratégica especializado en asuntos empresariales, inteligencia electoral y public affairs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${helvetica.className} text-xl`}>{children}</body>
    </html>
  );
}
