import React from 'react'
import add from "../assets/images/Add.png"
import read from '../assets/images/Read.png'
import check from '../assets/images/Check.png'
import del from '../assets/images/Delete.png'
import pin from '../assets/images/Pin.png'
// Framer Motion
import { motion } from 'framer-motion'
function Features() {
    return (
        <>
            <div className='overflow-hidden'>
                <motion.div
                
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}

                className='flex flex-wrap items-center justify-center mt-32 gap-5 p-2 md:gap-20 text-center md:text-start '>
                    <div className='flex flex-col gap-3 mb-0 md:mb-10 w-[500px] '>
                        <h2 className='text-3xl text-[#3368C0] font-poppins font-bold md:text-5xl'>Create and Manage Tasks Effortlessly</h2>
                        <p className='text-xl'>Add tasks with just a few clicks, assign deadlines, set priorities, and track progress in real time.</p>
                    </div>
                    <div className=' md:mb-10'>
                        <img className='w-[250px] md:w-[400px]' src={add} alt="Create Image" />
                    </div>
                </motion.div>

                <motion.div
                
                initial={{ opacity: 0, translateX: "+100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}
                
                className='flex flex-wrap-reverse items-center justify-center mt-10 gap-5 p-2 md:gap-20 text-center md:text-start '>
                    <div className=' md:mb-10'>
                        <img className='w-[250px] md:w-[400px]' src={read} alt="Create Image" />
                    </div>
                    <div className='flex flex-col gap-3 mb-0 md:mb-10 w-[500px] '>
                        <h2 className='text-3xl text-[#3368C0] font-poppins font-bold md:text-5xl'>Read and Stay on Top of Every Task</h2>
                        <p className='text-xl'>Quickly review task details, deadlines, and priorities in one organized view.</p>
                    </div>

                </motion.div>

                <motion.div 
                
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}
                
                className='flex flex-wrap items-center justify-center mt-10 gap-5 p-2 md:gap-20 text-center md:text-start '>
                    <div className='flex flex-col gap-3 mb-0 md:mb-10 w-[500px] '>
                        <h2 className='text-3xl text-[#3368C0] font-poppins font-bold md:text-5xl'>Check Tasks with Ease</h2>
                        <p className='text-xl'>Track progress effortlessly by marking completed tasks and reviewing pending ones..</p>
                    </div>
                    <div className=' md:mb-10'>
                        <img className='w-[250px] md:w-[400px]' src={check} alt="Create Image" />
                    </div>
                </motion.div>

                <motion.div
                
                initial={{ opacity: 0, translateX: "+100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}
                
                className='flex flex-wrap-reverse items-center justify-center mt-10 gap-5 p-2 md:gap-20 text-center md:text-start '>
                    <div className=' md:mb-10'>
                        <img className='w-[250px] md:w-[400px]' src={del} alt="Create Image" />
                    </div>
                    <div className='flex flex-col gap-3 mb-0 md:mb-10 w-[500px] '>
                        <h2 className='text-3xl text-[#3368C0] font-poppins font-bold md:text-5xl'>Delete Tasks with Confidence</h2>
                        <p className='text-xl'>Easily remove tasks you no longer need, keeping your workspace clutter-free.</p>
                    </div>

                </motion.div>

                <motion.div 
                
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}
                
                className='flex flex-wrap items-center justify-center mt-10 gap-5 p-2 md:gap-20 text-center md:text-start '>
                    <div className='flex flex-col gap-3 mb-0 md:mb-10 w-[500px] '>
                        <h2 className='text-3xl text-[#3368C0] font-poppins font-bold md:text-5xl'>Pin Tasks for Quick Access</h2>
                        <p className='text-xl'>Keep your most important tasks front and center by pinning them to the top. </p>
                    </div>
                    <div className=' md:mb-10'>
                        <img className='w-[250px] md:w-[400px]' src={pin} alt="Create Image" />
                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default Features