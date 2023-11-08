import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/TabsComponent";
import axios from "axios";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <TabsComponent coins={coins} />
    </>
  );
};

export default DashBoard;
