import React from 'react'
import style from './input.module.css'



const Input = () => {
  return (
    <>
        <div className='inputContainer border  flex justify-center h-10  '>
            <input className={style.inputBox}  type="text"/>
        </div>
    </>
  )
}

export default Input