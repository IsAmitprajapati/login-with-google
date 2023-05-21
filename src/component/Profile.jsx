import React, { useContext } from 'react'
import User from '../ContextApi'
import { Navigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { app } from '../firebase';

const Profile = () => {
    const {data,setData} = useContext(User)

    console.log(data)

    if(!data.accessToken) return <Navigate to={"/"}/>


    const handleLogout = ()=>{
        const auth = getAuth(app)
        signOut(auth).then(()=>{
            alert("Sign-out successful.")
        })
        setData({
                name : "",
                img : "",
                email : "",
                accessToken : ""
              })
    }

  return (
    <div className='profileContainer'>
        <div className='image'>
            <img src={data.img || ""}/>
        </div>
        <div className='name'>{data.name}</div>
        <div className='email'>{data.email}</div>

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile