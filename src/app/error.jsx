'use client'
import { useEffect } from 'react'

function error({error , reset}) {
 
    useEffect(()=>{
    console.log(error)
  },[error])
    
  return (
    <div>
      <h1>Something went Wrong</h1>
      <button  className="hover:text-amber-600" onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default error
