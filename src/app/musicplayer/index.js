'use client'
import React, { useState, useRef, useEffect } from 'react';
import './musicplayer.css';

const songs = [
    { 
        title: "Riptide", 
        singer: "Vance Joy", 
        description: "An indie folk song about love and adventure, with a catchy ukulele tune.", 
        src: "/assets/Riptide.mp3", 
        image: "/assets/riptide.jpg"
    },
    { 
        title: "Budapest", 
        singer: "George Ezra", 
        description: "A folk-pop anthem about leaving behind material possessions for love.", 
        src: "/assets/Budapest.mp3", 
        image: "/assets/budapest.jpg"
    },
    { 
        title: "Pure", 
        singer: "The Lightning Seeds", 
        description: "A dreamy, nostalgic track filled with feel-good vibes and positive energy.", 
        src: "/assets/Pure.mp3", 
        image: "/assets/pure.jpg"
    },
    { 
        title: "Remember When", 
        singer: "Alan Jackson", 
        description: "A heartfelt country ballad reflecting on love, family, and life's journey.", 
        src: "/assets/Remember When.mp3", 
        image: "/assets/remember.jpg"
    },
    { 
        title: "Tangerine", 
        singer: "Glass Animals", 
        description: "A groovy, synth-heavy track with nostalgic lyrics and vibrant energy.", 
        src: "/assets/Tangerine.mp3", 
        image: "/assets/tangerine.jpg"
    },
    { 
        title: "Ophelia", 
        singer: "The Lumineers", 
        description: "A melancholic yet uplifting folk-rock song with poetic lyrics.", 
        src: "/assets/Ophelia.mp3", 
        image: "/assets/ophelia.jpg"
    },
    { 
        title: "Where The Skies Are Blue", 
        singer: "The Lumineers", 
        description: "A soothing acoustic tune about hope, love, and finding happiness.", 
        src: "/assets/Where The Skies Are Blue.mp3", 
        image: "/assets/skies.jpg"
    }
];

const Musicplayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentSongIndex]); // Auto-play when changing songs

    const handlePlayToggle = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        setIsPlaying(true); // Auto-play next song
    };

    const handlePrev = () => {
        setCurrentSongIndex((prevIndex) => 
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
        setIsPlaying(true); // Auto-play previous song
    };

    return (
        <>
        <div className="flex flex-col items-center justify-center p-8 h-full">
            {/* Album Art */}
            <img 
                src={songs[currentSongIndex].image} 
                alt={songs[currentSongIndex].title} 
                className="w-48 h-48 rounded-lg shadow-lg mb-4"
            />

            {/* Song Info */}
            <h2 className="text-2xl font-bold">{songs[currentSongIndex].title}</h2>
            <h3 className="text-lg text-gray-600">{songs[currentSongIndex].singer}</h3>
            <p className="text-sm text-gray-500 italic text-center w-72 mt-2">
                {songs[currentSongIndex].description}
            </p>

            {/* Cassette Animation */}
            <div className={`cassette ${isPlaying ? "playing" : ""} mt-6`}>
                <div className="screw"></div>
                <div className="screw"></div>
                <div className="screw"></div>
                <div className="screw"></div>

                <div className="cassette__line"></div>

                <div className="label">
                    <div className="title">mixtape</div>
                    <div className="side">A</div>
                    <div className="cutout">
                        <div className="reel">
                            <div className="reel__prongs"></div>
                        </div>

                        <div className="window">
                            <div className="window__reel"></div>
                            <div className="window__reel"></div>
                        </div>

                        <div className="reel">
                            <div className="reel__prongs"></div>
                        </div>
                    </div>

                    <div className="duration">90</div>

                    <div className="caption">
                        Mariya Baig
                    </div>
                </div>

                <div className="cassette__bottom">
                    <div className="opening"></div>
                    <div className="opening"></div>
                    <div className="opening"></div>
                    <div className="opening"></div>

                    <div className="screw"></div>

                    <div className="cassette__line"></div>
                </div>
            </div>

            <audio ref={audioRef} src={songs[currentSongIndex].src}></audio>
            <div className="flex space-x-4 mt-4">
                <button onClick={handlePrev} className='bg-red-100 p-4 rounded'>
                    Previous
                </button>
                <button onClick={handlePlayToggle} className='bg-red-100 p-4 rounded'>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button onClick={handleNext} className='bg-red-100 p-4 rounded'>
                    Next
                </button>
            </div>
        </div>
        </>
    );
}

export default Musicplayer;
