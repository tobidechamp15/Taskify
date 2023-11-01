import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "firebase/firestore";
import { db } from "./firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const AddTask = () => {
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [tasks, setTasks] = useState([]); // Store the retrieved tasks

  const handleTaskInput = () => {
    setShowTaskInput(!showTaskInput);
  };

  const handleAddTask = async () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const userTasksRef = collection(db, "tasks", userId, "userTasks"); // Reference to a subcollection under the user's document

      const userTaskData = {
        title: title,
        detail: detail,
        // Add other user-specific data as needed
      };

      try {
        const newDocRef = await addDoc(userTasksRef, userTaskData);
        console.log("Document added with ID: ", newDocRef.id);
        // Clear the input fields
        setTitle("");
        setDetail("");
      } catch (error) {
        console.error("Error creating task:", error);
      }
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const userTasksRef = collection(db, "tasks", userId, "userTasks");

      try {
        const querySnapshot = await getDocs(userTasksRef);
        const tasksData = [];

        querySnapshot.forEach((doc) => {
          tasksData.push({ id: doc.id, ...doc.data() });
        });
        setTasks(tasksData);
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log(tasks);
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
              ? "right-0 w-[320px] bg-white   top-0 shadow-lg absolute ease-in-out duration-300"
              : "right-[-320px] ease-in-out duration-300 absolute top-0"
          } h-screen transition-all duration-300 ease-in-out w-[320px]`}
        >
          <div className="flex px-3 py-4 justify-between items-center border-b">
            <span className="text-xl ">Add New Todo</span>
            <FontAwesomeIcon
              icon={faX}
              onClick={handleTaskInput}
              className="text-xl text-gray-400"
            />
          </div>
          <section className="flex flex-col gap-3 px-3 py-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="titleInput">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="titleInput"
                className="w-100 form-control"
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
          </section>
          <div className="flex justify-between px-3 items-center">
            <span className="btn btn-secondary" onClick={handleTaskInput}>
              Cancel
            </span>
            <span className="btn btn-outline-primary" onClick={handleAddTask}>
              Create{" "}
            </span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AddTask;
