import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import SignInButton from '../Forms/Button/SignInButton';
import { LuGithub } from "react-icons/lu";
import { FiX } from 'react-icons/fi'

const Header = () => {

  const session=true

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
                <div className={styles.entrar}>
                    <SignInButton type='button' className='font-medium flex justify-center items-center gap-1'>
                      <img src="/images/profile1.png" alt="" className='h-10 w-10' />
                      <span>Ola Dennis</span>
                      <span className='text-xl text-color-black'><FiX/></span>
                    </SignInButton>
                </div>
                  :
                <div className={styles.entrar}>
                    <SignInButton type='button' className='font-medium flex justify-center items-center'>
                      <span className='text-3xl text-violet-600'><LuGithub/></span>
                      <span>Entrar com github</span>
                    </SignInButton>
                </div>

                }

            </header>
    </div>
  )
}

export default Header
