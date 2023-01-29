import React from 'react'
import loader from '../assets/loader.gif'
import imgLoader from '../assets/loader.svg'
import '../index.css'

function Loader() {
  return (
    <div className='loader bg-gray-50 w-full'>

<img src={imgLoader} alt="" className=''/>

    </div>
    
  )
}

export default Loader