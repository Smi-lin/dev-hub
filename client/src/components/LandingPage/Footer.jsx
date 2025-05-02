import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './index.css'

function App() {
  return (
    <div className="flex items-center justify-between min-h-screen bg-black px-10 text-white">
      
      {/* Left Side */}
      <div className="space-y-6">
        <h3 className="text-gray-400 text-lg">Hi There!</h3>

        <h1 className="text-5xl font-bold">
          I am {' '}
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'Smart Contract Developer',
              2000,
              'Technical Writer',
              2000,
              'Open Source Contributor',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-blue-400 text-xl">I make the complex simple.</p>

        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
          Contact Me
        </button>

        {/* Footer */}
        <div className="flex space-x-10 pt-20 text-sm">
          <div>
            <p className="text-gray-400">Email</p>
            <p>contact@example.com</p>
          </div>
          <div>
            <p className="text-gray-400">Phone</p>
            <p>+1 202-390-4002</p>
          </div>
          <div>
            <p className="text-gray-400">Location</p>
            <p>New York, USA</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center">
        <img 
          src="https://i.ibb.co/yR6VYB9/profile-pic.png"
          alt="Profile"
          className="rounded-lg max-h-[550px] object-cover"
        />
      </div>
    </div>
  )
}

export default App