import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponenet({
  page,
  handlePageChange,
  light,
}) {
  const style1 = {
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
  };
  const style2 = {
    color: "var(--black)",
    "& .Mui-selected ": {
      backgroundColor: "var(--blue) !important",
      color: "#000 !important",
      borderColor: "var(--blue) !important",
    },
    "& .MuiPaginationItem-ellipsis": {
      border: "0px solid var(--grey) !important",
    },
    "& .MuiPaginationItem-text": {
      color: "var(--black)",
      border: "1px solid var(--grey)",
    },
  };
  return (
    <div spacing={2}>
      <Pagination
        className=" mx-auto flex justify-center items-center p-8 m-[1.5rem]"
        sx={light ? style2 : style1}
        count={10}
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
      />
    </div>
  );
}
