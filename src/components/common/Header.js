import React from "react";

const Header = () => {
  return (
    <>
      <nav className="w-[100%] h-[50px] text-[#fff] flex justify-between items-center p-8 sticky bg-black">
        {/*  DIV LEFT */}
        <div>
          <h1 className=" text-[36px] font-extrabold">
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
        </div>
      </nav>
    </>
  );
};

export default Header;
