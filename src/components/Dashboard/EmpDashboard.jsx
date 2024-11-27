import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = ({ data,setUser }) => {
  return (
    <div className='p-10'>
      <Header data={data} setUser={setUser} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmpDashboard