export default function ProjectList(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div className=" w-[400px] shadow-2xl  bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden rounded-lg p-8 bg-white">
                <div className="text-center text-lg ">Project Details</div>
                <div>Developer Name</div>
                <div>Technologies Used</div>
                <div>Status</div>
                 
                <div><button>View More</button></div>
                <div></div>
                <div>
                <div><button>Edit </button></div>
                <div><button>Delete</button></div>
                </div>
            </div>
        </div>
    )
}