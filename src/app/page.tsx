import React from 'react'
import styles from './page.module.scss'

export default function Home() {

  return ( 
    <>
    <section className="container  flex flex-col flex-wrap justify-center items-center h-lvh">

      <div className={styles.boarder_user}>
        <img src="/images/board-user.svg" alt="Carregando board"/>
      </div>

      <div className='text-center font-medium text-3xl'>
        <h2>Uma ferramenta para o seu dia a dia Escreva, Planeje e Organize - se </h2>
        <p className='font-normal text-xl'><span className='text-color_destaque1'>100% Gratuito</span> e Online</p>
      </div>

      <div className={`${styles.apoiadores} text-center`}>
        <h2 className='font-normal text-xl'>Apoiadores</h2>

        <div className='flex justify-center items-center gap-2 pt-2'>
          <img src="/images/profile1.png" alt="Carregando Apoiadores" className='h-14 w-14'/>
          <img src="/images/profile1.png" alt="Carregando Apoiadores" className='h-14 w-14'/>
          <img src="/images/profile1.png" alt="Carregando Apoiadores" className='h-14 w-14'/>
        </div>
        
      </div>
    </section>
    </>
  );
}