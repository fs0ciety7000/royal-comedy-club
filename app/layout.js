import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-lato'
});

export const metadata = {
  title: "Royal Comedy Club | L'Élite de l'Humour Corporate",
  description: "Confrérie exclusive de clowns en cravate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${lato.variable} bg-slate-950 text-slate-200 antialiased selection:bg-amber-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}