import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import Signup from "./component/Signup";
import Login from "./component/Login";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

