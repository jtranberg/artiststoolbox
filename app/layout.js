"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-t from-purple-700 to-orange-500 text-white font-sans`}
      >
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b border-gray-600 relative">
          <h1 className="text-2xl font-bold">CoverCraft(logo)</h1>
          <nav>
            {/* Hamburger Button */}
            <button
              className="block sm:hidden p-2 rounded-md border border-gray-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>

            {/* Menu Items */}
            <ul
              className={`${
                menuOpen ? "block" : "hidden"
              } sm:flex gap-4 absolute sm:static top-12 left-0 sm:top-auto sm:left-auto bg-purple-900 sm:bg-transparent w-full sm:w-auto p-4 sm:p-0 z-50`}
            >
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/TextToImage" className="hover:underline">
                  Text to Image
                </a>
              </li>
              <li>
                <a href="/TextToLyrics" className="hover:underline">
                  Text to Lyrics
                </a>
              </li>
              <li>
                <a href="/Upscaler" className="hover:underline">
                  Upscaler
                </a>
              </li>
              <li>
                <a href="/About" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/Projects" className="hover:underline">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="p-4 border-t border-gray-600 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CoverCraft. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
