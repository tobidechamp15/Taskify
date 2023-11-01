import React, { useState, useEffect } from "react";
import { db } from "./firebase/config";
import { getDocs, collection } from "firebase/firestore";
import AppNavbar from "./AppNavbar";
import NoUser from "./NoUser";
import AddTask from "./AddTask";
import DisplayTasks from "./DisplayTasks";

const TaskAdd = () => {
  const [userData, setUserData] = useState([]);
  const users = collection(db, "users");
  const [tasks, setTasks] = useState([]); // Store the retrieved tasks

  // const { userId } = useLocation();
  // const location = useLocation();
  // return location;
  let loggedInUser = localStorage.getItem("userId");
  const isLoggedIn = !!loggedInUser;
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getDocs(users);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const user = filteredData.find((data) => data.id === loggedInUser);

        if (user) {
          // console.log(user);
          setUserData(user);
        }
      } catch (err) {
        alert(err);
        console.error(err);
      }
    };
    getUserData();
  }, [loggedInUser]);
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
  // console.log(tasks);
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <AppNavbar {...userData} />
          <AddTask />
          <DisplayTasks {...tasks} />
        </>
      ) : (
        <NoUser />
      )}
    </div>
  );
};

export default TaskAdd;
