import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import "./globals.css";
import { helvetica } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ns Group | Comunicación Estratégica",
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
      <body className={`max-w-[100svw] ${helvetica.className}`}>
        <Header />
        <main className="pt-20 md:pt-5">{children}</main>
      </body>
    </html>
  );
}
