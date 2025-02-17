 "use client";
import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import SignInButton from '../Forms/Button/SignInButton';
import { FiX, FiGithub } from 'react-icons/fi';

//import react auth for login
import {signIn, signOut, useSession} from 'next-auth/react'


export default function Header(){
    const {data:session}=useSession()

  return (
    <div className=' shadow-sm bg-color_black sticky top-0 left-0  z-50 text-color_white'>
        <header className={`${styles.header} container flex justify-between items-center flex-wrap md:px-0 px-4`}>

            <div className={styles.logo}>
              <Link href='/'> <img src='/logo.png' alt="Carregando logo" className='h-16' /></Link>
            </div>

            <nav className={`${styles.menu} font-medium text-lg flex justify-center items-center gap-4`}>
              <Link href='/'> Home </Link>
              <Link href='/board'> Meu Board  </Link>
            </nav>

            {
              session ?
            (<div className={styles.entrar}>
                <SignInButton type='button' className='font-medium flex justify-center items-center gap-1' onClick={()=>signOut()}>
                  <img src={session.user.image} alt="" className='h-10 w-10' />
                  <span>Ola {session.user.name.split(' ')[0]}</span>
                  <span className='text-xl text-color-black'><FiX/></span>
                </SignInButton>
            </div>)
              :
            (<div className={styles.entrar}>
                <SignInButton type='button' className='font-medium flex justify-center items-center gap-1' onClick={()=>signIn('github')}>
                  <span className='text-3xl text-color_destaque1'><FiGithub/></span>
                  <span>Entrar com github</span>
                </SignInButton>
            </div>)

            }

        </header>
    </div>
  )
}