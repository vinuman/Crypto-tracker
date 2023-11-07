import React from "react";

const Button = ({ text, onClick, outlined }) => {
  return (
    <>
      <button
        onClick={() => onClick()}
        className={` text-white rounded-full p-4 font-bold text-center transition-all duration-300 tracking-wider min-w-[150px] ${
          outlined
            ? " hover:bg-blue bg-black border-2 hover:text-white"
            : "bg-blue hover:bg-indigo-400 hover:text-black"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
