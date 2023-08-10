import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {urlonoff} from '../utils/urlSlice'
import { Link } from 'react-router-dom'


const Sidebar = () => {

  const select= useSelector(store=>store.cart.menu);
  const  dispatch = useDispatch();
  if(!select){
    return null
  }
  return  (
    <div className='col-span-1 sticky top-1 bg-slate-100 transition-all'>
      
       <ul className='border-b pb-6 pl-3 flex  flex-col'>
          <Link tp='/' ><li>home</li></Link>
          <li>shorte</li>
          <li>subsription</li>
        </ul>
       
        <ul className='border-b pb-6 pl-3 flex  flex-col' >
          <li>library</li>
          <li>history</li>
          <li>your videos</li>
          <li>watch later</li>
          <li>like videos</li>
          <li>music</li>
          <li>gaming</li>
          <li>education</li>
        </ul>
        
        <ul className='border-b pb-6 pl-3 flex  flex-col' >
          <li>tranding</li>
          <li>favorit</li>
          <li>like</li>
          <li></li>
        </ul>
        
    </div>
  )
}

export default Sidebar