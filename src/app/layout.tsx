import React from 'react'
import "./globals.css";

export const metadata = {
  title: "Lembrei+",
  description: "Gestor de tarfas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-pt">
      <body>
        {children}
      </body>
    </html>
  );
}
