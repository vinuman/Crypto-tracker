import React, { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { addToWatchList } from "../functions/addToWatchList";
import { alreadyAddedToWatchList } from "../functions/alreadyAddedToWatchList";
import { removeFromWatchList } from "../functions/removeFromWatchList";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { currentLightTheme } from "../slices/darkModeSlice";

const List = ({ coin }) => {
  const [added, setAdded] = useState(alreadyAddedToWatchList(coin.id));
  const navigate = useNavigate();

  const light = useSelector((state) => currentLightTheme(state).light);
  const currency = useSelector((state) => state.currency.currency);

  const handleBookMarkClick = (event) => {
    event.stopPropagation();
    if (added) {
      removeFromWatchList(coin.id);
      setAdded(false);
    } else {
      addToWatchList(coin.id);
      setAdded(true);
    }
  };

  return (
    <>
      {coin && (
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(`/coin/${coin.id}`)}
          className={`w-[100%] flex items-center lg:justify-center justify-between my-4  transition-all duration-100 group ${
            light ? " bg-white hover:bg-gray-200" : "bg-black hover:bg-darkgrey"
          }`}
        >
          <Tooltip title="coin name">
            <td className="flex flex-col md:flex-row justify-start items-center gap-[0.5rem] lg:gap-[1rem] m-[1rem] lg:w-[16%] w-[25%] ">
              <img
                className=" h-[3.5rem] w-[3.5rem]"
                src={coin.image}
                alt={coin.name}
              ></img>
              <div className="flex flex-col gap-[0.5rem]">
                <p
                  className={`uppercase font-bold text-[1.2rem] m-0 hidden md:block ${
                    light ? "text-black" : "text-white"
                  }`}
                >
                  {coin.symbol}
                </p>
                <p className=" md:text-grey text-white capitalize font-light text-[1rem] m-0">
                  {coin.name}
                </p>
              </div>
            </td>
          </Tooltip>
          <Tooltip title="coin price change percentage(24 hrs)">
            <td className="w-[25%] lg:w-[16%]  ml-4 ">
              <div
                className={`border-2 rounded-full py-[0.5rem] px-[0.6rem] text-center font-bold text-[1rem] transition-all duration-300  ${
                  coin.price_change_percentage_24h > 0
                    ? "border-green text-green group-hover:text-white group-hover:bg-green"
                    : "border-red text-red group-hover:text-white group-hover:bg-red"
                }`}
              >
                {coin.price_change_percentage_24h
                  ? `${coin.price_change_percentage_24h.toFixed(2)}%`
                  : "N/A"}
              </div>
            </td>
          </Tooltip>
          <td className=" pl-32 w-[16%] hidden lg:block">
            <div
              className={`md:w-[2.5rem] md:h-[2.5rem]  border-2 rounded-full flex justify-center items-center transition-all duration-300 ${
                coin.price_change_percentage_24h > 0
                  ? " border-green  group-hover:bg-green"
                  : "border-red  group-hover:bg-red"
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
            <td className=" md:pl-8 pl-2 lg:w-[16%] w-[25%] ">
              <h3
                className={` md:text-[1.2rem] text-[1rem]  font-bold ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green"
                    : "text-red"
                }`}
              >
                {currency === "usd" ? "$" : "₹"}
                {coin.current_price
                  ? ` ${coin.current_price.toLocaleString()}`
                  : "N/A"}
              </h3>
            </td>
          </Tooltip>
          <Tooltip title="total volume">
            <td className=" text-center ml-32 w-[16%] hidden lg:block">
              <p
                className={`t text-[1rem] font-semibold ${
                  light ? " text-black" : "text-white"
                }`}
              >
                {coin.total_volume
                  ? `${coin.total_volume.toLocaleString()}`
                  : "N/A"}
              </p>
            </td>
          </Tooltip>
          <Tooltip title="market cap">
            <td className=" ml-32 text-center w-[16%] hidden lg:block">
              <p
                className={` text-[1rem] font-semibold ${
                  light ? " text-black" : "text-white"
                }`}
              >
                {coin.market_cap
                  ? `${coin.market_cap.toLocaleString()}`
                  : "N/A"}
              </p>
            </td>
          </Tooltip>
          <Tooltip title={added ? "remove from Watchlist" : "Add to Watchlist"}>
            <td
              onClick={handleBookMarkClick}
              className={`flex justify-center items-center ml-4 w-[25%] cursor-pointer md:w-[3rem] h-[3rem] hover:border-2 ${
                coin.price_change_percentage_24h > 0
                  ? "border-green"
                  : "border-red"
              }`}
            >
              {added ? (
                <BookmarkAddedIcon
                  className={`${light ? "text-black" : " text-white"}`}
                />
              ) : (
                <BookmarkAddIcon
                  className={`${light ? "text-black" : " text-white"}`}
                />
              )}
            </td>
          </Tooltip>
        </motion.div>
      )}
    </>
  );
};

export default List;
