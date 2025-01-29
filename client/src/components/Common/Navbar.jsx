import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Common/Navbar.css"
import auth from '../../config/firebase'
import { signOut } from 'firebase/auth'
import { motion } from 'framer-motion'

import { RiMenu3Line } from "react-icons/ri";

function Navbar() {

  const navigate = useNavigate('')
  const [log, setLog] = useState(false)

  const [isDisabled, setIsDisabled] = useState(false)

  const [ismenuopen, setIsMenuOpen] = useState(false)
  function triggerMenu() {
    setIsMenuOpen(!ismenuopen)
  }

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setLog(true)
        console.log("loggen in")
      }
      else {
        setLog(false)
        console.log("logged out")
      }
    })
  }, [])

  function logout() {
    signOut(auth)
    setIsDisabled(true)
    alert("You have successfully logged out!")

  }
  return (
    <>
      <div className='py-5 px-3 flex flex-row md:flex-row justify-between items-center  bg-[#BDD6FF] shadow-lg sticky top-0 z-10 font-poppins '>
        <h2 className='text-2xl md:text-3xl font-bold  text-[#3368C0] font-pacifico'>Task-Whiz</h2>
        <div className='hidden md:block'>
          <Link className='list-none md:px-5 hover:cursor-pointer font-medium focus:underline  hover:text-[#3368C0]' to={"/home"}>Home</Link>
          <Link className='list-none px-5 hover:cursor-pointer font-medium focus:underline hover:text-[#3368C0]' to={"/dashboard"}>DashBoard</Link>
          <Link className='list-none px-5 hover:cursor-pointer font-medium focus:underline hover:text-[#3368C0]' to={"/about"}>About</Link>
          <Link className='list-none px-5 hover:cursor-pointer font-medium focus:underline hover:text-[#3368C0]' to={"/contact"}>Contact</Link>
        </div>
        <div className='hidden md:block'>
          {
            log ? <button className='bg-[#3368c0] text-white px-7 py-2 rounded-md mt-5 md:mt-0' onClick={logout}>LogOut</button> :
              <button className='bg-[#3368c0] text-white px-7 py-2 rounded-md mt-5 md:mt-0' onClick={() => navigate('/login')}>Login</button>
          }

        </div>
        <div className='md:hidden'>
          <RiMenu3Line className='size-7  text-[#3368C0]' onClick={triggerMenu} />
        </div>

      </div>
      <motion.div
      initial={{ x: "-100%" }} // Menu starts outside the screen
      animate={{ x: ismenuopen ? 0 : "-100%" }} // Animate based on ismenuopen
      transition={{ type: "spring", stiffness: 100, damping: 20 }} 
      className='mt-2 ml-5'
      >
        {ismenuopen ? (
          <>
            <div className='bg-'>
              <div className='flex flex-col md:hidden flex-wrap gap-6'>
                <Link className='list-none md:px-5 hover:cursor-pointer font-medium focus:underline  text-[#3368C0]' to={"/home"}>Home</Link>
                <Link className='list-none  hover:cursor-pointer font-medium focus:underline text-[#3368C0]' to={"/dashboard"}>DashBoard</Link>
                <Link className='list-none  hover:cursor-pointer font-medium focus:underline text-[#3368C0]' to={"/about"}>About</Link>
                <Link className='list-none  hover:cursor-pointer font-medium focus:underline text-[#3368C0]' to={"/contact"}>Contact</Link>
              </div>
              <div className='md:hidden'>
                {log ? <button className='bg-[#3368c0] text-white px-4 py-1   md:px-7 md:py-2 rounded-md mt-5 md:mt-0' onClick={logout}>LogOut</button> :
                  <button className='bg-[#3368c0] text-white px-4 py-1 md:px-7 md:py-2 rounded-md mt-5 md:mt-0' onClick={() => navigate('/login')}>Login</button>}

              </div>
            </div>

          </>
        ) : null}
      </motion.div>



    </>
  )
}

export default Navbar