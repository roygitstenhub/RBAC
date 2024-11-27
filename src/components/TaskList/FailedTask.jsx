import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-red-400 '>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded-md'>{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitl}</h2>
      <p className='mt-2 text-sm'>{data.taskDescription}</p>

      <div className='flex justify-between mt-4'>
        <button className='bg-emerald-600 py-1 px-2 text-sm  rounded' >Accept Task</button>
        <button className='bg-red-600 py-1 px-2 text-sm rounded' >Reject Task</button>
      </div>
    </div>
  )
}

export default FailedTask