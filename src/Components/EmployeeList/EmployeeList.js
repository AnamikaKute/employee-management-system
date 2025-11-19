import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
export default function EmployeeList() {

    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4200/employees")
            .then((response) => {
                setEmployees(response.data)
                console.log("Employees", response.data);

            })
            .catch((error) => {
                console.log(error);

            })
    }, []);
    return (

        <div className="flex justify-center items-center h-screen">
            <div>
                <table className="table-auto  bg-gradient-to-r from-blue-500 to-purple-600 text-black w-[800px] border border-black-300 rounded-lg shadow-lg overflow-hidden">

                    <tr>
                        <th colSpan="6" className=" text-center text-lg py-3">Employee List</th>
                    </tr>

                    <tr>
                        <th className="border px-6 py-3 text-white  text-center">Full Name</th>
                        <th className="border px-6 py-3 text-white text-center">Employee ID</th>
                        <th className="border px-6 py-3 text-white text-center">Job Role</th>
                        <th className="border px-6 py-3 text-white text-center">Project Name</th>
                        <th className="border px-6 py-3 text-white text-center">Salary</th>
                        <th className="border px-6 py-3 text-white text-center">Email</th>
                        <th className="p-3 font-semibold text-white border">Actions</th>

                    </tr>
                    {employees.map((singleemployee) => {
                        return (
                            <tr key={singleemployee.id}>
                                <td className="border px-6 py-3 text-white text-center">{singleemployee.fullName}</td>
                                <td className="border px-6 py-3 text-white text-center">{singleemployee.employeeId}</td>
                                <td className="border px-6 py-3 text-white text-center">{singleemployee.jobRole}</td>
                                <td className="border px-6 py-3 text-white text-center">{singleemployee.projectName}</td>
                                <td className="border px-6 py-3 text-white text-center">{singleemployee.salary}</td>
                                <td className="border px-6 py-3 text-white text-center">{singleemployee.email}</td>
                                <td className=" border p-4 flex  gap-3 ">
                                    <button className="bg-blue-600  text-white px-3 py-1 rounded-md">
                                        Edit
                                    </button>
                                    <button className="bg-teal-600 text-white px-3 py-1 rounded-md">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </table>
            </div>
        </div>
    )
}