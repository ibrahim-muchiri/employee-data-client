import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import swal from 'sweetalert'

export const AddEmployee = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [postion, setPosition] = useState('');
    const [wage, setWage] = useState('');
    const [employeeList, setEmployeeList] = useState([]);
    const [show, setShow] = useState(false);  
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () => setShowAlert(true);

    const handleShowAlert = () => {
      setShowAlert(true);
      setTimeout(()=>{
        setShowAlert(false);
      }, 2000);
    }

    const createEmployee = (e) => {
        e.preventDefault();
        const details = {
          name: name,
          age: age, 
          country: country,
          position: postion,
          wage: wage,
        }
            Axios.post("http://localhost:8000/create", details);
            
              swal({
                title: "Success!",
                text: "Created successfully!",
                icon: "success",
                button: "OK!",
              })
            .then(() => {
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

          // useEffect(()=>{
            // handleClose();
            // return()=>{
              // handleShowAlert();
            // }
            // }, []);

  return (
  <div>

  <div>
<Alert show={showAlert} variant="success"> 
    Created successfully!
    </Alert>
    </div>
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
