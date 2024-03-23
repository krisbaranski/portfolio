import React from 'react';
import Button from './Button';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-top bg-[#082f49] flex justify-center items-center py-14 px-2"
    >
      <form
        method="POST"
        action="https://getform.io/f/3f64f3c3-eb15-42d3-9288-b6379cf7ea03"
        className="relative flex flex-col max-w-[350px] sm:max-w-[500px] lg:max-w-[700px] w-full mt-24"
      >
        <div className="pb-8 mb-24">
          <p className="text-7xl sm:text-8xl font-elephant font-light inline text-white  border-b-sky-100 underline underline-offset-8 decoration-1">
            Contact
          </p>
          <p className="text-white text-balance py-4">
            If you like to get in touch with me, please submit the form below or
            send me an
            <a
              className="text-sky-400 pl-2 hover:text-sky-200"
              href="mailto:mail@krisbaranski.com"
            >
              EMAIL
            </a>
          </p>
        </div>
        <input
          className="bg-[#ffffff] p-2 rounded z-10"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ffffff] rounded z-10"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ffffff] p-2 rounded z-10"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <Button
          text="Let's Work Together"
          color="blue"
          // className="flex justify-center p-32 border-2 border-red"
        />
      </form>
    </div>
  );
};

export default Contact;
