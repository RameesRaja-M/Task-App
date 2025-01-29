import React from 'react'

function Contact() {
  return (
    <>
      <section className=" flex  mt-5 p-8 ">

        <div className=" lg:py-16 px-4  mx-auto max-w-screen-md  rounded-md bg-gray-100 ">
          <h2 className=" text-4xl tracking-tight font-serif text-center text-gray-700">Contact Me</h2>
          <p className=" lg:mb-16 font-serif text-center text-gray-1000 dark:text-gray-900 sm:text-xl">
            We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out. Our team is here to help and will get back to you as soon as possible. Let’s stay connected!</p>
          <form class="space-y-8">


            <div>
              <label for="email" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300  font-medium ">Name</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light focus:outline-none " placeholder="Enter the name here.." required></input>
            </div>





            <div>
              <label for="email" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-medium">Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-blue-500  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light focus:outline-none" placeholder="name@flowbite.com" required></input>
            </div>


            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
              <input type="text" id="email" className="shadow-sm bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light focus:outline-none" placeholder="Enter the mobile number" required></input>
            </div>




            <div>
              <label for="subject" className="block mb-2 text-sm font-medium  dark:text-gray-300 ">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm border-blue-500 bg-gray-50 rounded-lg border   shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light focus:outline-none" placeholder="Let us know how we can help you" required></input>
            </div>


            <div class="sm:col-span-2 ">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 focus:outline-none ">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-blue-500 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none" placeholder="Leave a comment..."></textarea>
            </div>

            <button type="submit" class='sm button' className="py-3  px-5 text-sm font-medium text-center bg-gray-700   rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800  text-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800

     hover:bg-blue-400


">Send message</button>
          </form>
        </div>
      </section>

    </>
  )
}

export default Contact