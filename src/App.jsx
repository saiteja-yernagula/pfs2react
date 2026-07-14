import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import './components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
// import { useState } from 'react'


function App() {
  // const [count,setCount]=useState(0);
  // let count=0
  // function inc(){
  //   count++
  //   console.log(count)
  // }
  //   function dnc(){
  //   count--
  //   console.log(count)

  // }

  return (
   <> 
   <br />
   {/* {count}
   <button onClick={()=>setCount(count+1)}>increment</button>
   <button onClick={()=>setCount(count-1)}>decrement</button> */}
   <Navbar/>
   <Section/>

   <div className='doctorcontainer'>
   <Doctorcard name='Sivaram' specialization='ortho spl' gender='male'/>
   <Doctorcard name='Teja' specialization='Muscles spl' gender='male'/>
   <Doctorcard name='Vasavi' specialization='Psycho spl' gender='female'/>
   <Doctorcard name='Madhu' specialization='ortho spl' gender='male'/>
   <Doctorcard name='Aditya' specialization='skin spl' gender='male'/>
   <Doctorcard name='John' specialization='Lungs' gender='male'/>
   </div>
   <Addnewdoctor/>
  </>
  )
}

export default App