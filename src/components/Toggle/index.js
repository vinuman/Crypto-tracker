import React, { useState } from "react";
import "./index.css";
import { toggleDarkMode } from "../../slices/darkModeSlice";
import { useDispatch } from "react-redux";

const ToggleButtton = () => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const handleLabelClick = () => {
    setCheck(!check);
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <label class="switch">
        <input checked={check} type="checkbox"></input>
        <span onClick={handleLabelClick} class="slider round"></span>
      </label>
    </>
  );
};

export default ToggleButtton;
