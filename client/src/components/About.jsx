import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <>
     <section className="  mt-10 mb-10 md:m-10 font-poppins">
                     <h1 className="font-bold text-3xl mt-5 text-center text-[#3368C0] font-pacifico">About US </h1>
                     <div className="flex flex-col items-center justify-center  m-5 text-white gap-5 mt-10">
     
                         <motion.div
                             initial={{ opacity: 0, translateY: "+30%" }}
                             whileInView={{ opacity: 1, translateY: 0 }}
                             transition={{ duration: 2 }}
     
                             className="bg-[#3368C0] p-5 container">
                             <p>Welcome to TaskWhiz, your ultimate companion for mastering productivity and organization. 
                              In today’s fast-paced world, juggling tasks, deadlines, and priorities can feel overwhelming. 
                              That’s why we created a task management solution that doesn’t just organize your to-do list but transforms the way you work and live.
                              At TaskWhiz, our mission is simple: to empower individuals and teams to achieve more, stress less, 
                              and stay focused on what truly matters. Whether it’s personal goals, professional projects, or everyday tasks, 
                              our app is designed to provide a seamless, intuitive experience that fits effortlessly into your lifestyle.</p>
                              <ol className='mt-5 mb-5 flex flex-col gap-3 '>
                                <h1 className='md:text-4xl font-pacifico text-white mb-5 font-bold'>What We Offer :</h1>
                                <li>1.Plan and Organize with Ease: Create tasks, set deadlines, and break down big projects into manageable steps.</li>
                                <li>2.Track Progress Effortlessly: Stay updated on what’s done and what needs attention with clear visual progress indicators.</li>
                                <li>3.Collaborate Seamlessly: Work together with your team by assigning tasks, sharing updates, and keeping everyone on the same page.</li>
                                <li>4.Stay Focused: With features like reminders, notifications, and priority settings, you’ll never lose track of your important tasks.</li>
                                <li>5.Declutter Your Workspace: Edit, archive, or delete tasks easily to keep your workflow clean and efficient.</li>
                              </ol>
                              <p>We believe productivity shouldn’t be complicated. Our app simplifies the way you manage tasks, helping you 
                                reclaim your time and energy for the things that matter most. With a clean interface, customizable options,
                                 and tools built for both individuals and teams, TaskWhiz is here to support your journey toward 
                                 success—one task at a time.</p>
                                 <p className='mt-5'>Join the thousands of users who trust TaskWhiz to organize their day, achieve their goals, and stay ahead. Let’s simplify your
                                   life and transform the way you manage tasks!</p>
                             
                         </motion.div>
     
                         
     
                     </div>
                 </section>
    </>
  )
}

export default About