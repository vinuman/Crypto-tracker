import React from "react";
import TemporaryDrawer from "../drawer";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import ToggleButtton from "../Toggle";
import MoonIcon from "../MoonIcon";
import SunIcon from "../SunIcon";
import MoonDark from "../MoonDark";
import SunDark from "../SunDark";
import { useSelector } from "react-redux";
import { currentLightTheme } from "../../slices/darkModeSlice";

const Header = () => {
  const location = useLocation();
  const light = useSelector(currentLightTheme);

  return (
    <>
      <nav
        className={`w-[100%] h-[50px]  flex justify-between items-center px-8 py-12 sticky  ${
          light ? " text-darkgrey bg-white" : "text-[#fff] bg-darkgrey"
        }`}
      >
        {/*  DIV LEFT */}
        <div>
          <Link to="/">
            <h1
              className={`text-[24px] md:text-[36px] font-extrabold ${
                light ? "text-darkgrey" : ""
              }`}
            >
              CryptoTracker<span className=" text-blue">.</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-[0.8rem] ">
          {light ? <MoonDark /> : <MoonIcon />}

          <ToggleButtton />
          {light ? <SunDark /> : <SunIcon />}
        </div>

        {/*  DIV RIGHT */}
        <div className="md:flex justify-between items-center gap-8 hidden">
          <Link to="/">
            <p
              className={`text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer ${
                location.pathname === "/" ? "selected-link" : ""
              }`}
            >
              Home
            </p>
          </Link>
          <Link to="/compare">
            <p
              className={`text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer ${
                location.pathname === "/compare" ? "selected-link" : ""
              }`}
            >
              Compare
            </p>
          </Link>
          <Link to="/watchlist">
            <p
              className={`text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer ${
                location.pathname === "/watchlist" ? "selected-link" : ""
              }`}
            >
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
