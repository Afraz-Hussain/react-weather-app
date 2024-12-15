import React, { useState } from 'react'
import { useEffect } from 'react'
import './Startrating.css'
export default function ImageSlider() {
    const[products,setproducts]=useState([])
    const[count,setcount]=useState(0)
    const[disablebtn,setdisabledbtn]=useState(false)
const fetchproducts=async()=>{

    const response=await fetch(`https://dummyjson.com/products?limit=
    20&skip=${count*20}`
    );

const result=await response.json()

//For removing products that are getting duplicated...
setproducts((prevProducts) => [...prevProducts, ...result.products]);
}

useEffect(()=>{
    fetchproducts()
},[count])
useEffect(()=>{
   if(products.length===100){
    setdisabledbtn(true);
   }
},[products])
  return (
  <div className='container' >
{
    products.map((currelem)=>{
        return(
            <div key={currelem.id} className='products'>
                  <img src={currelem.thumbnail}/>
                <span>{currelem.id}</span>
                <h3>{currelem.title}</h3>
                <p>{currelem.description}</p>
                <h6>{currelem.category}</h6>              
                            </div>
        )
    })
}
<div>
      <button
      disabled={disablebtn}

      onClick={()=> setcount(count+1)}>LOAD MORE BUTTON</button>
      {
disablebtn?`<p>you have seen All products</p>`:null
      }
      </div>
  </div>
 
  )
}
