import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";

export default function TabsComponent() {
  const [value, setValue] = useState("1");

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
              <Tab label="Grid View" value="1" sx={style} />
              <Tab label="List View" value="2" sx={style} />
            </TabList>
          </div>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
}
