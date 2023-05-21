import React, { useContext } from 'react'
import googleLogo from "../assets/GoogleLogo.png"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase';
import User from '../ContextApi';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const {data,setData} = useContext(User)
    const navigate = useNavigate()

    const handleLogin = async()=>{
        const auth = await getAuth(app)
        const provider = new GoogleAuthProvider()
        const userData = await signInWithPopup(auth,provider)
        console.log(userData)
        setData({
            name : userData.user.displayName,
            img : userData.user.photoURL,
            email : userData.user.email,
            accessToken : userData.user.accessToken,
        })

        if(userData.user.accessToken){
            navigate("/profile")
        }
    }
    
  return (
    <div className='loginContainer' onClick={handleLogin}>
        <img src={googleLogo}/>
        <div className='title'>Login with Google</div>
    </div>
  )
}

export default Login