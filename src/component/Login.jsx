import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase/config";
import {
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!navigator.onLine) {
      // Handle the case where the user is offline
      setErrorMessage(
        "No internet connection. Please check your connection and try again."
      );
      setShowErrorModal(true);
      return;
    }
    try {
      const auth = getAuth(app);
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
    } catch (error) {
      if (error) {
        handleLoginError();
      }
    } finally {
      setLoading(false)
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setLoginError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError(false);
  };

  const handleLoginError = () => {
    setLoginError(true);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-100 flex flex-col justify-center items-center h-screen -lg">
          <div className="flex flex-col xs:h-full justify-evenly xs:w-full xs:mx-1 w-[60%] form-width md:w-[50%] lg:w-[30%] sm:h-[70%]  p-[5%] md:p-[5%} shadow-lg">
            <div className="flex flex-col justify-center w-full items-center">
              <img src={logo} alt="logo" className="w-[100px]" />
            </div>
            <div className="text-2xl text-blue-400 font-bold text-center">
              Welcome Back !
            </div>

            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-2 text-black  items-center justify-center self-center w-100 "
            >
              {loginError && (
                <div className="flex self-baseline text-red-500 font-semibold items-center gap-2 my-2">
                  Incorrect email address or password{" "}
                  <FontAwesomeIcon icon={faCircleExclamation} bounce />
                </div>
              )}
              <div className="form__group field">
                <input
                  type="email"
                  className="form__field"
                  placeholder="Name"
                  value={email} // set value to email state
                  onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="name" className="form__label">
                  Password
                </label>
              </div>

              <div>
                <button type="submit" className="btn btn-outline-primary">
                  Login
                </button>
              </div>
            </form>
            <section className="my-4">
              <span>Not registered yet? </span>
              <NavLink to="/register">
                <button className="btn bg-yellow-500 text-white hover:bg-amber-500 font-bold  ">
                  Sign up
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

export default Login;
