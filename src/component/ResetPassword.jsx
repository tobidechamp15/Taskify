import React from "react";
import logo from "../assets/logo flex-row.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    // console.log(email);
    setEmail(e.target.value);
  };
  const navigate = useNavigate();
  const handleReset = async (e) => {
    e.preventDefault();
    const auth = getAuth(); // Get the Auth instance
    sendPasswordResetEmail(auth, email)
      .then((data) => {
        navigate("/reset-message");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-100 flex flex-col  items-center h-screen  justify-center lg">
      <div className="flex flex-col xs:h-full  xs:w-full xs:mx-1 w-[60%] py-[35%] gap-5 form-width md:w-[50%] lg:w-[30%]    p-[5%] md:p-[5%] shadow-lg overflow-auto">
        <NavLink to="/" className="flex flex-col justify-center w-full enter">
          <img src={logo} alt="logo" className="w-[150px]" />
        </NavLink>
        <div className="text-xl flex flex-col gap-3   w-full   ">
          Reset Password
          <span className="text-sm text-dark">
            Enter your email address and we will send you the instructions for
            the password recovery
          </span>
        </div>
        <form
          onSubmit={handleReset}
          className="flex flex-col gap-4 text-black  items-center justify-center self-center w-100 "
        >
          <div className="form__group field">
            <input
              type="email"
              className="form__field"
              placeholder="Name"
              value={email} // set value to email state
              onChange={handleEmailChange}
              required
              autoComplete="on" // Set it to "on" or another appropriate string value
            />
            <label htmlFor="name" className="form__label">
              Email
            </label>
          </div>
          <button type="submit" className="btn btn-outline-primary ">
            Reset Password
          </button>
        </form>
        <div className="text-gray-400 flex gap-1 text-center w-100 justify-center items-end h-100">
          Back to
          <NavLink className="text-blue-500" to="/login">
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
