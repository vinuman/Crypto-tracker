import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/TabsComponent";
import axios from "axios";
import Search from "../components/Search";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

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
      <Search search={search} setSearch={setSearch} />
      <TabsComponent
        coins={coins}
        filteredCoins={filteredCoins}
        search={search}
      />
    </>
  );
};

export default DashBoard;
