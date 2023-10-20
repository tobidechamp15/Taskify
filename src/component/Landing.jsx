import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";

const Landing = () => {
  const [isVisible, setVisible] = useState("");

  const toggleSidebar = () => {
    setVisible(!isVisible);
  };
  return (
    <section>
      <div >
        <Navbar toggleSidebar={toggleSidebar} isVisible={isVisible} />
        <Sidebar isVisible={isVisible} toggleSidebar={toggleSidebar} />
      </div>
      <Home />
    </section>
  );
};

export default Landing;
