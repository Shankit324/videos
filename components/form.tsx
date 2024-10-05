'use client';

import React, { useState } from 'react';

export default function Form() {
    const [videoSrc, setVideoSrc] = useState(null);
    const [file, setFile] = useState(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setFile(file);
        if (file) {
            const url: any = URL.createObjectURL(file);
            setVideoSrc(url);
            const newitem = document.createElement('div');
            newitem.innerHTML = `<div class="bg-lime-400 px-5 py-5 my-5 w-auto h-auto"><video controls width="600">
                                <source src="${url}" type="${file.type}" />
                                Your browser does not support the video tag.
                            </video>
                            <h1 class="text-3xl text-green-800 font-bold">${file.name}</h1></div>`;
            newitem.style.backgroundColor = 'lightgray';
            newitem.style.borderRadius = "5px";
            document.getElementById("videos")?.appendChild(newitem);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Upload Your Video</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <label htmlFor="description" className="text-sm font-medium absolute text-gray-700 -top-4 left-2 bg-white px-2">
                                Video File
                            </label>
                            <input type="file" accept="video/*" onChange={handleFileChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lime-400 file:text-green-800 hover:file:bg-lime-500"/>
                            <div id="videos"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
