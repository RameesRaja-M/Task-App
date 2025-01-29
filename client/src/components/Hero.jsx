import React from 'react'
import hero from "../assets/images/Hero.png"
import { Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
function Hero() {
  const navigate = useNavigate()
  return (
    <>
    {/* Hero Section */}
          <section>
            <div  className='flex flex-col m-3 p-2 text-center md:text-start md:flex-row md:justify-between md:mt-20'>
              <motion.div 
              
              initial={{opacity:0,translateX:"-100%"}}
              whileInView={{opacity:1,translateX:0}}
              transition={{duration:2}}
              
              className='flex flex-col gap-4 md:ml-32 md:mt-24  md:w-[600px]'>
                <h1 className='text-3xl font-pacifico text-[#3368C0] md:text-5xl '>Task Manager</h1>
                <h2 className='text-xl text-[#3368C0] font-semibold md:text-3xl  '>Simplify Your Workday with Smart Task Management.</h2>
                <p className='font-poppins hidden md:block'>Plan, organize, and execute tasks effortlessly with our intuitive tools—set priorities, track progress, and meet deadlines seamlessly.</p>
                <button onClick={()=>navigate("/dashboard")} className='bg-[#3368c0] text-white px-2 py-2 rounded-md w-fit ml-[120px] md:ml-0'>Get Started</button>
              </motion.div>
              <motion.div
              
              initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:2}}
              
              className='md:mr-20 mt-2'>
                <img src={hero} className='w-[600px]' alt="Hero Image"></img>
              </motion.div>
            </div>
          </section>
    </>
  )
}

export default Hero