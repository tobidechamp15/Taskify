import React, { useState } from "react";

const DisplayTasks = (props) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCompletedTasks = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !completedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

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
          <div className="flex gap-2">
            {completedTasks[index] && (
              <span className="text-green-500 font-bold text-xl">
                Completed
              </span>
            )}
            <input
              type="checkbox"
              onChange={() => handleCompletedTasks(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTasks;
