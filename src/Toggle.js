import React, { useContext } from 'react'
import { ThemeContext } from './Context'
import './Toggle.css'

export default function Toggle() {

    const theme = useContext(ThemeContext)

    const handleClick = ()=>{
       theme.dispatch({type:"TOGGLE"})
    }

  return (
    <div className='t'>
      <img src='sun.png' alt='' className='t-icon' />
      <img src='moon.png' alt='' className='t-icon' />
      <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}
