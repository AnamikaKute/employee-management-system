
export default function AddEmployee() {
  return (
    <div className=" h-screen overflow-hidden flex justify-center items-center">

      <div className="p-8 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 w-[400px]">

        <div className="text-lg text-center mb-8 font-bold text-2xl">
          Add Employee Form
        </div>


        <div>
          <div><label className="block font-medium mb-1">Full Name</label></div>
          <div>   <input type="text"   className="p-2 w-full rounded-md " placeholder="full name"
          /></div>
        </div>

        <div>
          <div>   <label className="block font-medium mb-1 ">Employee ID</label></div>
          <div>   <input type="text" className="p-2 w-full rounded-md" placeholder="employee ID"
          /></div>
        </div>

        <div>
          <div>   <label className="block font-medium mb-1">Job Role</label></div>
          <div>   <input type="text" className="p-2 w-full rounded-md" placeholder="job role"
          /></div>
        </div>

        <div>
          <div> <label className="block font-medium mb-1">Project Name</label></div>
          <div>   <input type="text" className="p-2 w-full rounded-md" placeholder="project"
          /></div>
        </div>

        <div>
          <div>  <label className="block font-medium mb-1">Salary</label></div>
          <div>   <input type="number" className="p-2 w-full rounded-md" placeholder="salary"
          /></div>
        </div>

        <div>
          <div>  <label className="block font-medium mb-1">Email</label></div>
          <div>   <input type="email" className="p-2 w-full rounded-md" placeholder="email"
          /></div>
        </div>

        <div className="flex  items-center gap-10 mt-5" >
          <div className=" font-semibold"> <button
            type="submit" className="p-3 text-white rounded-md bg-indigo-700 "

          >
            Save Employee
          </button>
          </div>
          <div>
            <button className="p-3 text-white rounded-md bg-indigo-700 font-semibold">Cancel</button>
          </div>
        </div>
      </div>
    </div>

  )
}