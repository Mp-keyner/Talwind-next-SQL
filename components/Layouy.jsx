import React, { children } from "react";
import { ToastContainer } from "react-toastify";
import Navart from "./Navart";

export const Layouy = ({ children }) => {
  return (
    <>
      {/* <Navart /> */} Navart
      <div className="bg-gray-100 h-screen p-10 ">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <ToastContainer />
    </>
  );
};
