import React from "react";
import taskImg from "../assets/task-img.png";

const Home = () => {
  return (
    <div className="container-fluid bg-blue-700  background-container">
      <span className="moving-image"></span>
      <section className="flex xsm:flex-col  h-screen items-center w-100 container xsm:pt-[35%] md:justify-between  xsm:gap-5">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-4xl xsm:text-2xl text-white font-semibold">
            Organize your day
          </span>
          <span className="text-white text-5xl xsm:text-3xl font-semibold">
            Stay Creative
          </span>
        </div>
        <div className="md:w-1/2">
          <img src={taskImg} alt="" className=" opacity" />
        </div>
      </section>
    </div>
  );
};

export default Home;
