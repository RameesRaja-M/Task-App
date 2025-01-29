import React from 'react'

function Footer() {
    return (
        <>
            <div className=" mt-6 p-5 bg-gray-900 text-white flex justify-between text-center ">
                <div className="flex  flexgap-5">

                    <div className="flex flex-col justify-between text-center">

                        <p>Taskwhiz Business</p>
                        <p>Teach On Taskwhiz</p>
                        <p>Get the App</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="flex flex-col justify-between text-center">
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Help and Support</p>
                        <p>Affiliate</p>
                        <p>Investors</p>
                    </div>
                </div>
                <div className=" mt-10 md:mt-20 md:mr-18">

                    <h1 className=" md:text-5xl font-bold font-pacifico">Taskwhiz </h1>
                    <p className="md:text-xl mt-2 mr-2 ">&copy; 2024 TaskWhiz. All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer