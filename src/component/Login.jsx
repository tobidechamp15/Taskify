import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

const Login = () => {
  return (
    <div className="w-100 flex flex-col justify-center items-center h-screen -lg">
      <div className="flex flex-col xs:h-full justify-evenly xs:w-full xs:mx-1 w-[60%] md:w-[50%] lg:w-[30%] sm:h-[70%]  p-[5%] md:p-[5%} shadow-lg">
        <div className="flex flex-col justify-center w-full items-center">
          <img src={logo} alt="logo" className="w-[100px]" />
        </div>
        <div className="text-2xl text-blue-400 font-bold text-center">
          Sign Up to Continue
        </div>
        <form
        //   onSubmit={handleSubmit}
          className="flex flex-col gap-2 text-black  items-center justify-center self-center w-100 "
        >
          <div className="form__group field">
            <input
              type="email"
              className="form__field"
              placeholder="Name"
            //   value={email} // set value to email state
            //   onChange={(e) => setEmail(e.target.value)}
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
            //   value={password} // set value to password state
            //   onChange={(e) => setPassword(e.target.value)}
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
        <section>
          <span>If you are a member, </span>
          <NavLink to="/">
            <button className="btn bg-yellow-500 text-white hover:bg-amber-500 font-bold  ">
              Login
            </button>
          </NavLink>
        </section>
      </div>
      {/* {showErrorModal && (
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
      )} */}
    </div>
  );
}

export default Login
