import React from 'react'
import Link from 'next/link'
import { LuGithub } from "react-icons/lu";
import { FiX } from 'react-icons/fi'
import styles from './Header.module.scss'
import SignInButton from '../Forms/Button/SignInButton';

const Header = () => {

  const session=true

  return (
    <div className='py-4 shadow-sm sticky top-0 left-0 '>
            <header className={`${styles.header} container flex justify-between items-center flex-wrap md:px-0 px-4`}>

                <div className={styles.logo}>
                  <Link href='/'>
                    <h1 className='text-4xl text-color_destaque1 font-medium'>Lembrei<span className='font-semibold'>+</span></h1>
                  </Link>
                </div>

                <nav className={`${styles.menu} font-medium text-lg flex justify-center items-center gap-4`}>
                  <Link href='/'> <a>Home</a></Link>
                  <Link href='board'> <a>Board</a> </Link>
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
