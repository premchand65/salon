import React from "react";
import { IoCall } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
const Contact = () => {
  return (
    <div className="gap-8 p-6 md:p-8 lg:p-16 text-gray-700">
      <div className="w-full h-auto overflow-hidden rounded-lg">
        <h1 className="text-4xl font-bold pb-8">Contact</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d264455.73567937687!2d78.47045230535828!3d17.549248967041066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719298719838!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          className="h-72"
        ></iframe>
      </div>
      <div className="grid grid-cols-1   md:grid-cols-3 shadow-lg gap-4 pt-5">
        <div className="flex    p-6 rounded-lg text-center bg-white">
          <MdLocationPin className="text-5xl text-pink-500" />
          <div>
            <h2 className="text-2xl font-bold mb-4  text-gray-600">Our HQ</h2>
            <p>1234 Main Street,</p>
            <p>Telangana, India</p>
          </div>
        </div>
        <div className="flex  p-6 rounded-lg text-center bg-white">
          <FaRegClock className="text-5xl text-pink-500" />
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-600">
              Opening Hours
            </h2>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className="flex  p-6 rounded-lg text-center bg-white">
          <IoCall className="text-5xl text-pink-500" />
          <div>
            <h2 className="text-2xl font-bold mb-4  text-gray-600">
              Get In Touch
            </h2>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
      <div className="   p-4 mx-auto bg-white rounded-lg mt-8">
        <h1 className="pb-6 text-4xl font-bold  text-gray-700 ">
          Make An Appointment
        </h1>
        <p className="text-md mb-6 ">
          This form uses a dummy email address. If you want to ask about the
          theme, please use the &nbsp; 
          <a
            href=""
            className="underline text-pink-600 hover:no-underline"
          >comments section
          </a>
          &nbsp;  on the item description page.
        </p>
        <div>
        <form>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-semibold">YOUR NAME</label>
      <input
        type="text"
        className="w-full h-8 p-2 border bg-gray-200 focus:outline-none mb-6"
      />
    </div>
    <div>
      <label className="block text-sm font-semibold">YOUR EMAIL</label>
      <input
        type="email"
        className="w-full h-8 p-2 border bg-gray-200 focus:outline-none mb-6"
      />
    </div>
    <div>
      <label className="block text-sm font-semibold">YOUR PHONE</label>
      <input
        type="number"
        className="w-full h-8 p-2 border bg-gray-200 focus:outline-none mb-6"
      />
    </div>
    <div>
      <label className="text-sm font-semibold">SUBJECT</label>
      <input
        type="text"
        className="w-full h-8 p-2 border bg-gray-200 focus:outline-none mb-6"
      />
    </div>
    <div>
      <label className="text-sm font-semibold">PREFERRED DATE</label>
      <input
        type="date"
        className="w-full h-8 p-2 border bg-gray-200 focus:outline-none mb-6"
      />
    </div>
    <div>
      <label className="text-sm font-semibold">PREFERRED TIME</label>
      <select className="w-full h-8 px-2 pr-2 border bg-gray-200 focus:outline-none mb-6">
        <option value="08:00">08:00 AM</option>
        <option value="09:00">09:00 AM</option>
        <option value="10:00">10:00 AM</option>
        <option value="11:00">11:00 AM</option>
        <option value="12:00">12:00 PM</option>
        <option value="13:00">01:00 PM</option>
        <option value="14:00">02:00 PM</option>
        <option value="15:00">03:00 PM</option>
        <option value="16:00">04:00 PM</option>
        <option value="17:00">05:00 PM</option>
        <option value="18:00">06:00 PM</option>
      </select>
    </div>
  </div>
</form>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">
              WHAT SERVICES ARE YOU INTERESTED IN
            </h2>
            <div className="flex items-center flex-wrap gap-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Facials
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Eyebrow & Eyelashes
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Wash
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Cut & Finish
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Blow Dries
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Hair Colouring
              </label>
            </div>
          </div>
          <div className="pt-6">
            <h1 className="text-xl font-semibold pb-2">MESSAGE</h1>
            <label>
              <textarea className="bg-slate-200 w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"></textarea>
            </label>
          </div>
          <div className="pt-6 ">
            <button className="bg-pink-600 text-white w-24 h-10 rounded-full hover:bg-pink-700">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
