import React, { Children } from "react";

export const Layouy = ({ children }) => {
  return (
    <>
      <h1>Navart</h1>
      <div className="bg-gray-100 h-screen p-10 ">
        <div className="container mx-auto h-full">{children}</div>
      </div>
    </>
  );
};
