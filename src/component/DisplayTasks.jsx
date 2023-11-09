import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "./firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DisplayTasks = (props) => {
  // console.log(props);
  // const [checked, setChecked] = useState(false);

  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCompletedTasks = async (id, index) => {
    console.log(id);
    setCompletedTasks([completedTasks[index], id]);

    const userId = localStorage.getItem("userId");
    console.log(userId);
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

  useEffect(() => {
    handleCompletedTasks();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {Object.keys(props).map((key, index) => (
        <div
          key={key}
          className="flex gap-2 rounded-md justify-between m-3 px-3 py-4 bg-gray-200 shadow-md items-center "
        >
          <section>
            <h2 className="text-primary text-xl">{props[key].title}</h2>
            <p>{props[key].detail}</p>
          </section>
          <div className="flex items-center  gap-2">
            {props[key].completed && (
              <span className="text-green-500 font-bold text-xl">
                Completed
              </span>
            )}
            <FontAwesomeIcon
              icon={faCheck}
              onClick={() => {
                handleCompletedTasks(props[key].id, index);
              }}
              className={
                completedTasks[index]
                  ? "text-green-600 cursor-pointer text-xl "
                  : "hover:text-green-600 text-xl cursor-pointer"
              }
            />
            {/* <label className="cursor-pointer checkbox-btn border-2 border-blue-400 bg-white pb-1">
              <label htmlFor="checkbox"></label>
              <input
                type="checkbox"
                id="checkbox"
                value={props[key].completed}
                onChange={() => handleCompletedTasks(index)}
                className="hidden"
              /> 
              <span className="checkmark"></span>
            </label> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTasks;
