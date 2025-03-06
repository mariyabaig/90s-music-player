'use client'
import React, { useEffect, useState } from 'react';
import './something.css';
import Image from "next/image";

const Page = () => {
  // State to hold pattern classes for each tile
  const [patterns, setPatterns] = useState({
    1: 'pattern-1',
    2: 'pattern-2',
    3: 'pattern-3',
    4: 'pattern-4',
    5: 'pattern-5',
    6: 'pattern-6',
    7: 'pattern-7',
    8: 'pattern-8',
    9: 'pattern-9',
    10: 'pattern-10',
    11: 'pattern-11',
    12: 'pattern-12'
  });

  // Function to shuffle an array
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  // Function to change patterns randomly every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new shuffled pattern array
      const newPatterns = shuffleArray([
        'pattern-1',
        'pattern-2',
        'pattern-3',
        'pattern-4',
        'pattern-5',
        'pattern-6',
        'pattern-7',
        'pattern-8',
        'pattern-9',
        'pattern-10',
        'pattern-11',
        'pattern-12'
      ]);

      // Map new shuffled patterns to each tile
      const updatedPatterns = {};
      newPatterns.forEach((pattern, index) => {
        updatedPatterns[index + 1] = pattern;
      });

      setPatterns(updatedPatterns);
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="bg-pink-200 min-h-screen w-full flex items-center justify-center stripes">
      <div className="bg-yellow-100 h-[80vh] w-4/5 flex flex-col items-center justify-center rounded-3xl p-8 relative">
        <div className="grid grid-cols-4 gap-4 w-full h-full p-4 rounded-3xl">
          {/* Tile 1 */}
          <div className={`bg-pink-400 h-full rounded-lg ${patterns[1]}`}></div>
          {/* Tile 2 */}
          <div className={`bg-yellow-300 h-full rounded-lg ${patterns[2]}`}></div>
          {/* Tile 3 */}
          <div className={`bg-blue-400 h-full rounded-lg ${patterns[3]}`}></div>
          {/* Tile 4 */}
          <div className={`bg-green-300 h-full rounded-lg ${patterns[4]}`}></div>
          {/* Tile 5 */}
          <div className={`bg-indigo-400 h-full rounded-lg ${patterns[5]}`}></div>
          {/* Tile 6 */}
          <div className={`bg-red-300 h-full rounded-lg ${patterns[6]}`}></div>
          {/* Tile 7 */}
          <div className={`bg-purple-400 h-full rounded-lg ${patterns[7]}`}></div>
          {/* Tile 8 */}
          <div className={`bg-teal-300 h-full rounded-lg ${patterns[8]}`}></div>
          {/* Tile 9 */}
          <div className={`bg-pink-300 h-full rounded-lg ${patterns[9]}`}></div>
          {/* Tile 10 */}
          <div className={`bg-orange-400 h-full rounded-lg ${patterns[10]}`}></div>
          {/* Tile 11 */}
          <div className={`bg-lime-400 h-full rounded-lg ${patterns[11]}`}></div>
          {/* Tile 12 */}
          <div className={`bg-yellow-400 h-full rounded-lg ${patterns[12]}`}></div>
        </div>

        {/* Overlay the Spotify QR code */}
        <div className="bg-white p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hover:bg-gray-100 rounded-2xl border-black border-2">
          
        </div>
      </div>
    </div>
  );
};

export default Page;
