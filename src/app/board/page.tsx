import React from 'react'
import Input from '../../components/Forms/Input/Input'
import styles from './page.module.scss'
import Button from '../../components/Forms/Button/Button'
import {FiPlus, FiCalendar, FiTrash} from 'react-icons/fi'

const page = () => {
  return (
    <main className='container'> 
        
        <section className={`${styles.formContent}  p-4 rounded-md bg-color_black  `}>

            <form className={`flex justify-center items-center gap-1 pb-8`}>
                <div className='w-full'>
                <Input placeholder='Dgite a sua tarefa!' type='text'/>
                </div>

                <div className='w-16'>
                <Button> <span className='text-lg'><FiPlus/></span></Button>
                </div>
            </form>

            <article className={`${styles.taskList} text-color_white p-2`}>
            <p className='text-xl text-color_destaque1'>Aprenda a dizer Nao as Empresas</p>

            <div className={'flex justify-between items-center flex-wrap '}>

                <div className={`flex justify-center items-center gap-1`}>
                <span><FiCalendar/></span>
                <time >14 Fev 2026</time>
                </div>
              
                <div>
                <button className={`flex justify-center items-center gap-1`}>
                <span ><FiTrash/></span>
                <span>Excluir</span>
                </button>
                </div>

            </div>
        </article>
            
        </section >

    </main>
  )
}

export default page
