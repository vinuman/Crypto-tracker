import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "./Grid";
import List from "./List";
import { createTheme, ThemeProvider } from "@mui/material";

export default function TabsComponent({ coins }) {
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
              {coins &&
                coins.map((coin, index) => <Grid coin={coin} key={index} />)}
              {coins && coins.length === 0 && (
                <h1 className="text-grey text-[60px]">No Results!</h1>
              )}
            </div>
          </TabPanel>
          <TabPanel value="list">
            <table className=" lg:w-[90%] w-[100%] mx-auto ">
              {coins &&
                coins.map((coin, index) => <List coin={coin} key={index} />)}
              {coins && coins.length === 0 && (
                <h1 className="text-grey text-[60px] text-center pt-8">
                  No Results!
                </h1>
              )}
            </table>
          </TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
}
