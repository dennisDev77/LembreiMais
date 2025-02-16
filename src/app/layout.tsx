import React from 'react'
import Header from '../components/Header/Header';
import { Roboto } from 'next/font/google';
import "./globals.css";


const roboto =Roboto({subsets: ["latin"], weight: ["400", "700"]});

  export const metadata = {
    title: "Lembrei+",
    description: "Gestor de tarefas",
  };
  
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
