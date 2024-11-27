import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {

        // const data = useContext(AuthContext)
        const [userData,setUserData ]= useContext(AuthContext)
        return (
                <div className='p-5 rounded mt-5  h-60'>
                        <div className='bg-emerald-600 text-white mb-2 py-2 px-4 flex justify-between rounded '>
                                <h2 className='w-1/5 font-semibold '>Employee Name</h2>
                                <h3 className='w-1/5 font-semibold '>New Task</h3>
                                <h5 className='w-1/5 font-semibold '>Active Task</h5>
                                <h5 className='w-1/5 font-semibold '>Completed</h5>
                                <h5 className='w-1/5 font-semibold '>Failed</h5>
                        </div>
                        <div className=' overflow-auto'>
                                {
                                        userData && userData.map((item,index) => {
                                                return <div id={index+2} className=' mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-500 '>
                                                        <h2 className='w-1/5 font-medium text-white '>{item.firstName}</h2>
                                                        <h3 className='w-1/5 font-medium text-yellow-600'>{item.taskCount.newTask}</h3>
                                                        <h5 className='w-1/5 font-medium text-blue-600'>{item.taskCount.active}</h5>
                                                        <h5 className='w-1/5 font-medium text-green-600'>{item.taskCount.completed}</h5>
                                                        <h5 className='w-1/5 font-medium text-red-600'>{item.taskCount.failed}</h5>
                                                </div>
                                        })
                                }
                        </div>
                </div>
        )
}

export default AllTask