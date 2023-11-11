import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-black text-blue absolute z-50">
      <CircularProgress />
    </div>
  );
};

export default Loader;
