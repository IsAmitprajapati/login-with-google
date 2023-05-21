import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import User from './ContextApi'

function App() {
  const [data,setData] = useState({
    name : "",
    img : "",
    email : "",
    accessToken : ""
  })

  return (
    <>
    <User.Provider value={{data,setData}}>
          <Outlet/>
    </User.Provider>
     
    </>
  )
}

export default App
