import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { db } from "./firebase/config";
import { getDocs, collection } from "firebase/firestore";

const TaskAdd = () => {
  const [userData, setUserData] = useState([]);
  const users = collection(db, "users");
  // const { userId } = useLocation();
  // const location = useLocation();
  // return location;
  let loggedInUser = localStorage.getItem("userId");
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
          console.log(userData);
          setUserData(user);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, [loggedInUser]);

  // console.log("current User ", loggedInUser);

  return (
    <div>
      <section className="flex bg-blue-400 text-white p-9 justify-evenly items-center">
        <h2>Organize Your day today</h2>
        <h1 className=" btn btn-outline-warning text-xl flex flex-end text-white ">{userData.username}</h1>
      </section>
    </div>
  );
};

export default TaskAdd;
