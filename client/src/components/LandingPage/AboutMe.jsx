import React from "react";
import MyPhoto from "../../assets/Aboutme.jpg";

const AboutMe = () => {
  return (
    <div className="bg-[#111827] text-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={MyPhoto}
            alt="Rokeebat Olajide"
            className="rounded-lg shadow-lg object-cover h-[50vh] w-[60vw]"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h4 className="text-green-400 text-lg font-semibold">Who am I?</h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            I'm Rokeebat Olajide, a Frontend Developer, Technical Writer, and Smart Contract Developer.
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Passionate about creating clean, responsive web interfaces and building decentralized applications on the blockchain. I also enjoy writing clear, beginner-friendly technical articles and mentoring new developers in the Web3 and frontend space.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
            <p><span className="font-semibold text-white">Name:</span> Rokeebat Olajide</p>
            <p><span className="font-semibold text-white">From:</span> Lagos, Nigeria</p>
            <p><span className="font-semibold text-white">Age:</span> 20</p>
            <p><span className="font-semibold text-white">Email:</span> olajideolabimpe26@gmail.com</p>
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded transition duration-300">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;