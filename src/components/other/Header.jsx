import React from 'react'

const Header = ({data,setUser}) => {
  console.log("data",data)

  const logoutUser = ()=>{
    localStorage.setItem('loggedInUser',' ')
    setUser('')
  }

  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium '>Hello <span className='text-2xl font-semibold'>{data.firstName} 👋</span> </h1>
        <button className='bg-red-600 text-white  px-5 py-2 font-semibold rounded-md' onClick={logoutUser} >Log out</button>
    </div>
  )
}

export default Header