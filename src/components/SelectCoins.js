import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Error from "./common/Error";
import { loadingButtonClasses } from "@mui/lab";
import Loader from "./common/Loader";
import { get100Coins } from "../functions/get100Coins";

const SelectCoins = ({ crypto1, crypto2, handleCoinChange, light }) => {
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
  const styles2 = {
    height: "2.5rem",
    color: "var(--black)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--black)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--black)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await get100Coins();

    if (data.error) {
      setError(data.error, "please try after some time :( ");
      setLoading(false);
    } else {
      setAllCoins(data);
      setLoading(false);
    }
  };

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
      <div className="flex flex-col md:flex-row justify-start items-center gap-[0.5rem] md:m-[1.5rem]  w-[100%]">
        <p className=" font-bold text-blue">Crypto 1</p>
        <Select
          value={crypto1}
          label="Crypto 1"
          onChange={(event) => handleCoinChange(event, false)}
          sx={light ? styles2 : styles}
        >
          {allCoins
            .filter((item) => item.name != crypto2)
            .map((coin) => (
              <MenuItem value={coin.id}>{coin.name}</MenuItem>
            ))}
        </Select>
        <p className=" font-bold md:ml-4 pt-4 md:pt-0 text-green">Crypto 2</p>
        <Select
          value={crypto2}
          label="Crypto 2"
          onChange={(event) => handleCoinChange(event, true)}
          sx={light ? styles2 : styles}
        >
          {allCoins
            .filter((item) => item.name !== crypto1)
            .map((coin, i) => (
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
