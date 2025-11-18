import './App.css';
import AddEmployee from '../Components/AddEmployee/AddEmployee';
import { Component } from 'react';
import EmployeeList from '../Components/EmployeeList/EmployeeList';
function App() {
  return (
    <div className="App">
      {/* <AddEmployee/> */}
      <EmployeeList/>
    </div>
  );
}

export default App;
