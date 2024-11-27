import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen text-white px-4 '>
        <div className=' px-9  py-6 w-[45%] rounded-xl bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className=' px-9  py-6 w-[45%] rounded-xl bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>completed
            </h3>
        </div>

        <div className=' px-9  py-6 w-[45%] rounded-xl bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>active</h3>
        </div>

        <div className=' px-9  py-6 w-[45%] rounded-xl bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>failed</h3>
        </div>
    </div>
  )
}

export default TaskNumber