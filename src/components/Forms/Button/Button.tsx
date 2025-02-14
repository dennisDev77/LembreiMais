import React from 'react'

const Button = ({ children,...props}) => {
  return (
    <button {...props} className='text-color_white flex justify-center items-center bg-violet-500 p-3'>
      {children}
    </button>
  )
}

export default Button
