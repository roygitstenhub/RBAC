import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center text-white'>
            <div className='border-2 border-emerald-400 rounded-xl p-20'>
                
                <form action="" method="get" className='flex flex-col items-center justify-center ' onSubmit={handleSubmit}>
                <h2 className='font-bold text-[2rem] text-emerald-400' >Login🔐
                     </h2>
                    <input type="email" placeholder='Enter your email' className=' border-2 border-emerald-400 text-xl outline-none py-3 px-5 mt-3 placeholder:text-gray-400 rounded-full bg-transparent   ' onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <input type="password" placeholder='Enter your password' className=' border-2 border-emerald-400 text-xl outline-none py-3 px-5 mt-3 placeholder:text-gray-400 rounded-full bg-transparent  '
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button className=' mt-5 bg-emerald-500 py-3 px-8 text-white rounded-full placeholder:text-white text-lg w-full hover:bg-emerald-400  '>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login