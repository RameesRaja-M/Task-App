import React from 'react'
import { motion } from 'framer-motion'

function Review() {
    return (
        <>
            <section className="  mt-10 mb-10 md:m-10 ">
                <h1 className=" text-3xl md:text-4xl mt-5 text-center text-[#3368C0] font-pacifico">Customer Review</h1>
                <div className="flex flex-col items-center justify-center  m-5 text-white gap-5 mt-10">

                    <motion.div
                        initial={{ opacity: 0, translateY: "+100%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 2 }}

                        className="bg-[#3368C0] p-5 container">
                        <p>This task manager app is a game-changer! It’s incredibly easy to use, and the intuitive design helps me plan, organize, and track tasks effortlessly.
                            I love the ability to set priorities, deadlines, and reminders.
                            It’s perfect for staying productive and ensuring nothing gets overlooked.
                            Highly recommend it to everyone!</p>
                        <p className="font-bold text-white">by Jeny</p>
                        <p className="font-bold text-white">4.5 ⭐⭐⭐⭐</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, translateY: "+100%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 2 }}

                        className="bg-[#3368C0] p-5 container">
                        <p>This app has made managing my daily tasks so much easier! The clean interface and helpful features like reminders and progress tracking keep me on top of everything.
                            It’s reliable, efficient, and customizable to suit my needs. A must-have tool for staying organized and productive!</p>
                        <p className="font-bold text-white">by Samantha K</p>
                        <p className="font-bold text-white">4.5 ⭐⭐⭐⭐</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, translateY: "+100%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 2 }}

                        className="bg-[#3368C0] p-5 container">
                        <p>A fantastic tool for staying organized! The ability to create, prioritize, and track tasks is seamless.
                            It’s perfect for both personal and work use, and the reminders ensure I never miss a deadline.
                            Highly satisfied with this app!</p>
                        <p className="font-bold text-white">by Priya Sharma</p>
                        <p className="font-bold text-white">4.5 ⭐⭐⭐⭐</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, translateY: "+100%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 2 }}

                        className="bg-[#3368C0] p-5 container">
                        <p>This task manager simplifies everything! I love how I can easily manage my schedule, set deadlines, and check off completed tasks.
                            It’s user-friendly, efficient, and keeps me productive throughout the day. Definitely worth using!
                        </p>
                        <p className="font-bold text-white">by Emily Green</p>
                        <p className="font-bold text-white">4.5 ⭐⭐⭐⭐</p>
                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default Review