import React from 'react'
import AddEmployee from './pages/AddEmployee';
import GetEmployee from './pages/GetEmployee';
import EditEmployee from './pages/EditEmployee';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  //Switch,
  //Link,
  //Redirect,
 } from 'react-router-dom';
 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/AddEmployee' element={<AddEmployee />}/>
          <Route exact path='/GetEmployee' element={<GetEmployee />}/>
          <Route exact path='/EditEmployee' element={<EditEmployee />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
