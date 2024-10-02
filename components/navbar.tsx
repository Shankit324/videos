'use client';

import React, { useState } from 'react';
import Link from "next/link";
import "../app/output.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Video Player</div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? null : '☰'}
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <button className="navbar-toggle1" onClick={toggleNavbar}>
          {isOpen ? '✖' : null}
        </button>
        <li className='li'><Link href="/">Home</Link></li>
        <li className='li'><Link href="/upload">Upload</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;