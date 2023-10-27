import React from "react";
import logo from "../assets/white logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Navbar = ({ toggleSidebar, isVisible }) => {
  return (
    <div className="shadow-lg flex justify-between xsm:px-4 md:justify-evenly bg-blue-700 py-2 fixed top-0 w-100 items-center z-40">
      <Link to="/">
        <img src={logo} className="w-[110px]" />
      </Link>
      <div className="hidden md:flex justify-evenly items-center gap-3 ">
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
          className="text-white text-xl cursor-pointer hover:text-slate-100 rounded-lg transition-all duration-500 ease-in-out bg-[#617fd1] p-2 "
        >
          Try it Free
        </Link>
      </div>
      {isVisible ? (
        <section
          className="text-white  flex md:hidden cursor-pointer"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faX} size="2xl" />
        </section>
      ) : (
        <section
          className="text-white  flex md:hidden cursor-pointer"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </section>
      )}
    </div>
  );
};
Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // Change the prop type and required status as needed
  isVisible: PropTypes.func.isRequired,
};

export default Navbar;
