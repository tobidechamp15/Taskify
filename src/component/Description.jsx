import React from "react";
import { useSpring, animated } from "react-spring";
import work from "../assets/home-img.png";
import organize from "../assets/organize.png";
import image3 from "../assets/image 3.png";
import image4 from "../assets/board todo.svg";

const Description = () => {
  // Define an animation to slide in the spans from the left
  const slideInAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <div className="bg-slate-300 w-100">
      <section className="flex items-center justify-between">
        <section className="font font-medium text-center">
          <div className="animate__animated animate__fadeIn h-screen flex justify-between items-center xsm:flex-col xsm:h-full md:flex-row-reverse p-[5%] bg-white">
            <animated.div
              style={slideInAnimation}
              className="md:text-xl md:w-1/2 xsm:py-[30%]"
            >
              Our app is designed to help you regain control of your life and
              increase your productivity.
            </animated.div>
            <img src={work} alt="work" className="md:w-1/2" />
          </div>
          <animated.div
            style={slideInAnimation}
            className="md:h-screen flex justify-evenly items-center xsm:flex-col xsm:h-full bg-slate-300 p-[5%]"
          >
            <span className="md:text-xl md:w-1/2 xsm:py-[30%]">
              Your solution to effortless task management and organization.
            </span>
            <img
              src={organize}
              alt="organize"
              className="xsm:h-full md:w-1/2"
            />
          </animated.div>
          <animated.div
            style={slideInAnimation}
            className="md:h-screen flex justify-evenly items-center xsm:flex-col md:flex-row-reverse xsm-h-full bg-white p-[5%]"
          >
            <span className="md:text-xl md:w-1/3 xsm:py-[30%]">
              With Taskify, you can easily create, prioritize, and manage your
              tasks, ensuring you stay on top of your to-do list and achieve
              your goals.
            </span>
            <img src={image3} alt="organize" className="xsm:h-full md:w-1/2" />
          </animated.div>
          <animated.div
            style={slideInAnimation}
            className="md:h-screen flex justify-evenly items-center xsm:flex-col bg-slate-300 p-[5%] pb-[250px]"
          >
            <span className="md:text-xl md:w-1/2 xsm:py-[30%]">
              Say goodbye to missed deadlines and uncompleted tasks.
            </span>
            <img
              src={image4}
              alt="organize"
              className="xsm:h-full md:w-1/2"
            />
          </animated.div>
        </section>
      </section>
    </div>
  );
};

export default Description;
