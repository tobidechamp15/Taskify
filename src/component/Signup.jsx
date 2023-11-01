import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { app, db } from "./firebase/config";
import { doc, setDoc } from "firebase/firestore";
// import firebase from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false); // To control modal visibility
  const [errorMessage, setErrorMessage] = useState(""); // To store the error message
  const [passwordError, setPasswordError] = useState(""); // To store the error message
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (!navigator.onLine) {
      // Handle the case where the user is offline
      setErrorMessage(
        "No internet connection. Please check your connection and try again."
      );
      setShowErrorModal(true);
      return;
    } else {
      setErrorMessage("");
      setShowErrorModal(false);
    }
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  const handleSubmit = async (e) => {
    let auth = getAuth(app);
    e.preventDefault();
    setLoading(true);

    if (password === confirmPassword) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        createUserProfile(response.user, username);
        await sendEmailVerification(response.user);
        window.location.href = "/login";
        // useNavigate("/");
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setErrorMessage("This user already exists", err);
          setShowErrorModal(true);
        }
        if (err.code === "auth/weak-password") {
          setPasswordError(
            "Password should not be less than 6 characters",
            err
          );
          setShowErrorModal(false);
        }

        setLoading(false);
        // alert(err.message);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setConfirmPasswordError("Password do not match.");
    }
  };

  const createUserProfile = (user, username) => {
    const userDocRef = doc(db, "users", user.uid); // Reference to the user's document using their UID

    // Define the user profile data
    const userProfileData = {
      username: username,
      email: user.email,
      verificationStatus: user.emailVerified,
      // Add other user-specific data as needed
    };

    setDoc(userDocRef, userProfileData)
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.error(
          "Error creating user profile:",
          error,
          "collection creation error"
        );
      });
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  function isValidUsername(username) {
    // Check if username has at least 8 characters and contains at least one number
    const regex = /^(?=.*[0-9]).{8,}$/;
    return regex.test(username);
  }

  // useEffect(() => {
  //   setIsButtonDisabled(password !== confirmPassword);
  // }, [password, confirmPassword]);
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };
  const handleUsername = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    setIsValid(isValidUsername(newUsername));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-100 flex flex-col justify-center items-center mt-[25%] -lg">
          <div className="flex flex-col xs:h-full justify-evenly xs:w-full xs:mx-1 w-[60%] md:w-[50%] form-width lg:w-[30%] sm:h-  p-[5%] md:p-[5%} shadow-lg">
            <Link
              to="/"
              className="flex flex-col justify-center w-full items-center"
            >
              <img src={logo} alt="logo" className="w-[100px]" />
            </Link>
            <div className="text-2xl text-blue-400 font-bold text-center mb-4 mt-4">
              Sign Up to Continue
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 text-black  items-center justify-center self-center w-100 "
            >
              <div className="form__group field">
                <input
                  type="text"
                  className="form__field"
                  placeholder="Name"
                  value={username} // set value to email state
                  onChange={handleUsername}
                  required
                />
                <label htmlFor="name" className="form__label">
                  Username
                </label>
                {!isValid && (
                  <p className="text-red-500 ">
                    Username must have at least 8 characters and contain at
                    least one number.
                  </p>
                )}
              </div>
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
                <span className="text-red-600">{passwordError}</span>
              </div>
              <div className="form__group field">
                <input
                  type="password"
                  className="form__field"
                  placeholder="Name"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <label htmlFor="name" className="form__label">
                  Confirm Password
                </label>
                <span className="text-red-500 my-[15px]  ">
                  {confirmPasswordError}
                </span>
              </div>
              <div>
                <button type="submit" className="btn btn-outline-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <section className="my-4">
              <span>If you are a member </span>
              <NavLink to="/login">
                <button className="btn bg-green-600 text-white hover:bg-green-500 font-bold  ">
                  Login
                </button>
              </NavLink>
            </section>
          </div>
          {showErrorModal && (
            <div className="error-modal">
              <div className="error-content flex flex-col justify-center items-center">
                <div
                  className="close bg-red-500 p-1 rounded-[50%] w-[40px]"
                  onClick={closeErrorModal}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-white"
                    bounce
                  />
                </div>
                <p className="text-red-400  font-bold text-2xl">
                  {errorMessage}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Signup;
