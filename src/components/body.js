import React from 'react'
import Sidebar from './sidebar'
// import MainContainer from './mainContiner'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=' grid grid-cols-10 mt-2 '  >
        <Sidebar/>
        <Outlet/>
    </div>
    
  )
}

export default Body