import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({data,setUser}) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header data={data} setUser={setUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard