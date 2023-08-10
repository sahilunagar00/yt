import React from 'react'
import logo from '../images/user.png'

const LiveChat = ({chat}) => {
  return (
    <div className='flex '>
        <img className='w-5 h-5 inline-block border border-black rounded-full mx-1' src={logo} alt='usr'/>
        <span className='font-bold mx-1'>{chat.name}</span>
        <p className='whitespace-wrap'>{chat.text+ '🚀' } </p>
    </div>
  )
}

export default LiveChat