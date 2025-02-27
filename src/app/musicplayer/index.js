'use client'
import React, { useState, useRef, useEffect } from 'react';
import './musicplayer.css';
import Casset from '../casset';
import { FaCirclePause } from "react-icons/fa6";
import { FaPlay ,FaPause } from "react-icons/fa";
import { IoPlaySkipForward , IoPlaySkipBack} from "react-icons/io5";
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
    // {
    //     title: "Pure",
    //     singer: "The Lightning Seeds",
    //     description: "A dreamy, nostalgic track filled with feel-good vibes and positive energy.",
    //     src: "/assets/Pure.mp3",
    //     image: "/assets/pure.jpg"
    // },
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
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentSongIndex]);

    useEffect(() => {
        const updateProgress = () => {
            const current = audioRef.current.currentTime;
            const total = audioRef.current.duration;
            setCurrentTime(current);
            setDuration(total);
            setProgress((current / total) * 100);
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', updateProgress);
            audioRef.current.addEventListener('loadedmetadata', () => setDuration(audioRef.current.duration));
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', updateProgress);
                audioRef.current.removeEventListener('loadedmetadata', () => setDuration(audioRef.current.duration));
            }
        };
    }, []);

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
            <Casset/>
            <div className="flex flex-col items-center justify-center p-8 h-full bg-red-200 mt-32 border-2 rounded-2xl border-red-400">
                <img
                    src={songs[currentSongIndex].image}
                    alt={songs[currentSongIndex].title}
                    className="w-48 h-48 rounded-lg shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold">{songs[currentSongIndex].title}</h2>
                <h3 className="text-lg text-gray-600">{songs[currentSongIndex].singer}</h3>
                <p className="text-sm text-gray-500 italic text-center w-72 mt-2">
                    {songs[currentSongIndex].description}
                </p>
                
                <audio ref={audioRef} src={songs[currentSongIndex].src}></audio>
                <div className="flex items-center w-72 mt-4">
                    <span className="text-sm text-gray-600 w-12">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        className="flex-grow mx-2"
                        value={progress}
                        onChange={handleProgressChange}
                        min="0"
                        max="100"
                    />
                    <span className="text-sm text-gray-600 w-12">{formatTime(duration)}</span>
                </div>
                
                <div className="flex space-x-4 mt-4">
                    <button onClick={handlePrev} className='bg-red-100 p-4 rounded'>
                       <IoPlaySkipBack/>
                    </button>
                    <button onClick={handlePlayToggle} className='bg-red-100 p-4 rounded'>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button onClick={handleNext} className='bg-red-100 p-4 rounded'>
                       <IoPlaySkipForward/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Musicplayer;
