import Link from 'next/link'
import React from 'react'
import styles from './SupportButton.module.scss'

const SupportButton = () => {
  return (
    <section className={`absolute bottom-10 right-10 z-40`}>
        <Link href='/donate'>
            <button className={`${styles.button}
             bg-color_destaque1 w-24 h-24 text-lg font-medium rounded-full`}> 
             Apoiar 
            </button>
        </Link>
    </section>
  )
}

export default SupportButton
