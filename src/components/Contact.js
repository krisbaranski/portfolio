import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-top bg-[#1b5f9d] flex justify-center items-center py-14 px-2"
    >
      <form
        method="POST"
        action="https://getform.io/f/0d9a52aa-2e8a-4657-b853-9a2330ab87ec"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-white text-white">
            Contact
          </p>
          <p className="text-white py-4">
            Submit the form below or shoot me an
            <a className="text-white pl-2" href="mailto:kris.baranski@web.de">
              EMAIL
            </a>
          </p>
        </div>
        <input
          className="bg-[#ffffff] p-2 rounded z-10"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ffffff] rounded z-10"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ffffff] p-2 rounded z-10"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 rounded hover:bg-white hover:border-white px-4 py-3 my-8 mx-auto flex items-center hover:text-[#264e86]">
          Let's Work Together
        </button>
      </form>
    </div>
  );
};

export default Contact;
