import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
   const navigate = useNavigate()
  return (
    <div className='text-center'>
        <h2 className='text-8xl'>404</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <button onClick={()=> navigate("/")}>Go home</button>
        <img className='block  mx-auto' src="https://uzmovi.tv/images/notfound.gif" alt="" />
    </div>
  )
}

export default NotFound