import React from "react";
import Button from "./common/Button";
import iphone from "../assets/iphone.png";
import gradient from "../assets/gradient.png";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:py-16 md:px-8">
        {/*  LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className=" text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.5rem] font-extrabold md:-mb-4 custom-h1 transition-all duration-300">
            Track Crypto
          </h1>
          <h1 className=" text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.5rem] font-extrabold text-blue -mt-4 ">
            Real Time.
          </h1>
          <p className=" text-[0.8rem] text-center md:text-[1rem] font-light text-grey">
            Track crypto through a public api in real time. Visit the dashboard
            for more!
          </p>
          <div className="flex gap-8 pt-8 ">
            <Button text="DashBoard" outlined={false} />
            <Button text="Share" outlined={true} />
          </div>
        </div>
        {/*  RIGHT SIDE */}
        <div className="w-[100%] md:w-[50%] relative mt-8">
          <img
            className="w-[180px] md:min-w-[200px] lg:min-w-[300px] absolute z-50 md:w-[50%] md:right-4 right-16 top-4"
            src={iphone}
          ></img>
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
