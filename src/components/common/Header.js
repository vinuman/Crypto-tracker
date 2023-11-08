import React from "react";
import TemporaryDrawer from "../drawer";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="w-[100%] h-[50px] text-[#fff] flex justify-between items-center px-8 py-12 sticky bg-black">
        {/*  DIV LEFT */}
        <div>
          <h1 className=" text-[24px] md:text-[36px] font-extrabold">
            CryptoTracker<span className=" text-blue">.</span>
          </h1>
        </div>
        {/*  DIV RIGHT */}
        <div className="md:flex justify-between items-center gap-8 hidden">
          <Link to="/">
            <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer">
              Home
            </p>
          </Link>
          <Link to="/compare">
            <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer">
              Compare
            </p>
          </Link>
          <Link to="/watchlist">
            <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer">
              Watchlist
            </p>
          </Link>

          <Link to="/dashboard">
            <Button
              onClick={() => console.log("Clicked")}
              outlined={false}
              text="DashBoard"
            />
          </Link>
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
