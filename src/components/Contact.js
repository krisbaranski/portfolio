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
        className="relative flex flex-col max-w-[350px] sm:max-w-[500px] lg:max-w-[700px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-elephant font-light inline text-white">
            Contact
          </p>
          <p className="text-white py-4">
            Submit the form below or send me an
            <a className="text-white pl-2" href="mailto:mail@krisbaranski.com">
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
        <Button text="Let's Work Together" color="blue" />
      </form>
    </div>
  );
};

export default Contact;
