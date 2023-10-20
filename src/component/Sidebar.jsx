import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div
      className={` absolute  xsm:flex hidden bg-blue-700  flex-col gap-2   p-[5%] justify-evenly pb-3 transition-all ease-in-out duration-500 ${
        isVisible ? "left-0 h-screen w-100" : "-left-full h-0 w-0 -z-10"
      }`}
    >
      <div onClick={toggleSidebar} className="text-white text-3xl  w-100">
        <FontAwesomeIcon icon={faX} className=" cursor-pointer" />
      </div>
      <Link
        to="/"
        className="hover:text-blue-400 text-xl font-semibold text-white border-b hover:ms-4 transition-all ease-in-out duration-700 border-black p-2"
      >
        Home
      </Link>
      <Link
        to="/"
        className="hover:text-blue-400 text-xl font-semibold text-white border-b hover:ms-4 transition-all ease-in-out duration-700 border-black p-2"
      >
        About
      </Link>
      <Link
        to="/"
        className="hover:text-blue-400 text-xl font-semibold text-white border-b hover:ms-4 transition-all ease-in-out duration-700 border-black p-2"
      >
        Contact
      </Link>
      <Link
        to="/login"
        className="text-white text-xl cursor-pointer btn btn-outline-primary hover:text-slate-100 rounded-lg transition-all duration-500 ease-in-out bg-blue-400 p-2 w-fit"
      >
        Try it Free
      </Link>
    </div>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // Change the prop type and required status as needed
  isVisible: PropTypes.bool.isRequired,
};

export default Sidebar;
