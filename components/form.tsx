'use client';

import React, { useState } from 'react';
import '@/app/globals.css';

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
            newitem.innerHTML = `<div class="box" style="margin: 5px 0;">
  <div class="container" style="position: relative; width: auto; display: block; cursor: pointer; display: flex; align-items: center; bottom: 0">
    <div class='timeline' style="position: absolute; width: 100%; height: 10px; background-color: #ccc; cursor: pointer; bottom: 30px; opacity: 0; z-index: 50">
  <!-- Background of the timeline -->
  <div class='progress' style="position: absolute; top: 0; left: 0; height: 100%; width: 50%; background-color: #007bff;">
    <!-- Progress of the timeline (dynamic width based on video time) -->
  </div>
</div>
    <div class="controls" style="position: absolute; height: 30px; width: 100%; z-index: 20; bottom: 0; left: 0; display: flex; align-items: center; gap: 10px; opacity: 0; color: white; background-color: rgba(0, 0, 0, 0.6);">
      <!-- Play/Pause Button -->
      <span class="play-pause" style="width: 10%; height: 100%; cursor: pointer; display: inline-block;">
        <svg class="play-icon" viewBox="0 0 24 24" style="width: 100%; height: 100%; display: block; cursor: pointer;">
          <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
        <svg class="pause-icon" viewBox="0 0 24 24" style="width: 100%; height: 100%; display: none; cursor: pointer;">
          <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
        </svg>
      </span>

      <!-- Volume Control -->
      <span class="volume-container" style="width: auto; height: 100%; cursor: pointer; display: inline-flex; align-items: center;">
  <span class="volume" style="width: auto; height: 100%; display: flex; align-items: center;">
    <span class="mute-btn" style="cursor: pointer; display: flex; align-items: center; justify-content: center;">
      <svg class="volume-high-icon" viewBox="0 0 24 24" style="width: 20px; height: 20px; display: block;">
        <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>
      </svg>
      <svg class="volume-low-icon" viewBox="0 0 24 24" style="width: 20px; height: 20px; display: none;">
        <path fill="currentColor" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"/>
      </svg>
      <svg class="volume-muted-icon" viewBox="0 0 24 24" style="width: 20px; height: 20px; display: none;">
        <path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"/>
      </svg>
    </span>
  </span>
  <input class="volume-slider" type="range" min="0" max="1" step="any" style="width: 0; height: 100%; cursor: pointer; display: none;">
</span>

      <!-- Time and Duration Display -->
      <div style="display: flex; align-items: center; width: 25%; justify-content: center;">
        <div class="duration-container" style="cursor: pointer;">00:00:00</div>
        <div style="padding: 0 5px;">/</div>
        <div class="total-duration" style="cursor: pointer;"></div>
      </div>

      <!-- Speed Control -->
      <span class="speed-btn" style="width: 8%; height: 100%; display: inline-block; cursor: pointer;">1x</span>

      <!-- Mini Player Button -->
      <span class="mini-player" style="width: 8%; height: 100%; display: inline-block; cursor: pointer;">
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z" />
        </svg>
      </span>

      <!-- Theatre Mode Button -->
      <span class="theatre-btn" style="width: 8%; height: 100%; display: inline-block; cursor: pointer;">
        <svg class="tall" viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" />
        </svg>
        <svg class="wide" viewBox="0 0 24 24" style="width: 100%; height: 100%; display: none;">
          <path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" />
        </svg>
      </span>

      <!-- Fullscreen Button -->
      <span class="full-screen-btn" style="width: 10%; height: 100%; display: inline-block; cursor: pointer;">
        <svg class="open" viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
        </svg>
        <svg class="close" viewBox="0 0 24 24" style="width: 100%; height: 100%; display: none;">
          <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
        </svg>
      </span>
    </div>

    <!-- Video Element -->
    <video class="video" style="width: 100%; display: block; height: auto; overflow-y: hidden; overflow-x: hidden">
      <source src="${url}" type="${file.type}" />
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- Video Title -->
  <h5 style="font-weight: 700; padding: 5px;">${file.name}</h5>
</div>
`;
            document.getElementById("videos")?.appendChild(newitem);
            newitem.style.backgroundColor = 'lightgray';
            newitem.style.borderRadius = "5px";
            let n = document.getElementsByClassName("box").length;
            let p, q;
            let v: any;
            let vc: any;
            let c: any;
            let vs: any;
            let m: any;
            let l: any;
            let mute: any;
            let h: any;
            let current: any;
            let total: any;
            let speed: any;
            let timeline: any;
            let progress: any;
            progress = document.getElementsByClassName('progress')[n - 1];
            timeline = document.getElementsByClassName('timeline')[n - 1];
            current = document.getElementsByClassName('duration-container')[n - 1];
            total = document.getElementsByClassName('total-duration')[n - 1];
            v = document.getElementsByClassName('video')[n - 1];
            vc = document.getElementsByClassName('container')[n - 1];
            c = document.getElementsByClassName('controls')[n - 1];
            vs = document.getElementsByClassName('volume-slider')[n - 1];
            m = document.getElementsByClassName('mute-btn')[n - 1];
            l = document.getElementsByClassName('volume-low-icon')[n - 1];
            mute = document.getElementsByClassName('volume-muted-icon')[n - 1];
            h = document.getElementsByClassName('volume-high-icon')[n - 1];
            speed = document.getElementsByClassName('speed-btn')[n - 1];
            v.addEventListener('click', () => {
                p = document.getElementsByClassName('play-icon')[n - 1] as any;
                q = document.getElementsByClassName('pause-icon')[n - 1] as any;
                if (p.style.display == 'none') {
                    p.style.display = 'block';
                    q.style.display = 'none';
                    v.pause();
                }
                else if (q.style.display == 'none') {
                    p.style.display = 'none';
                    q.style.display = 'block';
                    v.play();
                }
            })
            timeline.addEventListener('click', function (event: any) {
                const timelineWidth = timeline.offsetWidth;
                const clickPosition = event.offsetX;
                const clickPercentage = (clickPosition / timelineWidth);
                progress.style.width = `${clickPercentage*100}%`;
                v.currentTime = clickPercentage * v.duration;
            });
            document.getElementsByClassName("box")[n - 1].addEventListener('mouseenter', () => {
                p = document.getElementsByClassName('controls')[n - 1] as any;
                p.style.opacity = 1;
                timeline.style.opacity = 1;
            })
            document.getElementsByClassName("box")[n - 1].addEventListener('mouseleave', () => {
                p = document.getElementsByClassName('controls')[n - 1] as any;
                p.style.opacity = 0;
                timeline.style.opacity = 0;
            })
            document.getElementsByClassName("play-pause")[n - 1].addEventListener('click', () => {
                p = document.getElementsByClassName('play-icon')[n - 1] as any;
                q = document.getElementsByClassName('pause-icon')[n - 1] as any;
                if (p.style.display == 'none') {
                    p.style.display = 'block';
                    q.style.display = 'none';
                    v.pause();
                }
                else if (q.style.display == 'none') {
                    p.style.display = 'none';
                    q.style.display = 'block';
                    v.play();
                }
            })
            document.getElementsByClassName("mini-player")[n - 1].addEventListener('click', async () => {
                try {
                    if (v.requestPictureInPicture) {
                        await v.requestPictureInPicture();
                    }
                } catch (error) {
                    console.error("Error entering PiP mode: ", error);
                }
            })
            document.getElementsByClassName("theatre-btn")[n - 1].addEventListener('click', (e: any) => {
                p = document.getElementsByClassName('tall')[n - 1] as any;
                q = document.getElementsByClassName('wide')[n - 1] as any;
                // Hide all other video containers
                const allContainers = document.getElementsByClassName('container');
                for (let i = 0; i < allContainers.length; i++) {
                    if (i !== n - 1) {
                        (allContainers[i] as HTMLElement).style.display = 'none';
                    }
                }
                if (p.style.display == 'none') {
                    p.style.display = 'block';
                    q.style.display = 'none';
                    vc.style.position = 'relative';
                    vc.style.width = 'auto';
                    vc.style.height = 'auto';
                    vc.style.top = '0';
                    vc.style.left = '0';
                    vc.zIndex = 0;
                    c.zIndex = 0;
                    for (let j = 0; j < allContainers.length; j++) {
                        (allContainers[j] as HTMLElement).style.display = 'block';
                    }
                }
                else if (q.style.display == 'none') {
                    p.style.display = 'none';
                    q.style.display = 'block';
                    vc.style.height = 'auto';
                    vc.style.width = `${(5 / 10) * window.innerWidth}px`;
                    vc.style.position = 'fixed';
                    vc.style.top = '0';
                    vc.style.left = '0';
                    vc.style.backgroundColor = 'black';
                    vc.zIndex = 50;
                    c.zIndex = 70;
                }
            })
            document.getElementsByClassName("full-screen-btn")[n - 1].addEventListener('click', async () => {
                p = document.getElementsByClassName('open')[n - 1] as any;
                q = document.getElementsByClassName('close')[n - 1] as any;
                if (p.style.display == 'none') {
                    p.style.display = 'block';
                    q.style.display = 'none';
                    try {
                        if (!document.fullscreenElement) {
                            await vc.requestFullscreen();
                        } else {
                            document.exitFullscreen();
                        }
                    } catch (error) {
                        console.error("Error entering full-screen: ", error);
                    }
                }
                else if (q.style.display == 'none') {
                    p.style.display = 'none';
                    q.style.display = 'block';
                    try {
                        if (!document.fullscreenElement) {
                            await vc.requestFullscreen();
                        } else {
                            document.exitFullscreen();
                        }
                    } catch (error) {
                        console.error("Error entering full-screen: ", error);
                    }
                }
            })
            document.getElementsByClassName("volume-container")[n - 1].addEventListener("mouseenter", () => {
                vs.style.width = "70px";
                vs.style.display = "block";
                vs.style.transition = "width 150ms ease-in-out";
            })
            document.getElementsByClassName("volume-container")[n - 1].addEventListener("mouseleave", () => {
                vs.style.width = 0;
                vs.style.display = "none";
            })
            vs.addEventListener('input', (e: any) => {
                v.volume = e.target.value;
                v.muted = e.target.value === 0;
            })
            v.addEventListener("volumechange", () => {
                vs.value = v.volume;
                if (v.muted || v.volume === 0) {
                    mute.style.display = 'block';
                    l.style.display = 'none';
                    h.style.display = 'none';
                }
                else if (v.volume >= 0.5) {
                    mute.style.display = 'none';
                    l.style.display = 'none';
                    h.style.display = 'block';
                }
                else {
                    mute.style.display = 'none';
                    l.style.display = 'block';
                    h.style.display = 'none';
                }
            })
            v.addEventListener("loadeddata", () => {
                total.textContent = duration(v.duration);
            })
            v.addEventListener("timeupdate", () => {
                current.textContent = duration(v.currentTime);
                const percentage = (v.currentTime / v.duration) * 100;
                progress.style.width = percentage + '%';
            })
            const duration = (time: any) => {
                const sec = Math.floor(time % 60);
                const min = Math.floor(time / 60) % 60;
                const hr = Math.floor(time / 3600) % 60;
                return `${hr}:${min}:${sec}`;
            }
            document.addEventListener('keydown', (event: any) => {
                // Check which key is pressed
                if (event.key === 'ArrowRight') {
                    // Skip forward 10 seconds
                    v.currentTime = Math.min(v.currentTime + 5, v.duration); // Ensure it doesn't go beyond video length
                } else if (event.key === 'ArrowLeft') {
                    // Skip backward 10 seconds
                    v.currentTime = Math.max(v.currentTime - 5, 0); // Ensure it doesn't go before 0
                }
            });
            speed.addEventListener("click", () => {
                let x: number = v.playbackRate + 0.25;
                if (x > 2) {
                    x = 0.25;
                }
                v.playbackRate = x;
                speed.textContent = `${x}x`;
            })
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
                            <input type="file" accept="video/*" onChange={handleFileChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lime-400 file:text-green-800 hover:file:bg-lime-500" />
                            <div id="videos"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
