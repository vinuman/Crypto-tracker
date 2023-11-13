import React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PriceToggle({
  togglePriceType,
  handlePriceTypeChange,
}) {
  return (
    <div className="flex items-center justify-center">
      <ToggleButtonGroup
        value={togglePriceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "&.Mui-selected": {
            color: "var(--green) !important",
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
        <ToggleButton className="toggle-btn" value="prices">
          Price
        </ToggleButton>
        <ToggleButton className="toggle-btn" value="market_caps">
          Market Cap
        </ToggleButton>
        <ToggleButton className="toggle-btn" value="total_volumes">
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
