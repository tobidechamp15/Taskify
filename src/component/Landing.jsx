import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Landing = () => {
  const [isVisible, setVisible] = useState("");

  const toggleSidebar = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} isVisible={isVisible} />
      <Sidebar isVisible={isVisible} toggleSidebar={toggleSidebar} />
    </div>
  );                                                                                                                                
};

export default Landing;
