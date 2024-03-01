import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <div className="navigation px-20 py-5 flex items-center justify-between bg-slate-800 text-[#E0FBFC]">
        <h1 className="site-title md:text-5xl text-4xl font-bold "><a href="/">Book Karo</a></h1>
        {toggle ? (
          <h3
            onClick={() => setToggle(!toggle)}
            className="text-2xl sm:hidden block"
          >
           <AiOutlineClose />
          </h3>
        ) : (
          <h3
            onClick={() => setToggle(!toggle)}
            className="text-2xl sm:hidden block"
          >
          <AiOutlineMenu />
          </h3>
        )}
        <ul className="links z-10 gap-5 hidden sm:flex">
          <li className="nav-link">
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            <a href="/bus">Bus</a>
          </li>
          <li className="nav-link">
            <a href="/tour">Tour</a>
          </li>
          <li className="nav-link">
            <a href="/attraction">Attraction</a>
          </li>
          <li className="nav-link">
            <a href="/event">Event</a>
          </li>
          <li className="nav-link">
            <a href="/blog">Blog</a>
          </li>
          <li className="nav-link">
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className="nav-link">
            <a href="/register">Register</a>
          </li>
          <li className="nav-link">
            <a href="/login">Login</a>
          </li>
        </ul>
        {/* Responsive menu */}
        <ul
          className={`duration-300 z-10 links top-20 py-5 h-screen text-[#E0FBFC] w-full sm:hidden fixed bg-slate-900
        ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className="px-5 py-3 nav-link">
            <a href="/">Home</a>
          </li>
          <li className="px-5 py-3 nav-link">
            <a href="/bus">Bus</a>
          </li>
          <li className="px-5 py-3 nav-link">
            <a href="/tour">Tour</a>
          </li>
          <li className="px-5 py-3 nav-link">
            <a href="/attraction">Attraction</a>
          </li>
          <li className="px-5 py-3 nav-link">
            <a href="/event">Event</a>
          </li>
          <li className="px-5 py-3 nav-link">
            <a href="/blog">Blog</a>
          </li>
          <li className="px-5 py-3 nav-link">
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className="px-5 py-3 nav-link">
            <a href="/register">Register</a>
          </li>
          <li className="px-5 py-3 nav-link">
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
