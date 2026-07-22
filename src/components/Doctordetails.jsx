import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Doctordetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState();
  // it is used to get the dynamic data from url\
  async function fetchdata() {
  try{
    let api=await axios.get('https://doc-back.onrender.com/doctors')
    let doctor = api.data.find((val) => val.id == id);
    setDoctor(doctor);
  }catch(err){
    console.log(err)
  }

  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {doctor && (
        <div>
          <h1>Doctor name - {doctor.name}</h1>
          <div>Age - {doctor.age}</div>
          <div>Specialization - {doctor.specialization}</div>
          <div>gender - {doctor.gender}</div>
          <div>salary - {doctor.salary}</div>
        </div>
      )}
    </div>
  );
}

export default Doctordetails;
