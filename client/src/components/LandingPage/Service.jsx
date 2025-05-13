import React from "react";
import { Code2, TrendingUp, Headphones, Layers, BarChart2 } from "lucide-react";

const services = [
  {
    icon: <Code2 className="text-green-400 w-8 h-8" />,
    title: "Frontend Developer",
    description: "Building clean, responsive, and functional web applications.",
  },
  {
    icon: <TrendingUp className="text-green-400 w-8 h-8" />,
    title: "Smart Contract",
    description: "Creating eye-catching 3D concepts for products and brands.",
  },
  {
    icon: <TrendingUp className="text-green-400 w-8 h-8" />,
    title: "Technical Writer",
    description: "Crafting modern, trendy UI/UX experiences.",
  }
];

const Service = () => {
  return (
    <div className="bg-[#111827] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Services</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1f2937] p-6 rounded-lg shadow hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;