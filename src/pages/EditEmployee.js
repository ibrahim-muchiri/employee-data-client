import Axios from 'axios';
import { useEffect, useState } from 'react';
// 
// import { useParams } from 'react-router';
// 
function EditEmployee() {
    // const id = useParams();
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [country, setCountry] = useState('');
    // const [postion, setPosition] = useState('');
    // const [wage, setWage] = useState('');

    const [newWage, setNewWage] = useState('');

const updateHandler = async() =>{
    const data = {  
        // id: id,
        wage: newWage
    }
    await Axios.put("http://localhost:8000/update", data).then((response)=>{
      console.log(response);
    });
}
useEffect(() =>{
}, []);

// 
// 
  return (
    <div>
     <div className='information'>
        <h2>Update Data</h2>
      {/* <label>Name:</label> */}
       {/* <input type='text' onChange={(e) => {setName(e.target.value)}} /> */}
        {/* <label>Age:</label> */}
        {/* <input type='number' onChange={(e) => {setAge(e.target.value)}} /> */}
         {/* <label>Country:</label> */}
         {/* <input type='text' onChange={(e) => {setCountry(e.target.value)}}/> */}
         {/* <label>Position:</label> */}
          {/* <input type='text' onChange={(e) => {setPosition(e.target.value)}} /> */}
       {/* <label>Wage (years):</label> */}
     {/* <input type='number' onChange={(e) => {setWage(e.target.value)}}/> */}

     <input type='number' onChange={(e) => {setNewWage(e.target.value)}}/>
   <div>
      <button onClick={updateHandler}>edit</button>
     <button>cancel</button>
     </div>
     </div>;
   </div>
  )
}
// 
export default EditEmployee


