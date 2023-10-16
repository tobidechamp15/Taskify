import React, {  useState } from "react";
import logo from "../assets/logo.png";
import { app, db } from "./firebase/config";
import {doc, setDoc} from "firebase/firestore"
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false); // To control modal visibility
  const [errorMessage, setErrorMessage] = useState(""); // To store the error message
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!navigator.onLine) {
    // Handle the case where the user is offline
    setErrorMessage(
      "No internet connection. Please check your connection and try again."
    );
    setShowErrorModal(true);
    return;
  }
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
        createUserProfile(response.user);
        await sendEmailVerification(response.user);

        console.log(response.user);
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setErrorMessage("This user already exists", err);
          setShowErrorModal(true);
        }
        if (err.code === "auth/weak-password") {
          setErrorMessage("Password should not be less than 6 characters", err);
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

  const createUserProfile = (user) => {
    const userDocRef = doc(db, "users", user.uid); // Reference to the user's document using their UID

    // Define the user profile data
    const userProfileData = {
      email: user.email,
      // Add other user-specific data as needed
    };

    setDoc(userDocRef, userProfileData)
      .then(() => {
        console.log("User profile created successfully");
      })
      .catch((error) => {
        console.error("Error creating user profile:", error);
      });
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  // useEffect(() => {
  //   setIsButtonDisabled(password !== confirmPassword);
  // }, [password, confirmPassword]);
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-100 flex flex-col justify-center items-center h-screen -lg">
          <div className="flex flex-col xs:h-full justify-evenly xs:w-full xs:mx-1 w-[60%] md:w-[50%] form-width lg:w-[30%] sm:h-  p-[5%] md:p-[5%} shadow-lg">
            <div className="flex flex-col justify-center w-full items-center">
              <img src={logo} alt="logo" className="w-[100px]" />
            </div>
            <div className="text-2xl text-blue-400 font-bold text-center mb-4 mt-4">
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
                <span className="text-red-600">{errorMessage}</span>
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
              <span>If you are a member , please </span>
              <NavLink to="/">
                <button className="btn bg-green-600 text-white hover:bg-green-500 font-bold  ">
                  Login{" "}
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
