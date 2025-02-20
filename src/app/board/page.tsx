"use client";
import React, { FormEvent } from 'react'
import Input from '../../components/Forms/Input/Input'
import styles from './page.module.scss'
import Button from '../../components/Forms/Button/Button'
import {FiPlus, FiCalendar, FiTrash, FiEdit3, FiClock} from 'react-icons/fi'
import SupportButton from '../../components/SupportButton/SupportButton'

//IMPORT FIREBASE
import db from '../services/firebaseConnection';
import {collection, addDoc} from 'firebase/firestore'

//My sessions
import { useSession } from 'next-auth/react';
import {redirect} from 'next/navigation'
  
interface IUser{
  id:string,
  nome:string,
  email:string,
  avatar:string
}

  const Page = () => {
   const [input, setInput]=React.useState('')
   const [loading, setLoading]=React.useState(false)
   const {data:session}=useSession()

            if(!session){
            redirect('/')
            }

            const user:IUser={
              id:session?.id,
              nome:session?.user.name,
              email:session?.user.email,
              avatar:session?.user.image
            }

   async function handleAddTask(e:FormEvent){
    setLoading(true)
    e.preventDefault()
   
    if(input===''){
      alert("Preenvha alguma Tarefa!")
      return
    }
    try{
      await addDoc(collection(db, "Tarefa"),{
        task:input,
        userId:user.id,
        nome:user.nome,
        created :new Date(),
      })
      console.log('Cadastrado com sucesso')
      setInput("")
    }catch(err){
      console.log(err.message)
    }finally{
      setLoading(false)
    }
   }
   
  return (
    <>
    <main className='container'> 
        {/* Add Tarefa */}
      <section className={`${styles.formContent}  p-4 rounded-md shadow-md`}>

            {/* Form add tarefa */}
        <form className={`flex justify-center items-center gap-1 pb-6`} onSubmit={handleAddTask}>
            <div className='w-full'>
            <Input placeholder='Dgite a sua tarefa!' type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>

            <div className='w-16'>
            <Button> <span className='text-lg'> {loading? 'C' : <FiPlus/>}</span></Button>
            </div>
        </form>
            
          <h3 className='text-xl'>Voce tem 2 Tarefas</h3>

        {/* Show Task */}
      <article className={`${styles.taskList} text-color_white bg-color_black rounded-sm p-4`}>
        <p className='text-base cursor-pointer pb-2'>Aprenda a dizer Nao as Empresas </p>

          <div className={'flex justify-between items-center flex-wrap '}>

            <div className={`flex justify-center items-center gap-4`}>
                <div className='flex justify-center items-center gap-1 text-sm'>
                <span className='text-color_destaque1'><FiCalendar/></span>
                <time >14 Fev 2026</time>
                </div>

                <button className='flex justify-center items-center gap-1 w-20'>
                  <span className='text-color_destaque1'> <FiEdit3/> </span>
                  <span>Editar</span>
                </button>
            </div>
            
            <div>
              <button className={`flex justify-center items-center gap-1 text-sm`}>
              <span  className='text-red-500'><FiTrash/></span>
              <span>Excluir</span>
              </button>
            </div>

          </div> 

      </article>

  </section >

    {/* Mensagem do apoiador */}
    <section className={`${styles.apoioVip} bg-color_black rounded-sm text-color_white p-4`}>
      <h3 className='text-color_destaque1 text-xl'>Obrigado Por apoiar nosso Projecto</h3>    

      <div className='mt-2 flex justify-start items-center gap-1 text-sm'>
        <span className='text-color_destaque1'><FiClock/></span>
        <time className=''>Ultima Doacao foi a 3 dias</time>    
      </div>
    </section>
</main>

  {/* Botao Apoiador */}
    <section className=''>
      <SupportButton/>
    </section>
    </>
  )
}

export default Page
