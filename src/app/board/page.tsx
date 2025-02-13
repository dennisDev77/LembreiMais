import React from 'react'
import Input from '../../components/Forms/Input/Input'
import styles from './page.module.scss'
import Button from '../../components/Forms/Button/Button'
import {FiPlus, FiCalendar, FiTrash} from 'react-icons/fi'

const page = () => {
  return (
    <main className='container'> 
        
        <section className={`${styles.formContent}  p-4 rounded-md bg-color_black  `}>

            <form className={`flex justify-center items-center gap-1 `}>
                <div className='w-full'>
                <Input placeholder='Dgite a sua tarefa!' type='text'/>
                </div>

                <div className='w-16'>
                <Button><FiPlus/></Button>
                </div>
            </form>

            <article className={styles.taskList}>
            <p>Aprenda a dizer Nao as Empresas</p>

            <div className={styles.action}>
                <div className={styles.date}>
                <span ></span>
                <span><FiCalendar/></span>
                </div>

                <div className={styles.delete}>
                <span ><FiTrash/></span>
                <span>Excluir</span>
                </div>
            </div>
        </article>
            
        </section >

    </main>
  )
}

export default page
