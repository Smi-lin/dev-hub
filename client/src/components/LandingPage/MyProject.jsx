import React from 'react'

const projects = [
    {
      name: "EcoSupply",
      image: "/assets/ecosupply.jpg",  // replace with your image paths
      description: "A decentralized supply chain management platform for transparent product tracking.",
    },
    {
      name: "Micro Work",
      image: "/assets/microwork.jpg",
      description: "A freelance micro-task platform connecting job posters with skilled workers globally.",
    },
    {
      name: "Jarafi",
      image: "/assets/jarafi.jpg",
      description: "A peer-to-peer financial platform for sending, receiving, swapping, and virtual cards.",
    },
    {
      name: "EarthFi",
      image: "/assets/earthfi.jpg",
      description: "A recycling reward system encouraging waste sorting through token incentives.",
    },
    {
      name: "Smilda",
      image: "/assets/smilda.jpg",
      description: "A smart contract-based real estate rental agreement platform.",
    },
  ];
  
  const MyProject = () => {
    return (
      <div className="bg-[#111827] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
  
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1f2937] rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <button className="bg-green-400 text-[#111827] px-4 py-2 rounded font-medium hover:bg-green-500 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  

export default MyProject
