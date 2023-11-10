import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "./Grid";
import List from "./List";
import { createTheme, ThemeProvider } from "@mui/material";

export default function TabsComponent({ coins, filteredCoins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "white",
  };

  return (
    <ThemeProvider theme={theme}>
      <div className=" bg-black">
        <TabContext value={value}>
          <div>
            <TabList
              variant="fullWidth"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                label="Grid View"
                value="grid"
                sx={style}
                className=" text-[1rem] md:text-[1.8rem]"
              />
              <Tab label="List View" value="list" sx={style} />
            </TabList>
          </div>
          <TabPanel value="grid">
            <div className="flex justify-center items-center flex-wrap gap-[2rem] m-[2rem]">
              {filteredCoins.map((coin, index) => (
                <Grid coin={coin} key={index} />
              ))}
              {filteredCoins === "" && (
                <h1 className="text-white text-[60px]">Nothing to display</h1>
              )}
            </div>
          </TabPanel>
          <TabPanel value="list">
            <table className=" lg:w-[90%] w-[100%] mx-auto ">
              {filteredCoins.map((coin, index) => (
                <List coin={coin} key={index} />
              ))}
            </table>
          </TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
}
