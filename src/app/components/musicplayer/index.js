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
        description: "I just wanna, I just wanna know . If you're gonna, if you're gonna stay",
        src: "/assets/Riptide.mp3",
        image: "/assets/riptide.jpg",
        bgColor: "#F2A7D1",
        albumCover: "/assets/riptide_album_cover.jpg",
        yearOfRelease: 2013
    },
    {
        title: "Budapest",
        singer: "George Ezra",
        description: "And, baby, if you hold me, then all of this will go away . Give me one good reason why I should never make a change",
        src: "/assets/Budapest.mp3",
        image: "/assets/budapest.jpg",
        bgColor: "#A1C9F1",
        albumCover: "/assets/budapest_album_cover.jpg",
        yearOfRelease: 2014
    },
    {
        title: "Remember When",
        singer: "Wallows",
        description: "Do you remember when we felt like the only two alive?",
        src: "/assets/Remember When.mp3",
        image: "/assets/remember.jpg",
        bgColor: "#F4E1D2",
        albumCover: "/assets/remember_album_cover.jpg",
        yearOfRelease: 2019
    },
    {
        title: "Tangerine",
        singer: "Noah Richardson",
        description: "Addicted to you and your misery",
        src: "/assets/Tangerine.mp3",
        image: "/assets/tangerine.png",
        bgColor: "#F2D98F",
        albumCover: "/assets/tangerine_album_cover.jpg",
        yearOfRelease: 2021
    },
    {
        title: "Ophelia",
        singer: "The Lumineers",
        description: "You've been on my mind girl like a drug",
        src: "/assets/Ophelia.mp3",
        image: "/assets/ophelia.jpg",
        bgColor: "#A9CBB7",
        albumCover: "/assets/ophelia_album_cover.jpg",
        yearOfRelease: 2016
    },
    {
        title: "Where The Skies Are Blue",
        singer: "The Lumineers",
        description: "So, if you ever need a fool ; Who will give you a love so true ; You can always find me where the skies are blue",
        src: "/assets/Where The Skies Are Blue.mp3",
        image: "/assets/skies.jpg",
        bgColor: "#B8C8E4",
        albumCover: "/assets/skies_album_cover.jpg",
        yearOfRelease: 2019
    },
    {
        title: "40 Hour Drive",
        singer: "Bennet Coast",
        description: "I think I'm your home, A homе you never had",
        src: "/assets/40.mp3",
        image: "/assets/40.jpg",
        bgColor: "#A9CBB7",
        albumCover: "/assets/40_album_cover.jpg",
        yearOfRelease: 2021
    },
    {
        title: "Fire and the Flood",
        singer: "Vance Joy",
        description: "I been getting used to waking up with you, I been getting used to waking up here",
        src: "/assets/fire.mp3",
        image: "/assets/fire.jpg",
        bgColor: "#F4B5A6",
        albumCover: "/assets/fire_album_cover.jpg",
        yearOfRelease: 2015
    },
    {
        title: "Ho Hey",
        singer: "The Lumineers",
        description: "I belong with you, you belong with me, You're my sweetheart",
        src: "/assets/ho-hey.mp3",
        image: "/assets/ho-hey.jpg",
        bgColor: "#F1C4B2",
        albumCover: "/assets/hohey_album_cover.jpg",
        yearOfRelease: 2012
    },
    {
        title: "Little Talks",
        singer: "Monsters and Men",
        description: "So hold my hand, I'll walk with you my dear",
        src: "/assets/lil.mp3",
        image: "/assets/little.jpg",
        bgColor: "#C0C8D3",
        albumCover: "/assets/little_album_cover.jpg",
        yearOfRelease: 2011
    },
    {
        title: "I Love You So",
        singer: "The Walters",
        description: "You're everything I want, but I can't deal with all your lovers",
        src: "/assets/ilys.mp3",
        image: "/assets/ilys.jpg",
        bgColor: "#F1D2E8",
        albumCover: "/assets/ilys_album_cover.jpg",
        yearOfRelease: 2016
    },
    {
        title: "Those Eyes",
        singer: "New West",
        description: "ause all of the small things that you do, Are what remind me why I fell for you",
        src: "/assets/thoseeyes.mp3",
        image: "/assets/thoseeyes.jpg",
        bgColor: "#D8C6D2",
        albumCover: "/assets/thoseeyes_album_cover.jpg",
        yearOfRelease: 2019
    },
    {
        title: "Let's See What the Night Can Do",
        singer: "Jason Mraz",
        description: "I wanna get lost with you",
        src: "/assets/lost.mp3",
        image: "/assets/lost.jpg",
        bgColor: "#C6E0F3",
        albumCover: "/assets/lost_album_cover.jpg",
        yearOfRelease: 2018
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
        setBgColor(songs[currentSongIndex].bgColor);
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
                className="flex flex-col items-center justify-center p-3 h-full border-2 rounded-2xl border-white transition-all duration-500"
                style={{ background: bgColor, transition: 'background 1s ease-in-out' }}
            >
                <img
                    src={songs[currentSongIndex].image}
                    alt={songs[currentSongIndex].title}
                    className="w-72 h-72 rounded-lg shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-slate-900">{songs[currentSongIndex].title}</h2>
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
