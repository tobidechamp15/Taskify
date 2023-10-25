import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Description from "./Description";
import Contact from "./Contact";

const Landing = () => {
  const [isVisible, setVisible] = useState("");

  const toggleSidebar = () => {
    setVisible(!isVisible);
  };
  return (
    <div className="mt-[90px]">
      <Navbar toggleSidebar={toggleSidebar} isVisible={isVisible} />

      <Sidebar isVisible={isVisible} toggleSidebar={toggleSidebar} />
      <Home />
      <Description />
      <Contact />
    </div>
  );
};

export default Landing;
