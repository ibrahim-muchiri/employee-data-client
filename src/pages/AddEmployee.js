import { useState } from 'react';
import Axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom'

function AddEmployee() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [postion, setPosition] = useState('');
    const [wage, setWage] = useState('');
    const [employeeList, setEmployeeList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const createEmployee = (e) => {
        e.preventDefault();
            Axios.post("http://localhost:8000/create", {    
          name: name,
          age: age, 
          country: country,
          position: postion,
          wage: wage,
        }).then(() => {
          setEmployeeList([ ...employeeList, {
            name: name,
            age: age, 
            country: country,
            position: postion,
            wage: wage,
          },
        ]);
        //Sending the error to the user(rendering error)
          setErrorMessage("");
          }).catch((error)  =>{
            console.log(error);
            setErrorMessage(error);
            console.log('success');
          });
          };


  return (
  <div>
    <div className='information'>
  <label>Name:</label>
  <input type='text' onChange={(e) => {setName(e.target.value)}} />
  <label>Age:</label>
  <input type='number' onChange={(e) => {setAge(e.target.value)}} />
  <label>Country:</label>
  <input type='text' value={country} onChange={(e) => {setCountry(e.target.value)}}/>
  <label>Position:</label>
  <input type='text' onChange={(e) => {setPosition(e.target.value)}} />
  <label>Wage (years):</label>
  <input type='number' onChange={(e) => {setWage(e.target.value)}}/>
  <button onClick={createEmployee}>Add Employee</button>

  <Link to="/GetEmployee"><button>View employees</button></Link>

  {errorMessage!=="" &&<h2>Opps!! please try again</h2>}
 </div>
</div>
  )
}

export default AddEmployee
