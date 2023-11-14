import React, { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PriceToggle({
  togglePriceType,
  handlePriceTypeChange,
}) {
  const [selected, setSelected] = useState("prices");
  return (
    <div className="flex items-center justify-center">
      <ToggleButtonGroup
        value={togglePriceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton
          className={`toggle-btn ${
            selected === "prices" ? "selected-toggle" : ""
          }`}
          value="prices"
        >
          Price
        </ToggleButton>
        <ToggleButton
          className={`toggle-btn ${
            selected === "market_caps" ? "selected-toggle" : ""
          }`}
          value="market_caps"
        >
          Market Cap
        </ToggleButton>
        <ToggleButton
          className={`toggle-btn ${
            selected === "total_volumes" ? "selected-toggle" : ""
          }`}
          value="total_volumes"
        >
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
