import axios from "axios";

export const getCoinData = (id) => {
  const myCoinData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.message;
    });

  return myCoinData;
};
