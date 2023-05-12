import React, { children } from "react";
import { ToastContainer } from "react-toastify";
import Navart from "./Navart";

export const Layouy = ({ children }) => {
  return (
    <>
      <Navart />
      <div className="bg-gray-100 h-screen p-1 sm:p-5 ">
        <div className="container mx-auto ">
          <div className="px-5 py-5 sm:px-20" >
            {children}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
