import React from "react";
import Button from "./common/Button";

const LandingPage = () => {
  return (
    <>
      <div className="flex justify-between items-start py-16 px-8">
        {/*  LEFT SIDE */}
        <div>
          <h1 className=" text-[6.5rem] font-extrabold -mb-8 custom-h1 transition-all duration-300">
            Track Crypto
          </h1>
          <h1 className=" text-[6.5rem] font-extrabold text-blue -mt-8">
            Real Time.
          </h1>
          <p className=" text-[1rem] font-light text-grey">
            Track crypto through a public api in real time. Visit the dashboard
            for more!
          </p>
          <div className="flex gap-8 pt-8 ">
            <Button text="DashBoard" outlined={false} />
            <Button text="Share" outlined={true} />
          </div>
        </div>
        {/*  RIGHT SIDE */}
        <div>RIGHT</div>
      </div>
    </>
  );
};

export default LandingPage;
