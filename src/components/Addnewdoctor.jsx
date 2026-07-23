import React from 'react'
import { useState } from 'react'
import Home from './Home'
import axios from 'axios'
import { DoctorContext } from './Doctorprovider'
import { useContext } from 'react'
function Addnewdoctor() {
    const {setNewdoctor}=useContext(DoctorContext)
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const [specialization,setSpecialization]=useState('')
    const [salary,setSalary]=useState('')

    // const [newdoctor,setNewdoctor]=useState(null)
  async function handleform(e){
        e.preventDefault()
        let formdetails={id:Date.now(),name,age,gender,specialization,salary}
        setNewdoctor(formdetails)
        axios.post('https://doc-back.onrender.com/doctors',formdetails)
        alert('data posted to api ')
        console.log(formdetails)
    }

// async function deldata(id){
//     axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
//     alert(id,'deleted successfullly')
//     setNewdoctor('deleted')
// }

// async function upddata(id){
//     let data={
//         name:'John',
//         salary:485485,
//         age:34,
//         id:Date.now(),
//         specialization:'Bones'
//     }
//     axios.put(`https://doc-back.onrender.com/doctors/${id}`,data)
//     alert(id+ "updated")
//     setNewdoctor('updated')
// }


  return (
    <div>
        <h1>Add New Doctor</h1>
        <form action="" className='form-container' onSubmit={handleform} >
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter Doctor name'/>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}  placeholder='Enter Age'/>
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">others</option>
            </select>
            <input type="text" value={specialization} onChange={(e)=>setSpecialization(e.target.value)}  placeholder='Enter Specialization'/>
            <input type="text"value={salary} onChange={(e)=>setSalary(e.target.value)}  placeholder='Enter Salary'/>
            <button type='submit'>Add doctor</button>
        </form>
        {/* <Home deldata={deldata} upddata={upddata} newdoctor={newdoctor}/> */}
        <Home />
    </div>
  )
}

export default Addnewdoctor