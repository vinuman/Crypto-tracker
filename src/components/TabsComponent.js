import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "./Grid";
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
    fontSize: "20px",
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
              <Tab label="Grid View" value="grid" sx={style} />
              <Tab label="List View" value="list" sx={style} />
            </TabList>
          </div>
          <TabPanel value="grid">
            <div className="flex justify-center items-center flex-wrap gap-[2rem] m-[2rem]">
              {coins.map((coin, index) => (
                <Grid coin={coin} key={index} />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="list">Item Two</TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
}
