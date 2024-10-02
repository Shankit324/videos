'use client';

import React, { useState } from 'react';

export default function Form() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [Path, setPath] = useState<string>('');

    type Video = {
        title: string,
        description: string,
        Path: string
    };

    const convertToBase64 = () => {
        let x = localStorage.getItem("Lib") as string;
        let y: Video[] = JSON.parse(x);
        if (y) {
            y.push({
                title: title as string,
                description: description as string,
                Path: Path as string,
            })
            localStorage.setItem("Lib", JSON.stringify(y));
        }
        else {
            let z = [];
            z.push({
                title: title as string,
                description: description as string,
                Path: Path as string,
            })
            localStorage.setItem("Lib", JSON.stringify(z));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        convertToBase64();
        window.location.href = '/';
    };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Upload Your Video</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <label htmlFor="title" className="text-sm font-medium text-gray-700 absolute -top-4 left-2 bg-white px-2">
                                Video Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Enter the video title"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="description" className="text-sm font-medium absolute text-gray-700 -top-4 left-2 bg-white px-2">
                                Video Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Enter a brief description"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="description" className="text-sm font-medium absolute text-gray-700 -top-4 left-2 bg-white px-2">
                                URL
                            </label>
                            <input
                                id="path"
                                name="path"
                                onChange={(e) => setPath(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Enter the path of the file"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 ease-in-out"
                        >
                            Upload Video
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
