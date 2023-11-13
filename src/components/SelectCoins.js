import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import Error from "./common/Error";
import { loadingButtonClasses } from "@mui/lab";
import Loader from "./common/Loader";

const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setError(false);
        setAllCoins(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
    setLoading(false);
  });

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Error error={error} />
      </>
    );
  }

  return (
    <>
      <div className="flex justify-start items-center gap-[0.5rem] m-[1.5rem]">
        <p>Crypto 1</p>
        <Select
          value={crypto1}
          label="Crypto 1"
          onChange={(event) => handleCoinChange(event, false)}
          sx={styles}
        >
          {allCoins.map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
          ))}
        </Select>
        <p>Crypto 2</p>
        <Select
          value={crypto2}
          label="Crypto 2"
          onChange={(event) => handleCoinChange(event, true)}
          sx={styles}
        >
          {allCoins.map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
};

export default SelectCoins;
