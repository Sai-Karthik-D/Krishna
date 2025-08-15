// src/components/FestivalInfo.jsx
import React from "react";
import krishnaImg from "../assets/MainBanner.jpeg"; // ✅ Correct import

const Content = () => {
  return (
    <section className="bg-gradient-to-b from-violet-100 to-pink-100  py-1 px-1">
      <div className="max-w-full mx-auto px-4 grid md:grid-cols-2 gap-8 items-center bg-blue-200 border-gray-300 rounded-lg shadow-lg p-6">
        
        {/* Image Section */}
        <div className="relative">
          <img
            src={krishnaImg} 
            alt="Krishna"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Festival Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Janmashtami marks the birth of Lord Krishna, celebrated with devotion, dance, and music. 
            Temples are beautifully decorated, and devotees fast until midnight.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            This festival unites people through joy, bhajans, and the famous Dahi Handi event. 
            It reminds us of Krishna’s teachings on love, truth, and righteousness.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Let us celebrate with faith and happiness, spreading peace and harmony everywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
