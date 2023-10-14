import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import app from "./firebase/config";
import firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false); // To control modal visibility
  const [errorMessage, setErrorMessage] = useState(""); // To store the error message
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = async (e) => {
    let auth = getAuth();
    e.preventDefault();
    console.log(email, password);

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log(response.user);
        })
        .catch((err) => {
          setErrorMessage("This user already exists");
          setShowErrorModal(true);
          // alert(err.message);
        });
    } else {
      console.log("object")
      setConfirmPasswordError("Password do not match.");
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  // useEffect(() => {
  //   setIsButtonDisabled(password !== confirmPassword);
  // }, [password, confirmPassword]);

  return (
    <div className="w-100 flex flex-col justify-center items-center h-screen -lg">
      <div className="flex flex-col xs:h-full justify-evenly xs:w-full xs:mx-1 w-[60%] md:w-[50%] sm:h-[70%]  p-[5%] md:p-[5%} shadow-lg">
        <div className="flex flex-col justify-center w-full items-center">
          <img src={logo} alt="logo" className="w-[100px]" />
        </div>
        <div className="text-2xl text-blue-400 font-bold text-center">
          Sign Up to Continue
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 text-black  items-center justify-center self-center w-100 "
        >
          <div className="form__group field">
            <input
              type="email"
              className="form__field"
              placeholder="Name"
              value={email} // set value to email state
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="name" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group field">
            <input
              type="password"
              className="form__field"
              placeholder="Name"
              value={password} // set value to password state
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="name" className="form__label">
              Password
            </label>
          </div>
          <div className="form__group field">
            <input
              type="password"
              className="form__field"
              placeholder="Name"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="name" className="form__label">
              Confirm Password
            </label>
            <span className="text-red-500 my-[15px]">{confirmPasswordError}</span>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-outline-primary"
            >
              Sign Up
            </button>
          </div>
        </form>
        <section>
          <span></span>
        </section>
      </div>
      {showErrorModal && (
        <div className="error-modal">
          <div className="error-content flex flex-col justify-center items-center">
            <div
              className="close bg-red-500 p-1 rounded-[50%] w-[40px]"
              onClick={closeErrorModal}
            >
              <FontAwesomeIcon icon={faXmark} className="text-white" bounce />
            </div>
            <p className="text-red-400  font-bold text-2xl">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Signup;
