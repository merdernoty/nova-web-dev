"use client";

import React from "react";
//import styled from "styled-components";

// const HeadLi = styled.li`
// p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300
// `;
//Доведите до ума, плиззззз!!!

const HeaderText: React.FC = () => {
  const setActiveTab = (tab: string) => {
    // handle tab click logic here
  };
  return (
    <div className="flex m-auto">
      <ul className="flex ">
        <li
          className="p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300"
          onClick={() => setActiveTab("Home")}
        >
          Home
        </li>
        <li
          className="p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300"
          onClick={() => setActiveTab("Services")}
        >
          Services
        </li>
        <li
          className="p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300"
          onClick={() => setActiveTab("Our Project")}
        >
          Our Project
        </li>
        <li
          className="p-8 cursor-pointer hover:text-indigo-700 text-lg opacity-70 transition duration-300"
          onClick={() => setActiveTab("About Us")}
        >
          About Us
        </li>
      </ul>
    </div>
  );
};

export default HeaderText;
