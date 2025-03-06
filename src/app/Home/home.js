
'use client'
import { useState } from 'react';
import Musicplayer from '../components/musicplayer';

const Homepage = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    return (
        <>
          <div className='flex flex-col justify-start m-32 '>
        <Musicplayer />
      </div>
        </>
    );
};

export default Homepage;
