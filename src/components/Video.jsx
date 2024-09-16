import React from 'react';
import './Video.css'; 
import './styles.css'

function Video() {
  return (
    <div className="text-white text-center py-12 px-6 md:px-12 lg:px-24 xl:px-32">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
        We do whatever it takes to help you
      </h1>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-teal-400 mb-8">
        Understand the concepts.
      </h1>

      <div className="mb-10 flex justify-center">
        <iframe
          width="900"  // Responsive width
          height="450" // Maintain aspect ratio
          src="https://www.youtube.com/embed/f8wWV_PfnWU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 custom-teal-shadow"
        ></iframe>
      </div>

      <button
        className="py-3 px-6 text-lg md:text-xl lg:text-2xl bg-teal-400 text-gray-900 rounded-lg font-semibold border-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={() => window.open('https://www.youtube.com/watch?v=f8wWV_PfnWU', '_blank')}
      >
        Explore
      </button>
    </div>
  );
}

export default Video;
