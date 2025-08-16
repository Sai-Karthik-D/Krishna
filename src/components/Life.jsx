import React from "react";
import krishnaImg from "../assets/MainBanner.jpeg";
import littleKrishnaImg from "../assets/littlek1.jpeg";
import Kaliya from '../assets/kaliya.jpg';
import go from '../assets/go.jpg';
import kamsa from '../assets/kamsa.jpg';
import war from '../assets/war.jpg';
import dep from '../assets/dep.jpg';
import { motion } from 'framer-motion'; 

const Life = () => {
  const events = [
    {
      title: "Birth in Mathura",
      description:
        "Lord Krishna was born in the prison of Mathura to Devaki and Vasudeva, marking the beginning of his divine journey.",
      image: littleKrishnaImg,
    },
    {
      title: "subduing Kaliya",
      description:
        "Krishna subdued the serpent Kaliya in the Yamuna River, restoring peace to the waters and the surrounding area.",
      image: Kaliya,
    },
    {
      title: "Govardhan Hill Lifting",
      description:
        "Krishna lifted the Govardhan Hill to protect the villagers of Vrindavan from torrential rains sent by Indra.",
      image: go,
    },
    {
      title: "Defeating Kamsa",
      description:
        "Krishna returned to Mathura and defeated his tyrant uncle Kamsa, freeing the people from his cruelty.",
      image: kamsa,
    },
    {
      title: "Kurukshetra & Bhagavad Gita",
      description:
        "In the Kurukshetra war, Krishna delivered the timeless wisdom of the Bhagavad Gita to Arjuna.",
      image: war,
    },
    {
      title: "Departure from the World",
      description:
        "Krishna left the mortal world, marking the end of the Dvapara Yuga.",
      image: dep,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-violet-100 to-pink-100 py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
        Major Events in Lord Krishna's Life
      </h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line for desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-purple-300 hidden md:block"></div>

        <div className="flex flex-col gap-12">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`md:w-1/2 relative ${
                idx % 2 === 0 ? "md:self-start" : "md:self-end"
              }`}
            >
              {/* Connector dot for desktop */}
              <div
                className="hidden md:block absolute top-6 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"
                style={{
                  left: idx % 2 === 0 ? "calc(100% + 12px)" : "auto",
                  right: idx % 2 !== 0 ? "calc(100% + 12px)" : "auto",
                }}
              ></div>

              {/* Mobile card style */}
              <div
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 
                           border-l-8 border-purple-400 pl-4 md:border-l-0 md:pl-0"
              >
                {/* Mobile timeline dot */}
                <div className="absolute -left-3 top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg md:hidden"></div>

                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 animate-fadeIn">
                  <h3 className="text-lg md:text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                    {event.title}
                  </h3>
                  <motion.p className="text-gray-600"
                  initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            >{event.description}</motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Life;
