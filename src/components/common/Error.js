import React from "react";
import { motion } from "framer-motion";

const Error = ({ error }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex justify-center mt-32 text-[40px] text-grey "
    >
      <span className=" text-red pr-4 underline">{error}! </span>
      Please try after some time :(
    </motion.h1>
  );
};

export default Error;
