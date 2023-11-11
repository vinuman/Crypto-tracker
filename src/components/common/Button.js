import React from "react";

const Button = ({ text, onClick, outlined }) => {
  return (
    <>
      <button
        onClick={() => onClick()}
        className={` text-white rounded-full px-4 py-2 font-bold text-center transition-all duration-300 tracking-wider min-w-[150px] ${
          outlined
            ? " hover:bg-blue bg-black border-2 hover:text-white"
            : "bg-blue hover:bg-white hover:text-blue"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
