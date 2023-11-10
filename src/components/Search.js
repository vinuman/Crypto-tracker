import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <div className="flex justify-start items-center gap-[1.5rem] py-[0.5re] px-[1.5rem] text-grey bg-darkgrey w-[80%] h-[48px] mx-auto my-[1rem] rounded-3xl">
        <SearchIcon />
        <input
          className="w-[100%] font-inter text-[1rem] text-grey border-0 outline-none bg-darkgrey"
          placeholder="Search..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default Search;
