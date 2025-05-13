import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#111827] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-10">
          Have a project in mind or just want to connect? Feel free to drop me a message!
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#1f2937] border border-gray-600 rounded outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#1f2937] border border-gray-600 rounded outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-[#1f2937] border border-gray-600 rounded outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-400 text-[#111827] px-6 py-3 rounded font-medium hover:bg-green-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;