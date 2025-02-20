import React from 'react'
import styles from './page.module.scss'
import { FC } from 'react';

export const metadata = {
  title: "Home | Lembrei +",
  description: "Home Gestor de tarfas",
};

// Tornando a pagina home estatica
 async function getData(){
  const response=await fetch('', {next:{revalidate:3600}})
 
  if(!response.ok){
   throw new Error('Falha ao carregar dados')
  }

  return response.json()
 }

export default function Home() {

  return ( 
    <>
    
    <main className="container  flex flex-col flex-wrap justify-start items-center h-lvh">

      <div className={`${styles.boarder_user} pt-10`}>
        <img src="/images/board-user.svg" alt="Carregando board"/>
      </div>

      <div className='text-center font-medium text-2xl'>
        <h2>Uma ferramenta para o seu dia a dia Escreva, Planeje e Organize - se </h2>
        <p className='font-normal text-xl'><span className='font-medium'>100% Gratuito</span> e Online</p>
      </div>

      <div className={`${styles.apoiadores} text-center`}>
        <h2 className='font-normal text-xl'>Apoiadores</h2>

        <div className='flex justify-center items-center gap-2 pt-2'>
          <img src="/images/profile1.png" alt="Carregando Apoiadores" className='h-14 w-14'/>
          <img src="/images/profile1.png" alt="Carregando Apoiadores" className='h-14 w-14'/>
        </div>

      </div>
    </main>
    </>
  );
}