import React from "react";
import { useSpring, animated } from "react-spring";

import taskImg from "../assets/task-img.png";

const Home = () => {
  const slideInAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-100%)" },
  });
  return (
    <div className="container-fluid bg-blue-700  background-container">
      <span className="moving-image"></span>
      <section className="flex xsm:flex-col  md:h-screen items-center w-100 container xsm:pt-[35%] md:justify-between md:gap-5 xsm:gap-5">
        <animated.div
          style={slideInAnimation}
          className="flex flex-col gap-3 text-center md:w-1/2"
        >
          <span className="text-5xl xsm:text-3xl text-white font-semibold">
            Organize your day
          </span>
          <span className="text-gray-300 text-4xl xsm:text-2xl font-semibold w-100">
            Unlock your potential with our intuitive daily planning solution.
          </span>
        </animated.div>
        <div className="md:w-1/2">
          <img src={taskImg} alt="" className=" opacity" />
        </div>
      </section>
    </div>
  );
};

export default Home;
