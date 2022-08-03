//import { Axios } from 'axios';
import { useState } from 'react'

function EditEmployee() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState('');

  // const updateEmployee = (id)=>{
    // Axios('http://localhost:8000/update', {
      // id: id,
      // name: name,
      // age: age, 
      // country: country,
      // position: position,
      // wage: wage,
    // })

  // }

  return (
    <div>
       <input type='text' value={name} onChange={(e) => {setName(e.target.value)}} />
       <input type='text' value={age} onChange={(e) => {setAge(e.target.value)}} />
       <input type='text' value={country} onChange={(e) => {setCountry(e.target.value)}} />
       <input type='text' value={position} onChange={(e) => {setPosition(e.target.value)}} />
       <input type='text' value={wage} onChange={(e) => {setWage(e.target.value)}} />

       <button>updtae</button>
       <button>cancel</button>
      
    </div>
  )
}

export default EditEmployee
