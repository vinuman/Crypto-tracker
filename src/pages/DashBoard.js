import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/TabsComponent";
import axios from "axios";
import Search from "../components/Search";
import PaginationComponenet from "../components/Pagination";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const handlePageChange = (event, value) => {
    setPage(value);
    let prevIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10));
  };

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
        setPaginatedCoins(response.data.slice(0, 10));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <TabsComponent
        coins={search ? filteredCoins : paginatedCoins}
        search={search}
      />
      {!search && (
        <PaginationComponenet page={page} handlePageChange={handlePageChange} />
      )}
    </>
  );
};

export default DashBoard;
