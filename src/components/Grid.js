import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { addToWatchList } from "../functions/addToWatchList";
import { alreadyAddedToWatchList } from "../functions/alreadyAddedToWatchList";
import { removeFromWatchList } from "../functions/removeFromWatchList";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { currentLightTheme } from "../slices/darkModeSlice";

const Grid = ({ coin }) => {
  const [added, setAdded] = useState(alreadyAddedToWatchList(coin.id));
  const [sucessMessage, setSuccessMessage] = useState(false);
  const [removeMessage, setRemoveMessage] = useState(false);
  const navigate = useNavigate();

  const light = useSelector((state) => currentLightTheme(state).light);

  const handleDivClick = () => {
    navigate(`/coin/${coin.id}`);
  };

  const handleBookMarkClick = (event) => {
    setRemoveMessage(false);
    setSuccessMessage(false);
    event.stopPropagation();
    if (added) {
      removeFromWatchList(coin.id);
      setRemoveMessage(true);
      setAdded(false);
    } else {
      addToWatchList(coin.id);
      setSuccessMessage(true);
      setAdded(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setRemoveMessage(false);
      setSuccessMessage(false);
    }, 5000);
  }, [sucessMessage, removeMessage]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleDivClick}
        className={`w-[320px] relative border-2 rounded-lg flex flex-col justify-center transition-all duration-300 group cursor-pointer ${
          coin.price_change_percentage_24h > 0
            ? " hover:border-green"
            : " hover:border-red"
        } ${light ? "bg-white border-darkgray" : "bg-gray border-white"}`}
      >
        <div className="flex justify-start items-center gap-[1rem] m-[1rem]">
          <img
            className=" h-[3.5rem] w-[3.5rem]"
            src={coin.image}
            alt={coin.name}
          ></img>
          <div className="flex flex-col gap-[0.5rem]">
            <p
              className={` uppercase font-bold text-[1.2rem] m-0 ${
                light ? "text-black" : "text-white"
              }`}
            >
              {coin.symbol}
            </p>
            <p className=" text-grey capitalize font-light text-[1rem] m-0">
              {coin.name}
            </p>
          </div>
          <div
            onClick={handleBookMarkClick}
            className={`flex justify-center items-center md:ml-24 ml-12 cursor-pointer w-[3rem] h-[3rem]  ${
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
          </div>
        </div>
        <div className=" flex justify-start gap-[0.8rem] items-center ml-4">
          <div
            className={`border-2 rounded-full py-[0.5rem] px-[1.2rem] text-center font-bold text-[1rem] transition-all duration-300  ${
              coin.price_change_percentage_24h > 0
                ? "border-green text-green group-hover:text-white group-hover:bg-green"
                : "border-red text-red group-hover:text-white group-hover:bg-red"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`w-[2.5rem] h-[2.5rem] border-2 rounded-full flex justify-center items-center group transition-all duration-300 ${
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
        </div>
        <div className=" m-[1.5rem]">
          <h3
            className={` text-[1.2rem] font-bold ${
              coin.price_change_percentage_24h > 0 ? "text-green" : "text-red"
            }`}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <div className=" pt-4">
            <p className=" text-grey text-[0.8rem] font-semibold pb-2">
              Total Volume: {coin.total_volume.toLocaleString()}
            </p>
            <p className=" text-grey text-[0.8rem] font-semibold">
              Market cap: ${coin.market_cap.toLocaleString()}
            </p>
          </div>
        </div>
        {sucessMessage && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[100%] h-[2.4rem] bg-green text-white flex items-center justify-center  rounded-bottom-lg absolute bottom-0 z-50"
          >
            <p className="p-2 font-semibold">Added to Watchlist</p>
            <CheckCircleIcon />
          </motion.div>
        )}
        {removeMessage && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[100%] h-[2.4rem] bg-red text-white flex items-center  justify-center rounded-bottom-lg absolute bottom-0 z-50"
          >
            <p className="p-2 font-semibold">Removed from Watchlist</p>
            <CancelIcon />
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Grid;
