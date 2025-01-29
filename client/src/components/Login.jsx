import React, { useContext, useEffect, useState } from 'react'
import "../index.css"
import { Navigate, useNavigate } from 'react-router-dom'
import loginImage from "../assets/images/Login.png"
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../config/firebase'

// UseContext for User Context
import { UserContext } from './Context/UserContext'

function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  // Store UseState's
  const {setUser} = useContext(UserContext)

  useEffect(()=>{
    window.scrollTo(0,0)
    auth.onAuthStateChanged(function (user) {
      if (user) {
      ('/dashboard')
      }
    })
  }, [])

  const handlelogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
  
      // Store UID & Email in useContext for UserContext
      setUser({
        uid: user.uid,
        email: user.email,
      });
  
      console.log("User ID:", user.uid);
      console.log("User Email:", user.email);
  
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error(err); // Log the error (optional)
      setError("Error signing in, please try again"); // Set error message
    }
  };
  return (
    <>
      <div className='flex justify-center mt-6 font-poppins '>
        <div className='w-[500px] bg-blue-400 rounded-sm hidden md:block'>
          <img src={loginImage} alt="1" />
        </div>
        <div>

           {/* Form */}

          <form onSubmit={handlelogin} className="p-10 md:p-16 bg-[#BDD6FF] shadow-md md:w-[900px] " >
            <h2 className="text-3xl md:text-4xl font-bold md:mb-10 text-[#3368C0] mb-5 mt-5 font-pacifico">Login</h2>

            {/* Email */}

            <div>
              <label className="block text-black">Email:</label>
              <input type="email" 
              placeholder='Enter a email' 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-7 py-2 w-full border rounded  border-b border-black " />
            </div>

            {/* Password */}

            <div className="mb-4 mt-5">
              <label className="block text-black">Password:</label>
              <input type="password" 
              placeholder='Enter a Password' 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-7 py-2 w-full border rounded border-black" />
            </div>

            <p className='text-red-500'>{error}</p>
            <p className='mt-5 '>New User ? 
              <span  onClick={()=>navigate("/signup")} className='underline cursor-pointer hover:text-blue-700 w-fit'> Register Here</span></p>

               {/* Button */}

            <button type="submit" className="bg-[#3368C0] text-white px-7 py-2 rounded-md transition duration-200 ease-in-out mt-5 md:mt-7">
              Login
            </button>
          </form>

        </div>

      </div>
    </>
  )
}

export default Login