import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className=" text-grey" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className=" w-[50vw] bg-black h-[100vh] p-8">
          <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer pb-8">
            Home
          </p>
          <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer pb-8">
            Compare
          </p>
          <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer pb-8">
            Watchlist
          </p>
          <p className=" text-grey font-semibold hover:text-white transition-all duration-300 cursor-pointer pb-8">
            DashBoard
          </p>
        </div>
      </Drawer>
    </div>
  );
}
