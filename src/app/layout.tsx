import React from 'react'
import "./globals.css";

  export const metadata = {
    title: "Home | Lembrei +",
    description: "Gestor de tarfas",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
