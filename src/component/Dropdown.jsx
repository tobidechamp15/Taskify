import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Dropdown = ({ handleDropdown }) => {
  const dropdownClassName = handleDropdown
    ? "flex flex-col gap-2  bg-white rounded-lg border  text-black absolute   right-[20px] mt-1 transition-all ease-in-out"
    : "p-0 m-0 h-0";

  return (
    <>
      <div className={dropdownClassName}>
        <Link className="w-100 px-5 hover:bg-gray-100 py-2 transition-all ease-in-out duration-300 rounded-sm font text-base ">Account</Link>
        <Link className="w-100 px-5 hover:bg-gray-100 py-2 transition-all ease-in-out duration-300 rounded-sm font text-base ">Support</Link>
        <Link className="w-100 px-5 hover:bg-gray-100 py-2 transition-all ease-in-out duration-300 rounded-sm font text-base ">History</Link>
        <Link className="w-100 px-5 border-t hover:bg-gray-100 py-2 transition-all ease-in-out duration-300 rounded-sm font text-base ">Sign Out</Link>
      </div>
    </>
  );
};
Dropdown.propTypes = {
  handleDropdown: PropTypes.func.isRequired,
  // Define PropTypes for other props as needed
};

export default Dropdown;
