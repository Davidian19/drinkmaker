import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DrinkMaker",
  description:
    "O futuro das bebidas personalizadas! Nosso site oferece uma experiência única onde a tecnologia de ponta se encontra com a mixologia. Apresentamos o DrinkBot, um robô inteligente capaz de preparar bebidas perfeitas para todos os gostos. Com um simples toque, você pode escolher entre uma ampla variedade de coquetéis clássicos, criações exclusivas e bebidas não alcoólicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
