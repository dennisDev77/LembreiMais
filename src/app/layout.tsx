import React from 'react'
import Header from '../components/Header/Header';
import "./globals.css";

  export const metadata = {
    title: "Home | Lembrei +",
    description: "Gestor de tarfas",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
