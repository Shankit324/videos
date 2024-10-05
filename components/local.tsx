'use client';

import React from 'react';
import { IoIosPlayCircle } from "react-icons/io";

export default function Local() {
    return (
        <div className='flex flex-column flex-wrap items-center justify-center'>
            <IoIosPlayCircle className="flex flex-row flex-wrap justify-around w-full text-6xl font-bold my-6 align-middle items-center" />
            <div className="text-white flex flex-row flex-wrap justify-around w-full text-3xl font-bold my-6 align-middle items-center">
                Watch Videos Effortlessly
            </div>
            <a href="/upload" className='flex flex-row flex-wrap justify-around w-4/5'>
                <div style={{backgroundColor: "blueviolet"}} className="text-white flex flex-row flex-wrap justify-around w-2/5 font-semibold py-2 px-6 rounded-lg bg-blue-700">
                    Upload Videos
                </div>
            </a>
        </div>
    );
}
