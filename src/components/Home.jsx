import React, { useState, useEffect } from "react";
import Doctorcard from "./Doctorcard";
import axios from "axios";

function Home({ newdoctor,deldata,upddata }) {

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  async function fetchdata() {
    
        let api=await axios.get('https://doc-back.onrender.com/doctors')
  
    setDoctors(api.data);
  }


  useEffect(() => {
    fetchdata();
  }, [newdoctor]);

  const filtereddoctors = doctors.filter((val) => {
    return (
      val.name.toLowerCase().includes(search.toLowerCase()) &&
      (specialization == "" || val.specialization == specialization)
    );
  });
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search doctor name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-field"
        />
        <select
          name=""
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="text-field"
        >
          <option value="Bones">Bones</option>
          <option value="Muscles">Muscles</option>
          <option value="Heart">Heart</option>
        </select>
      </div>

      <div className="doctorcontainer">
        {filtereddoctors.length > 0 ? (
          filtereddoctors.map((doctor) => {
            return (
              <Doctorcard
              deldata={deldata}
              upddata={upddata}
                name={doctor.name}
                key={doctor.id}
                specialization={doctor.specialization}
                gender={doctor.gender}
                id={doctor.id}
              />
            );
          })
        ) : (
          <h2>no doctors found</h2>
        )}
      </div>
    </>
  );
}

export default Home;
