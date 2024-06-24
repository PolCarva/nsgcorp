import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ns Group | Nuestro Equipo",
  description:
    "Conoce a nuestro equipo de expertos en comunicación estratégica, asuntos empresariales, inteligencia electoral y public affairs.",
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
