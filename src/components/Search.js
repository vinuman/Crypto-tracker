import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { currentLightTheme } from "../slices/darkModeSlice";

const Search = ({ search, setSearch }) => {
  const light = useSelector((state) => currentLightTheme(state).light);
  return (
    <>
      <div className="flex justify-start items-center gap-[1.5rem] py-[0.5re] px-[1.5rem] text-grey w-[80%] h-[48px] mx-auto my-[1rem] rounded-3xl relative">
        <SearchIcon className="absolute left-14 top-3" />
        <input
          className={`w-[100%] font-inter text-[1rem] outline-none h-[48px] text-black rounded-full px-16 ${
            light ? "bg-gray border-2 border-darkgray" : " bg-darkgray"
          }`}
          placeholder="Search by name..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default Search;
