import React from "react";
import hero from "../../assets/herosection.jpg";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between min-h-screen bg-black px-10 text-white">
      <div className="space-y-6">
        <h3 className="text-gray-400 text-lg">Hi There!</h3>

        <h1 className="text-5xl font-bold">
          I am a{" "}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Smart Contract Developer",
              2000,
              "Technical Writer",
              2000,
              "Open Source Contributor",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-[#FAF3E0] text-xl">I make the complex simple.</p>

        <button className="bg-[#008080]  text-white px-6 py-3 rounded-lg">
          Contact Me
        </button>

        <div className="flex space-x-10 pt-20 text-sm">
          <div>
            <p className="text-gray-400">Email</p>
            <p>olajideolabimpe26@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-400">Phone</p>
            <p>+234 907-293-229-9</p>
          </div>
          <div>
            <p className="text-gray-400">Location</p>
            <p>Lagos,Nigeria</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <img
          src={hero}
          alt="Profile"
          className="rounded-lg max-h-[550px] object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
