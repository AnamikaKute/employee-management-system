export default function EmployeeList(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div>
                <table className="table-auto  bg-gradient-to-r from-blue-500 to-purple-600 text-black w-[800px] border border-black-300 rounded-lg shadow-lg overflow-hidden">
                    
                    <tr>
                        <th colSpan="6" className="text-center text-lg py-3">Employee List</th>
                    </tr>

                    <tr>
                    <th className="border px-6 py-3 text-center">Full Name</th>
                    <th className="border px-6 py-3 text-center">Employee ID</th>
                    <th className="border px-6 py-3 text-center">Job Role</th>
                    <th className="border px-6 py-3 text-center">Project Name</th>
                    <th className="border px-6 py-3 text-center">Salary</th>
                    <th className="border px-6 py-3 text-center">Email</th>
                    </tr>
                    <tr>
                        <td className="border px-6 py-3 text-center">Anamika</td>
                        <td className="border px-6 py-3 text-center">7658</td>
                        <td className="border px-6 py-3 text-center">Developer</td>
                        <td className="border px-6 py-3 text-center">Blog App</td>
                        <td className="border px-6 py-3 text-center">20k</td>
                        <td className="border px-6 py-3 text-center">abc</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}