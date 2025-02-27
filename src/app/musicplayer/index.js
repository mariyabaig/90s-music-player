'use client'
import React, { useState, useRef, useEffect } from 'react';
import './musicplayer.css';
import Casset from '../casset';
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";

const songs = [
    {
        title: "Riptide",
        singer: "Vance Joy",
        description: "An indie folk song about love and adventure, with a catchy ukulele tune.",
        src: "/assets/Riptide.mp3",
        image: "/assets/riptide.jpg",
        bgColor: "#F2A7D1" // Pastel Pink
    },
    {
        title: "Budapest",
        singer: "George Ezra",
        description: "A folk-pop anthem about leaving behind material possessions for love.",
        src: "/assets/Budapest.mp3",
        image: "/assets/budapest.jpg",
        bgColor: "#A1C9F1" // Pastel Blue
    },
    {
        title: "Remember When",
        singer: "Alan Jackson",
        description: "A heartfelt country ballad reflecting on love, family, and life's journey.",
        src: "/assets/Remember When.mp3",
        image: "/assets/remember.jpg",
        bgColor: "#F4E1D2" // Pastel Peach
    },
    {
        title: "Tangerine",
        singer: "Glass Animals",
        description: "A groovy, synth-heavy track with nostalgic lyrics and vibrant energy.",
        src: "/assets/Tangerine.mp3",
        image: "/assets/tangerine.jpg",
        bgColor: "#F2D98F" // Pastel Yellow
    },
    {
        title: "Ophelia",
        singer: "The Lumineers",
        description: "A melancholic yet uplifting folk-rock song with poetic lyrics.",
        src: "/assets/Ophelia.mp3",
        image: "/assets/ophelia.jpg",
        bgColor: "#A9CBB7" // Pastel Green
    },
    {
        title: "Where The Skies Are Blue",
        singer: "The Lumineers",
        description: "A soothing acoustic tune about hope, love, and finding happiness.",
        src: "/assets/Where The Skies Are Blue.mp3",
        image: "/assets/skies.jpg",
        bgColor: "#B8C8E4" // Light Pastel Lavender
    }
];

const Musicplayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [bgColor, setBgColor] = useState(songs[0].bgColor);
    const [bgGradient, setBgGradient] = useState(songs[0].bgColor);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
        setBgGradient(songs[currentSongIndex].bgColor);
    }, [currentSongIndex, isPlaying]);
    
    useEffect(() => {
        if (isPlaying) {
            document.body.classList.add('is-playing');
        } else {
            document.body.classList.remove('is-playing');
        }
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        
        if (audio) {
            const updateProgress = () => {
                const current = audio.currentTime;
                const total = audio.duration;
                setCurrentTime(current);
                setDuration(total);
                setProgress(total ? (current / total) * 100 : 0);
            };
    
            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    
            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
            };
        }
    }, []);
    

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handlePlayToggle = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        setIsPlaying(true);
    };
    
    const handlePrev = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
        setIsPlaying(true);
    };

    return (
        <>
            <Casset />
            <div
                className="flex flex-col items-center justify-center p-8 h-full mt-32 border-2 rounded-2xl border-gray-400 transition-all duration-500"
                style={{ 
                    background: `linear-gradient(135deg, ${bgGradient} 0%, #E5D8D8 100%)`, 
                    transition: 'background 1s ease-in-out'
                }}
            >
                <img
                    src={songs[currentSongIndex].image}
                    alt={songs[currentSongIndex].title}
                    className="w-72 h-72 rounded-lg shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-blue-100">{songs[currentSongIndex].title}</h2>
                <h3 className="text-lg text-white">{songs[currentSongIndex].singer}</h3>
                <p className="text-sm text-white italic text-center w-72 mt-2">
                    {songs[currentSongIndex].description}
                </p>

                <audio ref={audioRef} src={songs[currentSongIndex].src}></audio>
                <div className="flex items-center w-72 mt-4">
                    <span className="text-sm text-gray-100 w-12">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        className="flex-grow mx-2"
                        value={progress}
                        onChange={handleProgressChange}
                        min="0"
                        max="100"
                    />
                    <span className="text-sm text-gray-100 w-12">{formatTime(duration)}</span>
                </div>

                <div className="flex space-x-4 mt-4">
                    <button onClick={handlePrev} className='bg-white p-4 rounded shadow-md'>
                        <IoPlaySkipBack />
                    </button>
                    <button onClick={handlePlayToggle} className='bg-white p-4 rounded shadow-md'>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button onClick={handleNext} className='bg-white p-4 rounded shadow-md'>
                        <IoPlaySkipForward />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Musicplayer;
