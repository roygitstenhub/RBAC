import React, { useState ,useContext} from 'react'
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {
    const [userData,setUserData ]= useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignedTo, setAssignedTo] = useState('')
    const [category, setCategory] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const obj = { taskTitle, taskDate, category, taskDescription, newTask: true, active: true, completed: false, failed: false }
        const data = userData
        userData.forEach((item) => {
            if (assignedTo == item.firstName) {
                item.tasks.push(obj)
                item.taskCount.newTask = item.taskCount.newTask+1
                console.log(item)
            }
        })
        setUserData(data)
        localStorage.setItem('emp', JSON.stringify(data))
        setTaskTitle('')
        setAssignedTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
    }



    return (
        <div className='p-5 mt-7 rounded bg-[#34333324] text-white '>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2 flex flex-col gap-2'>
                    <div>
                        <h3 className='text-sm  text-slate-400 mb-0.5'>Task Title</h3>
                        <input type="text" placeholder='Make a ui design' className='text-sm px-2 py-2 w-4/5 rounded outline-none bg-transparent border-[1px]' value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm  text-slate-400 mb-0.5'>Date</h3>
                        <input type="date" className='text-sm px-2 py-2 w-4/5 rounded outline-none bg-transparent border-[1px]' value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
                    </div>
                    <div>
                        <h3 className='text-sm  text-slate-400 mb-0.5'>Assign To</h3>
                        <input type="text" placeholder='Employee name' className='text-sm px-2 py-2 w-4/5 rounded outline-none bg-transparent border-[1px]' value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
                    </div>
                    <div>
                        <h3 className='text-sm  text-slate-400 mb-0.5'>Catagory</h3>
                        <input type="text" placeholder='Design ,dev,etc' className='text-sm px-2 py-2 w-4/5 rounded outline-none bg-transparent border-[1px]' value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>

                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm  text-slate-400 mb-1'>Description</h3>
                    <textarea name="" id="" cols="30" rows="10" className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]  border-gray-300' placeholder='Brief task' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}  ></textarea>
                    <button type='submit' className='bg-emerald-500 font-semibold text-white hover:bg-emerald-600 px-5 py-3 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask