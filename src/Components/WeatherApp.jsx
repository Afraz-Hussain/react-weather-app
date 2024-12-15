import React, { useEffect, useState } from 'react'
import Search from './Search'

export default function WeatherApp() {
const[search,setsearch]= useState("")

const[weatherdata,setweatherdata]=useState('')

async function fetchdata(param){
  try {
    const response=await fetch(`
    https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=94a2ee610d0247e4e6feae16e40e27e5`)
    const result= await response.json()
console.log(result)
setweatherdata(result)

  } 
  
  catch (error) {
    console.log(error)
  }

}

useEffect(() => {
  fetchdata("Chunian")
}, [])


function handelsearch(){
  fetchdata(search)
}

  return (
    <div>
      <h1>React Weather App</h1>
    <Search 
    search={search}
    setsearch={setsearch}
    handelsearch={handelsearch}
    />

{weatherdata && weatherdata.name?(
 <div>
  
 <h4>{weatherdata.name}</h4>
 <h4>{weatherdata.sys.country}</h4>
 <h4>{weatherdata.weather[0].main}</h4>
 <h4>{(weatherdata.main.temp-273).toFixed(2)} °C</h4>
</div>
):(<h2>Loding data ...</h2>)
 

}



    </div>
  )
}
