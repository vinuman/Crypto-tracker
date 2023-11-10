import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from "@mui/material";

const List = ({ coin }) => {
  return (
    <>
      <div className="w-[100%] flex items-center lg:justify-center justify-between my-4 hover:bg-darkgrey transition-all duration-100 ">
        <Tooltip title="coin name">
          <td className="flex justify-start items-center gap-[0.5rem] lg:gap-[1rem] m-[1rem] lg:w-[16%] w-[30%] ">
            <img
              className=" h-[3.5rem] w-[3.5rem]"
              src={coin.image}
              alt={coin.name}
            ></img>
            <div className="flex flex-col gap-[0.5rem]">
              <p className=" text-white uppercase font-bold text-[1.2rem] m-0">
                {coin.symbol}
              </p>
              <p className=" text-grey capitalize font-light text-[1rem] m-0">
                {coin.name}
              </p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="coin price change percentage(24 hrs)">
          <td className="w-[25%] lg:w-[16%]  ml-4">
            <div
              className={`border-2 rounded-full py-[0.5rem] px-[0.6rem] text-center font-bold text-[1rem] transition-all duration-300  ${
                coin.price_change_percentage_24h > 0
                  ? "border-green text-green hover:text-white hover:bg-green"
                  : "border-red text-red hover:text-white hover:bg-red"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          </td>
        </Tooltip>
        <td className=" pl-32 w-[16%] hidden lg:block">
          <div
            className={`md:w-[2.5rem] md:h-[2.5rem] h-[1.5rem] w-[1.5rem] border-2 rounded-full flex justify-center items-center group transition-all duration-300 ${
              coin.price_change_percentage_24h > 0
                ? " border-green  hover:bg-green"
                : "border-red  hover:bg-red"
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon className=" text-green group-hover:text-white" />
            ) : (
              <TrendingDownIcon className="text-red group-hover:text-white" />
            )}
          </div>
        </td>
        <Tooltip title="current price">
          <td className=" pl-8 lg:w-[16%] w-[25%] ">
            <h3
              className={` md:text-[1.2rem] text-[1rem] font-bold ${
                coin.price_change_percentage_24h > 0 ? "text-green" : "text-red"
              }`}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="total volume">
          <td className=" text-center ml-32 w-[16%] hidden lg:block">
            <p className=" text-white text-[1rem] font-semibold">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="market cap">
          <td className=" ml-32 text-center w-[16%] hidden lg:block">
            <p className=" text-white text-[1rem] font-semibold">
              {coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
      </div>
    </>
  );
};

export default List;
