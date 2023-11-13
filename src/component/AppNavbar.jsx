import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/white logo.png";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";

const AppNavbar = (props) => {
  const [showDropdownComponent, setShowDropdownComponent] = useState(false);

  const handleDropdown = () => {
    setShowDropdownComponent(!showDropdownComponent);
  };
  const user = props;
  // console.log(user);
  return (
    <>
      <section className="flex justify-between px-[40px] bg-blue-700 py-3 items-center text-white">
        <span className="hidden md:flex">Organize your day today</span>
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-[130px]" />
        </NavLink>
        <section>
          <div
            onClick={handleDropdown}
            className="flex gap-2 items-center md:bg-gray-100 md:rounded-2xl md:p-2 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-xl bg-gray-300 rounded-full  p-[10px]"
            />
            <span className="text-blue-400 md:block xsm:hidden">
              {user.username}
            </span>
          </div>

          {showDropdownComponent ? (
            <Dropdown handleDropdown={handleDropdown} />
          ) : null}
        </section>
      </section>
    </>
  );
};

export default AppNavbar;
