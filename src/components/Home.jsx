import React, { useEffect, useState } from 'react';

function Home() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const eventDate = new Date('2024-10-04T00:00:00');
    const total = eventDate - now;

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen text-white">
      {/* Main Hero Section */}
      <section className="text-center flex flex-col justify-center items-center min-h-screen px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug mb-6">
          Department of <span className="text-teal-400">Information Technology</span>
          <br />
          Presents <em>InFotsav-2k24</em>
        </h2>
        <button className="main-button bg-teal-400 hover:bg-teal-500 text-black px-8 py-3 rounded-lg mt-8 font-bold">
          Check Events - Make an Impact
        </button>
        <p className="mt-6 text-gray-400">
          Get ready to <span className="text-teal-400">accelerate your career</span> with <span className='text-teal-400'>IFOTSAV</span>
          and leave your mark in the tech industry.
        </p>

        {/* Countdown Timer */}
        <div className="mt-12">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Time Remaining:</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <div className="bg-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-lg text-center shadow-lg">
              <p className="text-teal-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">{timeRemaining.days}</p>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Days</p>
            </div>
            <div className="bg-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-lg text-center shadow-lg">
              <p className="text-teal-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">{timeRemaining.hours}</p>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Hours</p>
            </div>
            <div className="bg-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-lg text-center shadow-lg">
              <p className="text-teal-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">{timeRemaining.minutes}</p>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Minutes</p>
            </div>
            <div className="bg-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-lg text-center shadow-lg">
              <p className="text-teal-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">{timeRemaining.seconds}</p>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Seconds</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
