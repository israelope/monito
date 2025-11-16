import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <main>
        <Navbar/>
        <section className=' lg:p-20  p-4 justify-items-center' id="contact">
      <div className='border-[#003459] border-3 py-15 px-8'>
        <h2 className='lg:text-3xl text-center font-serif font-semibold text-2xl pb-5 uppercase'>Get In Touch With Us</h2>
        <form id="contact-form" name="contact-form" className='grid lg:grid-cols-2 gap-5 '>
          <div>
            <label for="full-name">Full name</label>
            <input className='w-full  border-b-1 bg-transparent' type="text" id="full-name" name="full-name" required></input>
          </div>

          <div>
            <label for="email">Email address</label>
            <input className='w-full  border-b-1 bg-transparent' type="email" id="email" name="email" required></input>
          </div>

          <div>
            <label for="phone">Phone number</label>
            <input className='w-full  border-b-1 bg-transparent' type="tel" id="phone" name="phone" required></input>
          </div>

          <div>
            <label for="pickup">Pickup station</label>
            <input className='w-full  border-b-1 bg-transparent' type="text" id="pickup" name="pickup" required></input>
          </div>

          <div>
            <label for="destination">Destination/ Route</label>
            <input className='w-full  border-b-1 bg-transparent' type="text" id="destination" name="destination" required></input>
          </div>

          <div>
            <label for="vehicle">Preferred vehicle(s)</label>
            <input className='w-full  border-b-1 bg-transparent' type="text" id="vehicle" name="vehicle" required></input>
          </div>

          <div>
            <label for="booking-date">Date of Booking</label>
            <input className='w-full  border-b-1 bg-transparent' type="date" id="booking-date" name="booking-date" required></input>
          </div>

          <div>
            <label for="duration">Duration of use</label>
            <input className='w-full  border-b-1 bg-transparent' type="text" id="duration" name="duration" required></input>
          </div>

          <div>
            <label for="notes">Additional Requests or Special Notes</label>
            <textarea id="notes" name="notes"></textarea>
          </div>

          <div className='py-10'>
            After submission, a representative will contact the user via phone or email to finalize the quote and confirm availability
          </div>

          <div className=' text-center'>
            <button className='px-5 py-2 text-xl text-white rounded-xl bg-[#003459] cursor-pointer hover:bg-[#265373]' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
        <Footer/>
    </main>
  )
}

export default Contact
