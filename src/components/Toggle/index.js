import React, { useState } from "react";
import "./index.css";
import { toggleDarkMode } from "../../slices/darkModeSlice";
import { useDispatch } from "react-redux";

const ToggleButtton = ({ checked, className }) => {
  const dispatch = useDispatch();

  const handleLabelClick = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <div className={`${className}`}>
        <label class="switch">
          <input checked={checked} type="checkbox"></input>
          <span onClick={handleLabelClick} class="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default ToggleButtton;
