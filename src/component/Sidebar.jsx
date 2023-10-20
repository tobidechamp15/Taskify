import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ isVisible }) => {
  return (
    <div
      className={`xs:flex bg-slate-300 flex-col gap-2 relative top-[90px] p-1 pb-3 transition-all ease-in-out duration-500 ${
        isVisible ? "left-0" : "left-full"
      }`}
    >
      <Link to="/" className="hover:text-blue-400">
        Home
      </Link>
      <Link to="/" className="hover:text-blue-400">
        About
      </Link>
      <Link to="/" className="hover:text-blue-400">
        Contact
      </Link>
      <Link
        to="/login"
        className="text-white text-xl cursor-pointer hover:text-slate-100 rounded-lg transition-all duration-500 ease-in-out bg-blue-400 p-2 w-fit"
      >
        Try it Free
      </Link>
    </div>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Sidebar;
