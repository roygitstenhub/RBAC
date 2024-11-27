import Login from "./components/auth/Login"
import EmpDashboard from "./components/Dashboard/EmpDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./context/AuthProvider"


function App() {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [userData,setUserData ]= useContext(AuthContext)

  useEffect(() => {
    const loggedInUser =JSON.parse(localStorage.getItem(''))
    console.log(loggedInUser)
    if (loggedInUser) {
      setUser(loggedInUser.role)
      setLoggedInUser(loggedInUser.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == 'adminPassword') {
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('emp')
        setLoggedInUser(employee)
      }
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'emp' }))
    } else {
      alert('Invalid credentials')
    }
  }



  return (
    <>
      {
        !user ? <Login handleLogin={handleLogin} /> : ''
      }
      {
        user == 'admin'? <AdminDashboard data={'Admin'} setUser={setUser} /> : (user == 'emp'? <EmpDashboard data={loggedInUser} setUser={setUser} /> :null )
      }
    </>
  )
}

export default App
