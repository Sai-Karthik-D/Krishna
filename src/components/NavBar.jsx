import React from 'react';
import MainBanner from '../assets/swami1.jpg';
import flute from '../assets/flute.mp4';
const NavBar = () => {
  return (
    <div>
        <div className="w-full py-3.5 font-bold text-sm text-white text-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] ">
            <p className='motion-safe:animate-pulse'> Happy Sri Krishna Janmashtami</p>
        </div>
      <div

  className="relative h-[600px] bg-cover bg-center flex items-center justify-start"
  style={{ backgroundImage: `url(${MainBanner})` }}
>
    
  <div className="p-10 max-w-lg">
    <h1 className="text-3xl font-bold text-blue-700 drop-shadow-lg motion-safe:animate-bounce ">
  Happy Krishna Janmashtami!
</h1>

    <p className="mt-4 text-xl text-violet-300 drop-shadow-lg motion-safe:animate-bounce">
      May the flute of Lord Krishna fill your life with melody, joy, and blessings.
    </p>
  </div>
</div>

    </div>
  );
};

export default NavBar;

