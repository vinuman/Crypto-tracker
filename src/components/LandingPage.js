import React from "react";
import Button from "./common/Button";
import iphone from "../assets/iphone.png";
import gradient from "../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentLightTheme } from "../slices/darkModeSlice";

const LandingPage = () => {
  const light = useSelector(currentLightTheme);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:py-16 md:px-8">
        {/*  LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.5rem] font-extrabold md:-mb-4 custom-h1 transition-all duration-300"
          >
            Track Crypto
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.5rem] font-extrabold text-blue -mt-4 "
          >
            Real Time.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className=" text-[0.8rem] text-center md:text-[1rem] font-light text-grey"
          >
            Track crypto through a public api in real time. Visit the dashboard
            for more!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-8 pt-8 "
          >
            <Link to="/dashboard">
              <Button
                onClick={() => console.log("Clicked")}
                text="DashBoard"
                outlined={false}
              />
            </Link>
            <Button
              onClick={() => console.log("Clicked")}
              text="Share"
              outlined={true}
            />
          </motion.div>
        </div>
        {/*  RIGHT SIDE */}
        <div className="w-[100%] md:w-[50%] relative mt-8">
          <motion.img
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
            className="w-[180px] md:min-w-[200px] lg:min-w-[300px] absolute z-50 md:w-[50%] md:right-4 right-16 top-4"
            src={iphone}
          ></motion.img>
          <img
            className=" absolute w-[150px] md:min-w-[180px] lg:min-w-[250px] md:top-[6rem] top-[5rem] md:right-4 right-32"
            src={gradient}
          ></img>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
