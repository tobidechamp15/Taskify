import React from "react";
import logo from "../assets/white logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly bg-blue-700 py-2 fixed top-0 w-100">
      <Link to="/">
        <img src={logo} className="w-[110px]" />
      </Link>
      <div className="flex justify-evenly items-center gap-3 ">
        <Link
          to="/"
          className="text-slate-100 text-xl cursor-pointer font-semibold hover:text-blue-400 transition-all duration-500 ease-in-out  "
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-slate-100 text-xl cursor-pointer font-semibold hover:text-blue-400 transition-all duration-500 ease-in-out "
        >
          About
        </Link>
        <Link
          to="/"
          className="text-slate-100 text-xl cursor-pointer font-semibold hover:text-blue-400 transition-all duration-500 ease-in-out "
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="text-white text-xl cursor-pointer hover:text-slate-100 rounded-lg transition-all duration-500 ease-in-out bg-blue-400 p-2 "
        >
          Try it Free
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
