import React from 'react';
import './details.css';

const Details = () => {
  return (
    <div className="stripes text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl bg-amber-100 text-red-400 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">About Retro Music Player</h1>
        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold">Retro Music Player</span>, a simple yet stylish music player inspired by
          the golden era of cassette tapes and vinyl records. This project was created to experiment with CSS styling while
          bringing a nostalgic, vintage feel to modern web applications.
        </p>
        
        
        <h2 className="text-2xl font-semibold mt-6 mb-2">Design & Features</h2>
        <ul className="text-lg list-disc list-inside">
          <li>Retro-themed UI inspired by old-school cassette players.</li>
          <li>Simple and intuitive controls for play/pause functionality.</li>
          <li>Designed using Tailwind CSS for a clean and responsive layout.</li>
          <li>Personalized track selection that reflects my musical taste.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2">Future Enhancements</h2>
        <p className="text-lg">
          This is just the beginning! In future updates, I plan to add:
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>Spotify API integration for playlist imports.</li>
          <li>Custom equalizer settings for better sound control.</li>
          <li>Dark/light mode switch for a more user-friendly experience.</li>
          <li>Animated cassette reels spinning while music plays.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2">Built With</h2>
        <p className="text-lg">
          This project is developed using:
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>React.js for the frontend framework.</li>
          <li>Tailwind CSS for fast and elegant styling.</li>
          <li>HTML5 Audio API for seamless music playback.</li>
        </ul>
        
        <p className="text-lg mt-6 italic">
          "Music is the soundtrack of our lives. This player is just my way of sharing a piece of mine with you."
        </p>
      </div>
    </div>
  );
};

export default Details;