import React from 'react'
import styles from './login/page.module.scss'


export default function Home() {

  return ( 
    <>
    <section className="container">
      <div className={styles.boarder_user}>
        <img src="/images/board-user.svg" alt="Carregando board"/>
      </div>

      <div>
        <h2>Uma ferramenta para o seu dia a dia Escreva, Planeje e Organize </h2>
        <p><span>100% Gratuito</span> e Online</p>
      </div>

      <div>
        <h2>Apoiadores:</h2>
        <div>
          <img src="/images/profile1.png" alt="Carregando Apoiadores" />
        </div>
      </div>
    </section>
    </>
  );
}