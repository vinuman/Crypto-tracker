import axios from "axios";

export const get100Coins = () => {
  let err;
  const API_URL = "https://api.coingecko.com/api/v3/coins";
  const coins = axios
    .get(
      `${API_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
      err = error.message;
    });

  if (coins) {
    return coins;
  } else {
    return err;
  }
};
