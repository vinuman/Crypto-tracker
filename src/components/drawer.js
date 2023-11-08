import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className=" text-grey" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className=" w-[50vw] bg-black h-[100vh] p-8">
          <Link to="/">
            <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer pb-8">
              Home
            </p>
          </Link>
          <Link to="/compare">
            <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer pb-8">
              Compare
            </p>
          </Link>
          <Link to="/watchlist">
            <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer pb-8">
              Watchlist
            </p>
          </Link>
          <Link to="/dashboard">
            <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer pb-8">
              Dashboard
            </p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
