 "use client";
import React from 'react'
import Header from '../components/Header/Header';
import "./globals.css";
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

//Import the fonts
import { Roboto } from 'next/font/google';


const roboto =Roboto({subsets: ["latin"], weight: ["400", "700"]});


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body>
      <SessionProvider>
        <Header/>
        {children}
     </SessionProvider>
      </body>
    </html>
  );
}
