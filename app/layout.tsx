import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import "./globals.css";
import { montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ns Group | Comunicación Estratégica",
  description:
    "Somos un ecosistema de comunicación estratégica especializado en asuntos empresariales, inteligencia electoral y public affairs.",
  openGraph: {
    title: "Ns Group | Comunicación Estratégica",
    description:
      "Somos un ecosistema de comunicación estratégica especializado en asuntos empresariales, inteligencia electoral y public affairs.",
    images: [
      {
        url: "https://nsgcorpcms.eyewatch.me/wp-content/uploads/2024/06/nsg_corp_logo.jpeg",
        width: 200,
        height: 200,
        alt: "Ns Group | Comunicación Estratégica",
      },
    ],
  },
  twitter: {
    site: "@nsgcorpcms",
    card: "summary_large_image",
    title: "Ns Group | Comunicación Estratégica",
    description:
      "Somos un ecosistema de comunicación estratégica especializado en asuntos empresariales, inteligencia electoral y public affairs.",
    images: [
      {
        url: "https://nsgcorpcms.eyewatch.me/wp-content/uploads/2024/06/nsg_corp_logo.jpeg",
        width: 200,
        height: 200,
        alt: "Ns Group | Comunicación Estratégica",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" href="/icono-ns.png" />
      </head>
      <body
        className={`bg-white text-black max-w-[100svw] ${montserrat.className}`}
      >
        <Header />
        <main className="pt-20 md:pt-5">{children}</main>
      </body>
    </html>
  );
}
