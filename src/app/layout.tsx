import type { Metadata } from "next";
import "./globals.css";

/** `noindex` tant que le site n'est pas lancé (S8). Le retirer est un geste explicite de la séance
 *  de mise en ligne, pas un oubli qu'on découvre dans la Search Console. */
export const metadata: Metadata = {
  title: "Patrick Patenaude",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
