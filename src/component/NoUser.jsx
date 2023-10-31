import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NoUser = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-blue-600">
      <h1 className="text-2xl font-bold mb-4">
        Please Log In
        <FontAwesomeIcon
          icon={faCircleExclamation}
          bounce
          className="text-red-400 ms-1"
        />
      </h1>
      <p className="text-gray-600 mb-4">
        To access your content, please log in with your account.
      </p>
      <Link to="/login" className="btn btn-light fo py-2 px-4 rounded">
        Log In
      </Link>
    </div>
  );
};

export default NoUser;
