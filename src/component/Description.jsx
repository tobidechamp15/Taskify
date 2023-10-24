import React from "react";
import work from "../assets/home-img.png";
import organize from "../assets/organize.png";
import image3 from "../assets/image 3.png";

const Description = () => {
  return (
    <div className=" bg-slate-300 w-100">
      <section className=" flex  items-center justify-between">
        <section className="  font font-medium text-center">
          <div className="h-screen flex justify-between items-center xsm:flex-col xsm:h-full md:flex-row-reverse p-[5%] bg-white">
            <span className="md:text-xl  md:w-1/2 xsm:py-[30%]">
              Our app is designed to help you regain control of your life and
              increase your productivity.
            </span>
            <img src={work} alt="work" className="md:w-1/2" />
          </div>
          <div className="md:h-screen flex justify-evenly items-center xsm:flex-col xsm:h-full bg-slate-300 p-[5%]">
            <span className="md:text-xl md:w-1/2 xsm:py-[30%] ">
              Your solution to effortless task management and organization.
            </span>
            <img src={organize} alt="organize" className="xsm:h-full md:w-1/2" />
          </div>
          <div className="md:h-screen flex justify-evenly items-center xsm:flex-col md:flex-row-reverse xsm-h-full bg-white p-[5%]">
            <span className="md:text-xl md:w-1/3   xsm:py-[30%]">
              With Taskify, you can easily create, prioritize, and manage your
              tasks, ensuring you stay on top of your to-do list and achieve
              your goals.
            </span>
            <img src={image3} alt="organize" className=" xsm:h-full md:w-1/2" />
          </div>
          <div className="h-screen flex justify-evenly items-center xsm:flex-col  bg-slate-300  p-[5%]">
            <section className="md:text-xl md:w-1/2 xsm:py-[30%]   flex items-center justify-center">
              <span className="w-50 h-100">
                Say goodbye to missed deadlines and uncompleted tasks.
              </span>
            </section>
            <img src={organize} alt="organize" className=" xsm:h-full md:w-1/2" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Description;
