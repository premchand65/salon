import React from 'react';

const GoogleMap = () => {
  return (
    <div className='gap-8 p-6 md:p-8 lg:p-16'>
      <div className='w-full h-auto overflow-hidden rounded-lg'>
        <h1 className='text-4xl font-bold pb-8'>Contact</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d264455.73567937687!2d78.47045230535828!3d17.549248967041066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719298719838!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          className='rounded-lg'
        ></iframe>
      </div>
      <div className="grid grid-cols-1   md:grid-cols-3 shadow-lg gap-4 pt-5">
        <div className="flex flex-col  items-center p-6 rounded-lg text-center bg-white">
          <img src="https://www.svgrepo.com/show/522166/location.svg" className="w-12 h-12 mb-4 pink-filter" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Our HQ</h2>
            <p>1234 Main Street, Telangana, India</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg text-center bg-white">
          <img src="https://www.svgrepo.com/show/532122/clock-three.svg" alt="Clock Icon" className="w-12 h-12 mb-4 pink-filter" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg text-center bg-white">
          <img src="https://www.svgrepo.com/show/380067/phone-call.svg" alt="Phone Icon" className="w-12 h-12 mb-4 pink-filter" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
      <div className='   p-4 mx-auto bg-white rounded-lg mt-8'>
        <h1 className='pb-6 text-4xl font-bold '>Make An Appointment</h1>
        <p className='text-lg mb-6 '>
          This form uses a dummy email address. If you want to ask about the theme, please use the the
          <a href='' className='underline text-pink-600 hover:no-underline'> comments  section </a>
           on the item description page.
        </p>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-lg font-medium'>YOUR NAME</label>
              <input type='text' className='w-full h-12 p-2 border bg-gray-200 focus:outline-none mb-6' />
            </div>
            <div>
              <label className='block text-lg font-medium'>YOUR EMAIL</label>
              <input type='email' className='w-full h-12 p-2 border bg-gray-200 focus:outline-none mb-6' />
            </div>
            <div>
              <label className='block text-lg font-medium'>YOUR PHONE</label>
              <input type='number' className='w-full h-12 p-2 border bg-gray-200 focus:outline-none mb-6' />
            </div>
            <div>
              <label className='block text-lg font-medium'>SUBJECT</label>
              <input type='text' className='w-full h-12 p-2 border bg-gray-200 focus:outline-none mb-6' />
            </div>
            <div>
              <label className='block text-lg font-medium'>PREFERRED DATE</label>
              <input type='date' className='w-full h-12 p-2 border bg-gray-200 focus:outline-none mb-6' />
            </div>
            <div>
              <label className='block text-lg font-medium'>PREFERRED TIME</label>
              <input type='time' className='w-full h-12 p-2 border bg-gray-200 focus:outline-none mb-6' />
            </div>
          </div>
          <div className='mt-6'>
            <h2 className='text-xl font-bold mb-4'>WHAT SERVICES ARE YOU INTERESTED IN</h2>
            <div className='grid   sm:grid-cols-4  md:grid-cols-6 gap-3'>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' /> Facials
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' /> Eyebrow & Eyelashes
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' /> Wash
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' /> Cut & Finish
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' /> Blow Dries
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' /> Hair Colouring
              </label>
            </div>
          </div>
          <div className='pt-6'>
            <h1 className='text-xl font-semibold pb-2'>MESSAGE</h1>
            <label>
              <textarea className='bg-slate-200 w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600'></textarea>
            </label>
          </div>
          <div className='pt-6 '>
            <button className='bg-pink-600 text-white w-24 h-10 rounded-full hover:bg-pink-700'>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
