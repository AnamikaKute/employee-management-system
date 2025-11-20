import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
export default function AddEmployee() {
  const navigate = useNavigate()
  const { id } = useParams();
  const navigateToEmployeeList = () => {
  }
  const [fullName, setFullName] = useState("")
  const [employeeId, setEmployeeId] = useState("")
  const [jobRole, setJobRole] = useState("")
  const [projectName, setProjectName] = useState("")
  const [salary, setSalary] = useState("")
  const [email, setEmail] = useState("")

  function handleNameChange(event) {
    setFullName(event.target.value)
  }
  function handleEmployeeIdChange(event) {
    setEmployeeId(event.target.value)
  }
  function handleJobRoleChange(event) {
    setJobRole(event.target.value)
  }
  function handleProjectNameChange(event) {
    setProjectName(event.target.value)
  }
  function handleSalaryChange(event) {
    setSalary(event.target.value)
  }
  function handleEmailChange(event) {
    setEmail(event.target.value)
  }
  useEffect(() => {
  if (id) {
    axios.get("http://localhost:4200/employees/"+ id)
      .then((res) => {
        setFullName(res.data.fullName);
        setEmployeeId(res.data.employeeId);
        setJobRole(res.data.jobRole);
        setProjectName(res.data.projectName);
        setSalary(res.data.salary);
        setEmail(res.data.email);
      })
      .catch((err) => {
        console.log("Error loading employee:", err);
      });
  }
}, [id]);

  function handleSaveChange() {
    const employeeData = {
      fullName, employeeId, jobRole, projectName, salary, email

    }
    // Updates existing student
    if (id) {
      axios.put("http://localhost:4200/employees/" + id,  employeeData )
        .then(() => {
          navigate('/employeelist')

        })
        .catch((error) => {
          console.log(error);

        })
    } else {
      axios.post("http://localhost:4200/employees", employeeData)
        .then((response) => {
          console.log(response.data);

          setFullName("")
          setEmployeeId("")
          setJobRole("")
          setProjectName("")
          setSalary("")
          setEmail("")

        }).catch((error) => {
          console.log("Error posting employee:", error);
        });
      navigate('/employeelist')

      console.log(employeeData);
    }
  }
  function handleCancelChange() {

    navigate('/projectlist')
  }


  return (

    <div className=" h-screen overflow-hidden flex justify-center items-center">

      <div className="p-8 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 w-[400px]">

        <div className="text-lg text-center mb-8 font-bold text-2xl">
          Add Employee Form
        </div>


        <div>
          <div><label className="block font-medium mb-1">Full Name</label></div>
          <div><input type="text" className="p-2 w-full rounded-md " placeholder="full name" value={fullName} onChange={handleNameChange}
          /></div>
        </div>

        <div>
          <div>   <label className="block font-medium mb-1 ">Employee ID</label></div>
          <div>   <input type="text" className="p-2 w-full rounded-md" placeholder="employee ID" value={employeeId} onChange={handleEmployeeIdChange}
          /></div>
        </div>

        <div>
          <div>   <label className="block font-medium mb-1">Job Role</label></div>
          <div>   <input type="text" className="p-2 w-full rounded-md" placeholder="job role" value={jobRole} onChange={handleJobRoleChange}
          /></div>
        </div>

        <div>
          <div> <label className="block font-medium mb-1">Project Name</label></div>
          <div>   <input type="text" className="p-2 w-full rounded-md" placeholder="project" value={projectName} onChange={handleProjectNameChange}
          /></div>
        </div>

        <div>
          <div>  <label className="block font-medium mb-1">Salary</label></div>
          <div>   <input type="number" className="p-2 w-full rounded-md" placeholder="salary" value={salary} onChange={handleSalaryChange}
          /></div>
        </div>

        <div>
          <div>  <label className="block font-medium mb-1">Email</label></div>
          <div>   <input type="email" className="p-2 w-full rounded-md" placeholder="email" value={email} onChange={handleEmailChange}
          /></div>
        </div>

        <div className="flex  items-center gap-10 mt-5" >
          <div className=" font-semibold"> <button
            type="submit" onClick={handleSaveChange} className="p-3 text-white rounded-md bg-indigo-700 "

          >
            Save Employee
          </button>
          </div>
          <div>
            <button onClick={handleCancelChange} className="p-3 text-white rounded-md bg-indigo-700 font-semibold " >Cancel</button>
          </div>
        </div>
      </div>
    </div>

  )
}