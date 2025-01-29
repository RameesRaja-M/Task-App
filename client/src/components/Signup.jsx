import React, { useState } from 'react'
import signupImage from "../assets/images/signup.png"
import { Navigate, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../config/firebase'
import { useEffect } from 'react'
import axios from 'axios'

function Signup() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")


 // API URL 
 const serverURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
    auth.onAuthStateChanged(function (user) {
      if (user) {
        navigate("/dashboard")
      }

    })
  }, []);

  const handlesubmit = async(e) => {
    
    e.preventDefault();
    if (password !== confirmpassword) {
      setError("password do not match")
      return;
    }


    await createUserWithEmailAndPassword(auth, email, password).then(async (res) => {
      console.log(res._tokenResponse)
      const uid = res.user.uid
      try {
        await axios.post(`${serverURL}/api/signup`, {
          uid: uid,
          email: email
        });
        console.log("User data sent to MongoDB");
        navigate('/login');
      } catch (error) {
        console.error("Error saving user to MongoDB", error);
      }
      navigate('/login')
    }).catch(() => {
      console.log("Failed to add user")
    })

    navigate('/login')
  }

  return (
    <>
      <div className='flex justify-center mt-6 font-poppins  '>
        <div className='w-[500px] bg-blue-400 rounded-sm hidden md:block'>
          <img src={signupImage} alt="2" />
        </div>
        <div>

          {/* Form */}

          <form onSubmit={handlesubmit} className="p-5 md:p-12 bg-[#BDD6FF]  shadow-md md:w-[900px] " >
            <h2 className="text-3xl md:text-4xl font-bold md:mb-10 text-[#3368C0] mb-5 mt-5 font-pacifico">Sign up</h2>

            {/* Email */}

            <div>
              <label className="block text-black">Email:</label>
              <input type="email"
                placeholder='Enter a email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded  border-b border-black " />
            </div>

            {/* Password */}

            <div className="mb-4 mt-3">
              <label className="block text-black">Password:</label>
              <input type="password"
                placeholder='Enter a Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded border-black" />
            </div>

            {/* Confirm Password */}

            <div className="mb-4 mt-3">
              <label className="block text-black">Conform Password:</label>
              <input type="password"
                placeholder='Enter a confirm Password'
                required
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded border-black" />
            </div>
            <p className="text-red-500 text-sm mt-2">{error}</p>
            <p className='mt-3 '>Already have an account ?
              <span onClick={() => navigate("/login")} className='underline cursor-pointer hover:text-blue-700 w-fit'> Login Here</span></p>

            {/* Button */}

            <button type="submit" className="bg-[#3368C0] text-white px-7 py-2 rounded-md transition duration-200 ease-in-out mt-5">
              Sign up
            </button>
          </form>

        </div>

      </div>
    </>
  )
}

export default Signup