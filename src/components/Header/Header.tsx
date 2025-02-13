import React from 'react'
import Link from 'next/link'
import { LuGithub } from "react-icons/lu";
import {FiX} from 'react-icons/fi'
import styles from './Header.module.scss'
import Button from '../Forms/Button/Button';

const Header = () => {
const session=true

  return (
    <div className='py-2 shadow-sm'>
            <header className={`${styles.header} container flex justify-between items-center flex-wrap`}>

                <div className={styles.logo}>
                  <Link href='/'>
                    <h1 className='text-4xl text-violet-600 font-medium'>Lembrei<span className='font-semibold'>+</span></h1>
                  </Link>
                </div>

                <nav className={`${styles.menu} font-medium text-lg flex justify-center items-center gap-2`}>
                  <Link href='/'>
                    Home
                  </Link>
                  
                  <Link href='/board'>
                    Board
                  </Link>
                </nav>

                {
                  session ?
                <div className={styles.entrar}>
                    <Button type='button' className='font-medium flex justify-center items-center'>
                      <span>Ola Dennis</span>
                      <span className='text-xl text-color-black'><FiX/></span>
                    </Button>
                </div>
                  :
                <div className={styles.entrar}>
                    <Button type='button' className='font-medium flex justify-center items-center'>
                      <span className='text-3xl text-violet-600'><LuGithub/></span>
                      <span>Entrar com github</span>
                    </Button>
                </div>
                }

            </header>
    </div>
  )
}

export default Header
