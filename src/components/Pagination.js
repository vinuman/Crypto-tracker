import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponenet({ page, handlePageChange }) {
  return (
    <div spacing={2}>
      <Pagination
        className=" mx-auto  flex justify-center items-center mb-12 m-[1.5rem]"
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
        count={10}
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
      />
    </div>
  );
}
