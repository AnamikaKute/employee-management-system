import './App.css';
import AddEmployee from '../Components/AddEmployee/AddEmployee';
// import { Component } from 'react';
import EmployeeList from '../Components/EmployeeList/EmployeeList';
import ProjectList from '../Components/ProjectList/ProjectList';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<AddEmployee/>} />
          <Route path='/addemployee/:id' element={<AddEmployee/>} />
          <Route path='/employeelist' element={<EmployeeList/>} />
          <Route path='/projectlist' element={<ProjectList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
