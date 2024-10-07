import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/themebuilder/02-Navbar';

// Menggunakan Montserrat dengan bobot dari 100 hingga 900
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Semua bobot
});

export const metadata = {
  title: "Ludesc",
  description: "Lung Desease Screening",
  icon: "/images/KensenLogoRound.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}> {/* Menambahkan font Montserrat */}
      <head>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,0,0" />
      </head>
      <body className="min-h-screen p-0 m-0">
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
