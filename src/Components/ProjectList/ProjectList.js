export default function ProjectList() {
    return (
        <div className=" flex justify-center items-center h-screen">
            <div className=" w-[400px] shadow-2xl  bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden rounded-lg p-8 bg-white">
                <div>
                <div className="text-center text-lg ">Project Details</div>
                <div><button className="px-4 py-2 bg-">Add Project</button></div>
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between  ">
                        <span>Project Name</span>
                        <span>Blog App</span>

                    </div>
                    <div className="flex justify-between  ">
                        <span>Developer Name:</span>
                        <span> Ana</span>
                    </div>
                    <div className="flex justify-between ">
                        <span> Technologies Used:</span>
                        <span>React Js</span>

                    </div>
                    <div className="flex justify-between ">
                        <span>  Status:</span>
                        <span>In Progress</span>

                    </div>
                </div>
                <div>
                    <div className="flex justify-center"><button className="px-4 py-2 bg-rose-800 text-white rounded-lg">View More</button></div>
                    {/* <div></div>  */}
                    <div className="flex justify-between ">
                        <div><button className="px-4 py-2 bg-violet-900 text-white rounded-lg ">Edit </button></div>
                        <div><button className="px-4 py-2 bg-blue-800  text-white rounded-lg">Delete</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}