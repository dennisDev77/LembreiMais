import React from 'react'
import styles from './Input.module.scss'

const Input = ({...props}) => {
  return (
    <input className={`${styles.input} text-slate-300 rounded-sm p-2`} {...props}/>
  )
}

export default Input