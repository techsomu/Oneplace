"use client"
import React from 'react';
import Link from 'next/link'; // Use Link for navigation in Next.js


const MenuBar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">One Place</Link>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">services</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) menu.classList.toggle('hidden');
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className="hidden flex-col space-y-4 text-white text-center mt-4 md:hidden"
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Services</Link>
        </li>
        <li>
          <Link href="/services">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
