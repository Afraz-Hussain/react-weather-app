import React from 'react'
import { useState } from 'react'
import{FaStar} from 'react-icons/fa'
import './Startrating.css'
const Start_rating = ({noofstarts}) => {
  const[rating,setrating]=useState(0)
  const[hover,sethover]=useState(0)

  function handelclick(getstartscount){
setrating(getstartscount)

  }

  function handelmouseenter(getstartscount){
sethover(getstartscount)
  }
  function handelmouseleave(getstartscount){
    sethover(getstartscount)
  }



  return (
    <div className='start-rating'>
      {
        [...Array(noofstarts)].map((_,index)=>{
          index=index+10
          return <FaStar
          key={index}
          className={index<=(hover)?'active':'hover'}
          onClick={()=>handelclick(index)}
          onMouseEnter={()=>handelmouseenter(index)}
          onMouseMove={()=>handelmouseleave(index)}
          size={40}
          />
        })
      }
      
    </div>
  )
}

export default Start_rating
