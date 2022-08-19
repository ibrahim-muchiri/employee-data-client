import { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';

function GetEmployee() {
    const [employeeList, setEmployeeList] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);    

    

 //Getting the employeee
const getEmployees = () => {
    Axios.get("http://localhost:8000/employees").then((response) => { 
    setEmployeeList(response.data);      
});
 }

  //For Serching the employee  
  useEffect(()=>{
    setFilteredData(
      employeeList.filter((el)=> el.name.toLowerCase().includes(search.toLowerCase()))
     )
  }, [search, employeeList]);

  //for deleting employee
  const deleteEmployee = async (id) => {
   await Axios.delete(`http://localhost:8000/delete/${id}`);
   getEmployees();
}



  return (
   <div>
   <div className='search'>
    <div className='search-input'>
      <input type='text' placeholder='search...'
    onChange={((e)=>{setSearch(e.target.value)})} />
    <div className='searchIcon'> <FcSearch /> </div>
    </div>
    </div>
   
   {/* Getting data from the database */}
     <div className='employees'>
      <div>
  <button onClick={getEmployees}>Emplloyees list</button>
  <Link to='/AddEmployee'>Back</Link>
  </div>

{/* Posting Data to the database */}
     {filteredData.map((val, key) => {
  return (<div className='employee' key={val.id}>     
  <h3>Name: {val.name}</h3>
  <h3>Age: {val.age}</h3>
  <h3>Country: {val.country}</h3>
  <h3>Position: {val.position}</h3>
  <h3>Wage: {val.wage}</h3>
  <Link to="/EditEmployee"><h3><button>update</button></h3></Link>
  <button onClick={ () => deleteEmployee(val.id) } className="button is-small is-danger">Delete</button>
  </div>);
 })}
 </div>
 </div>
  )
}

export default GetEmployee
