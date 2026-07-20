import React from 'react'
import { useState } from 'react'

function Weather() {
    const [city,setCity]=useState([])
    function handleform(e){
        e.preventDefault()
        console.log(city)
        api='https://api.openweathermap.org/data/2.5/weather?q=egg&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb'
    }
  return (
    <div>
        <form action="" onSubmit={handleform}>
            <input onChange={e=>setCity(e.target.value)} value={city} type="text" className='text-field' placeholder='enter city'/>
            <button type='submit'>Search</button>
        </form>

    </div>
  )
}

export default Weather