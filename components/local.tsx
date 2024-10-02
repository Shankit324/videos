'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaSearchPlus } from "react-icons/fa";
import ReactPlayer from "react-player";

export default function Local() {
    type Video = {
        title: string;
        description: string;
        Path: string;
    };

    const playerRef = useRef<ReactPlayer | null>(null);

    // State to store the videos
    const [videos, setVideos] = useState<Video[] | undefined>(undefined);

    useEffect(() => {
        // Access localStorage after the component is mounted (client-side)
        const z = localStorage.getItem('Lib');
        if (z !== null) {
            setVideos(JSON.parse(z)); // Update the state with parsed videos
        }
    }, []); // Empty dependency array ensures this runs only once
    // Function to play the video
    const handlePlay = () => {
        if (playerRef.current) {
            (playerRef.current.getInternalPlayer() as HTMLVideoElement).play(); // Play the video
        }
    };

    // Function to pause the video
    const handlePause = () => {
        if (playerRef.current) {
            (playerRef.current.getInternalPlayer() as HTMLVideoElement).pause(); // Pause the video
        }
    };
    return (
        <div className='flex flex-row flex-wrap justify-around w-full'>
            {videos && videos.length > 0 ? (
                videos.map((val: Video, index: number) => (
                    <div key={index} className='my-10 px-5 py-5 bg-[#ffc273] rounded w-11/12 sm:w-2/5'>
                        <ReactPlayer url={`${val.Path.toString()}`} controls={true} width={"100%"} ref={playerRef} />
                        <br />
                        <div className='font-bold text-5xl'>{val.title}</div>
                        <div className='text-xl text-pretty'>{val.description}</div>
                        <br />
                        <div className="flex flex-row justify-around">
                            <button className='bg-black block rounded text-white px-5 py-10' onClick={handlePlay}>Play</button>
                            <button className='bg-black block rounded text-white px-5 py-10' onClick={handlePause}>Pause</button>
                        </div>
                    </div>
                ))
            ) : (
                <div className='flex flex-col justify-center text-center items-center my-10'>
                    <div className="flex flex-col items-center justify-center h-full space-y-6">
                        <FaSearchPlus className="text-white text-3xl font-bold transition-transform duration-500 hover:scale-110" />
                        <div className="text-[#ffc273] font-bold text-3xl text-center ">
                            No video is uploaded. Please upload some videos.
                        </div>
                    </div>
                    <a href='/upload'><div className="relative flex flex-col items-center justify-center my-5">
                        <label className="cursor-pointer flex items-center justify-center w-64 h-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l transition duration-300 ease-in-out">
                            Upload Videos
                        </label>
                        <input id="file-upload" type="file" className="hidden" />
                    </div></a>
                </div>
            )}
        </div>
    );
}

