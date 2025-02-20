import React from 'react'
React
// import style from './App.module.css'
import style from "./Cal.module.css"
import Inputs from "./components/Input"
import ButtonContainer from './components/ButtonContainer'



const Cal = () => {
  return (
    <>
    <div className='mainContainer  px-5 py-12 max-w-7xl w-72 mt-16 mx-auto lg:px-4 lg:mt-32  bg-sky-100 rounded-xl'>
      
        <Inputs></Inputs>
        <div className='btnContainer  p-2 '>
         <ButtonContainer></ButtonContainer>
        </div>
    </div>
    </>
  )
}

export default Cal