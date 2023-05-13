import React, { children } from "react";
import { ToastContainer } from "react-toastify";
import Navart from "./Navart";

export const Layouy = ({ children }) => {
  return (
    <>
      <Navart />
      <div className=" h-100 p-1 sm:p-5 bg-gray-100 ">
        <div className="container mx-auto ">
          <div className="px-5 py-5 sm:px-20  rounded" >
            {children}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
