import './AddEmployee.css'

export default function AddEmployee() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">

                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Add Employee Form
                </h2>

                <form className="space-y-4">

                    <div>
                        <label className="block font-medium mb-1">Full Name</label>
                        <input type="text" placeholder="full name"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none" />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Employee ID</label>
                        <input type="text" placeholder="employee ID"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none" />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Job Role</label>
                        <input type="text" placeholder="job role"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none" />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Project</label>
                        <input type="text" placeholder="project"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none" />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Salary</label>
                        <input type="number" placeholder="salary"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none" />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input type="email" placeholder="email"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-navy-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Save Employee
                    </button>
                    <button type='submit' className='w-full bg-red text-white py-2 rounded-md hover:bg-red-700 transition'>
                        Cancel Employee
                    </button>
                </form>

            </div>
        </div>

    )
}