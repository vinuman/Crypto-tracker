import React from "react";
import TemporaryDrawer from "../drawer";

const Header = () => {
  return (
    <>
      <nav className="w-[100%] h-[50px] text-[#fff] flex justify-between items-center p-8 sticky bg-black">
        {/*  DIV LEFT */}
        <div>
          <h1 className=" text-[24px] md:text-[36px] font-extrabold">
            CryptoTracker<span className=" text-blue">.</span>
          </h1>
        </div>
        {/*  DIV RIGHT */}
        <div className="md:flex justify-between items-center gap-16 hidden">
          <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer">
            Home
          </p>
          <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer">
            Compare
          </p>
          <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer">
            Watchlist
          </p>
          <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer">
            DashBoard
          </p>
        </div>
        {/* DRAWER DIV */}
        <div className=" md:hidden">
          <TemporaryDrawer />
        </div>
      </nav>
    </>
  );
};

export default Header;
