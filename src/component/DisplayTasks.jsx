import React, { useState } from "react";
import "firebase/firestore";
import { db } from "./firebase/config";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const DisplayTasks = (props) => {
  // console.log(props);
  // const [checked, setChecked] = useState(false);

  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCompletedTasks = async (id, index) => {
    setCompletedTasks([completedTasks[index], id]);

    const userId = localStorage.getItem("userId");

    try {
      // Update the 'completed' field of the specific task in Firestore
      const taskRef = doc(db, "tasks", userId, "userTasks", id);
      const taskSnapshot = await getDoc(taskRef);

      const currentTaskData = taskSnapshot.data();

      // Toggle the 'completed' state
      const newCompletedState = !currentTaskData.completed;

      await updateDoc(taskRef, {
        completed: newCompletedState,
      });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const userId = localStorage.getItem("userId");
  const handleDeleteTasks = async (id) => {
    try {
      // Delete a specific task in Firestore
      const taskRef = doc(db, "tasks", userId, "userTasks", id);
      await deleteDoc(taskRef);
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };
  const hasTasks = Object.keys(props).length > 0;

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {hasTasks ? (
        Object.keys(props).map((key, index) => (
          <div
            key={key}
            className="flex gap-2 rounded-md justify-between  px-3 py-4 bg-gray-200 shadow-md items-center w-100 mx-4"
          >
            <section className="flex flex-col w-50">
              <span className="text-primary   md:text-xl whitespace-normal  w-full overflow-hidden">
                {props[key].title}
              </span>
              <p>{props[key].detail}</p>
            </section>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {props[key].completed && (
                <span className="text-green-500 font-bold md:text-xl">
                  Completed
                </span>
              )}
              <div
                className={
                  props[key].completed
                    ? "text-green-600 cursor-pointer text-xl  block bg-gray-100 hover:bg-gray-300 p-1 rounded-lg opacity-100 transition-all ease-in-out duration-300"
                    : "hover:text-green-600 text-xl cursor-pointer bg-white hover:bg-gray-200 px-1 transition-all ease-in-out duration-300"
                }
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  onClick={() => {
                    handleCompletedTasks(props[key].id, index);
                  }}
                  className={
                    props[key].completed
                      ? "text-green-600 cursor-pointer text-xl  block bg-gray-100 hover:bg-gray-300 p-1 rounded-lg opacity-100 transition-all ease-in-out duration-300"
                      : "hover:text-green-600 text-xl cursor-pointer bg-white hover:bg-gray-200 opacity-0  transition-all ease-in-out duration-300"
                  }
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    handleDeleteTasks(props[key].id);
                  }}
                  className="text-red-600 cursor-pointer text-xl"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-[5%] mt-[20%] shadow-lg rounded-lg w-fit bg-white flex justify-center items-center text-4xl text-blue-400 font-bold flex-col gap-2">
          <span>No tasks has been added </span>
          <span className=" m-2 btn btn-primary">Add Now</span>
        </div>
      )}
      {/* {Object.keys(props).map((key, index) => (
        <div
          key={key}
          className="flex gap-2 rounded-md justify-between m-3 px-3 py-4 bg-gray-200 shadow-md items-center "
        >
          <section>
            <h2 className="text-primary text-xl">{props[key].title}</h2>
            <p>{props[key].detail}</p>
          </section>
          <div className="flex items-center gap-3">
            {props[key].completed && (
              <span className="text-green-500 font-bold text-xl">
                Completed
              </span>
            )}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default DisplayTasks;
