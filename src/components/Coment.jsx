import React from 'react'
import logo from '../images/user.png'

const Coment = ({data}) => {
  return (
    <div className='flex bg-gray-200 rounded '>
        <img  className='w-9 h-9 border rounded-full border-black m-2' src={logo} alt="user" />
        <div>
            <h1>{data.name}</h1>
            <h1>{data.text}</h1>

        </div>

    </div>
  )
}

export default Coment