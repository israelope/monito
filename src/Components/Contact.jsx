import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      {/* Added 'flex-grow' to ensure footer gets pushed down if content is short.
         Added 'flex justify-center' to center the form container horizontally.
      */}
      <section className='flex-grow lg:p-20 p-4 flex justify-center items-start' id="contact">
        {/* Container Refinements:
           1. w-full max-w-4xl: Ensures it takes full width on mobile but stops growing at 4xl (approx 896px) on desktop.
           2. mx-auto: Centers the container itself (redundant with section flex, but good practice).
           3. Responsive Padding: Reduced px-8 to px-4 on mobile, brought back up on md screens.
        */}
        <div className='w-full max-w-4xl mx-auto border-[#003459] border-3 py-10 px-5 md:px-8 lg:py-15'>
          <h2 className='lg:text-3xl text-center font-serif font-semibold text-2xl pb-8 uppercase'>Get In Touch With Us</h2>

          {/* The grid already handles the 1-col mobile to 2-col desktop switch perfectly. */}
          <form id="contact-form" name="contact-form" className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

            {/* Standard Inputs */}
            <div className="flex flex-col">
              {/* Changed 'for' to 'htmlFor' for React */}
              <label htmlFor="full-name" className="mb-1 text-sm font-semibold text-[#003459]">Full name</label>
              <input className='w-full font-serif border-b-1 border-[#003459] bg-transparent py-2 focus:outline-none focus:border-b-2' type="text" id="full-name" name="full-name" required></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-semibold text-[#003459]">Email address</label>
              <input className='w-full font-serif border-b-1 border-[#003459] bg-transparent py-2 focus:outline-none focus:border-b-2' type="email" id="email" name="email" required></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 text-sm font-semibold text-[#003459]">Phone number</label>
              <input className='w-full font-serif border-b-1 border-[#003459] bg-transparent py-2 focus:outline-none focus:border-b-2' type="tel" id="phone" name="phone" required></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="pickup" className="mb-1 text-sm font-semibold text-[#003459]">Pickup station</label>
              <input className='w-full font-serif border-b-1 border-[#003459] bg-transparent py-2 focus:outline-none focus:border-b-2' type="text" id="pickup" name="pickup" required></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="destination" className="mb-1 text-sm font-semibold text-[#003459]">Destination/ Route</label>
              <input className='w-full font-serif border-b-1 border-[#003459] bg-transparent py-2 focus:outline-none focus:border-b-2' type="text" id="destination" name="destination" required></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="vehicle" className="mb-1 text-sm font-semibold text-[#003459]">Preferred vehicle(s)</label>
              <input className='w-full font-serif border-b-1 border-[#003459] bg-transparent py-2 focus:outline-none focus:border-b-2' type="text" id="vehicle" name="vehicle" required></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="booking-date" className="mb-1 text-sm font-semibold text-[#003459]">Date of Booking</label>
              <input className='w-full font-serif border-b-1 border-[#003459] bg-transparent py-2 focus:outline-none focus:border-b-2' type="date" id="booking-date" name="booking-date" required></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="duration" className="mb-1 text-sm font-semibold text-[#003459]">Duration of use</label>
              <input className='w-full font-serif border-b-1 border-[#003459] bg-transparent py-2 focus:outline-none focus:border-b-2' type="text" id="duration" name="duration" required></input>
            </div>

            {/* Full Width Elements:
                Added 'lg:col-span-2' to these containers so they span the full width 
                on desktop screens instead of getting stuck in the left column.
            */}
            <div className="flex flex-col lg:col-span-2 mt-4">
              <label htmlFor="notes" className="mb-1 text-sm font-semibold text-[#003459]">Additional Requests or Special Notes</label>
              {/* Added styling to textarea to match inputs */}
              <textarea id="notes" name="notes" rows="4" className='w-full font-serif border-1 border-[#003459] p-2 bg-transparent resize-y focus:outline-none focus:border-2 rounded-sm'></textarea>
            </div>

            <div className='py-4 text-sm text-gray-700 lg:col-span-2 text-center'>
              After submission, a representative will contact you via phone or email to finalize the quote and confirm availability.
            </div>

            <div className='text-center lg:col-span-2'>
              <button className='px-8 py-3 text-lg font-semibold text-white rounded-xl bg-[#003459] cursor-pointer hover:bg-[#265373] transition-colors duration-300 w-full md:w-auto' type="submit">Submit Request</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Contact
