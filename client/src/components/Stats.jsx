import React from 'react'
import {motion} from 'framer-motion'
function Stats() {
  return (
    <>
         <section>
        <div className="container mx-auto mb-5 mt-10 ">
            <div className="flex flex-col xl:flex-row gap-y-6 justify-between">

                <motion.div
                 initial={{ opacity: 0, translateX: "-100%" }}
                 whileInView={{ opacity: 1, translateX: 0 }}
                 transition={{ duration: 2 }}

                className="flex-1 xl:border-r flex flex-col items-center  xl:mt-20 ">
                    <div className="text-4xl xl:text-[60px] font-semibold text-[#3368C0] mb-2 ">+5,200</div>
                    <div className="from-neutral-700 font-medium">Happy Users</div>
                </motion.div>

                <motion.div 
                 initial={{ opacity: 0, translateX: "-100%" }}
                 whileInView={{ opacity: 1, translateX: 0 }}
                 transition={{ duration: 3 }}
                 
                className="flex-1 xl:border-r flex flex-col items-center  xl:mt-20">
                    <div className="text-4xl xl:text-[60px] font-semibold text-[#3368C0] mb-2 font-chakra">+4,500</div>
                    <div className="from-neutral-700 font-medium">Paid Users</div>
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, translateX: "-100%" }}
                 whileInView={{ opacity: 1, translateX: 0 }}
                 transition={{ duration: 4 }}

                className="flex-1 xl:border-r flex flex-col items-center  xl:mt-20">
                    <div className="text-4xl xl:text-[60px] font-semibold text-[#3368C0] mb-2 font-chakra">+10,000</div>
                    <div className="from-neutral-700 font-medium">Viewers</div>
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, translateX: "-100%" }}
                 whileInView={{ opacity: 1, translateX: 0 }}
                 transition={{ duration: 5 }}

                className="flex-1 xl:border-r flex flex-col items-center  xl:mt-20">
                    <div className="text-4xl xl:text-[60px] font-semibold text-[#3368C0] mb-2 font-chakra">+15,000</div>
                    <div className="from-neutral-700 font-medium">Total Task </div>
                </motion.div>

            </div>

        </div>
    </section>
    </>
  )
}

export default Stats