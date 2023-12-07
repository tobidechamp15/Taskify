import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "./firebase/config";
import { collection, addDoc } from "firebase/firestore";

const AddTask = () => {
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  //   const [tasks, setTasks] = useState([]); // Store the retrieved tasks

  const handleTaskInput = () => {
    setShowTaskInput(!showTaskInput);
  };

  const handleCurrentDate = () => {
    const currentDate = new Date();
    setCurrentDate(currentDate.toLocaleDateString());
    setCurrentTime(currentDate.toLocaleTimeString());
  };

  const handleAddTask = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const userId = localStorage.getItem("userId");
    if (title == "" && detail == "") {
      alert("Please fill out all fields!");
    } else {
      setShowTaskInput(!showTaskInput);
      if (userId) {
        const userTasksRef = collection(db, "tasks", userId, "userTasks"); // Reference to a sub-collection under the user's document

        const userTaskData = {
          title: title,
          detail: detail,
          completed: false,
          // Add other user-specific data as needed
        };

        try {
          const newDocRef = await addDoc(userTasksRef, userTaskData);
          console.log("Document added with ID: ", newDocRef.id);
          // return newDocRef;
          // Clear the input fields
          setTitle("");
          setDetail("");
          // window.location.reload(); // Reload the window
        } catch (error) {
          console.error("Error creating task:", error);
        }
      }
    }
  };
  useEffect(() => {
    handleCurrentDate();
    const intervalId = setInterval(handleCurrentDate, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <section className="flex justify-between items-center p-3">
        <h1>Todo List</h1>
        <div>
          <div
            onClick={handleTaskInput}
            className="bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-blue-700 ease-in-out duration-300 cursor-pointer"
          >
            ADD NEW
          </div>
        </div>
        <section
          className={`${
            showTaskInput
              ? "right-0 w-[320px] bg-white block  top-0 shadow-lg absolute ease-in-out duration-300"
              : "right-[-320px] ease-in-out duration-300 absolute top-0 hidden"
          } h-screen transition-all duration-300 ease-in-out w-0  `}
        >
          <div className="flex px-3 py-4 justify-between items-center border-b">
            <span className="text-xl ">Add New Todo</span>
            <FontAwesomeIcon
              icon={faX}
              onClick={handleTaskInput}
              className="text-xl text-gray-400 cursor-pointer"
            />
          </div>

          <div className=" text-right m-2 text-green-400 font-bold flex flex-col">
            <span>Date : {currentDate}</span> <span>Time : {currentTime}</span>
          </div>

          <form className="flex flex-col gap-3 px-3 py-4 pt-2">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="titleInput">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="titleInput"
                className="w-100 form-control"
                required
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="detailInput">Detail</label>
              <textarea
                id="detailInput"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                name="detail"
                className="form-control"
              />
            </div>
            <div className="flex justify-between px-3 items-center">
              <span className="btn btn-secondary" onClick={handleTaskInput}>
                Cancel
              </span>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleAddTask}
              >
                Create
              </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default AddTask;
