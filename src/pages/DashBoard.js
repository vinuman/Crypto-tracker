import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/TabsComponent";
import axios from "axios";
import Search from "../components/Search";
import PaginationComponenet from "../components/Pagination";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import BackToTop from "../components/common/BackToTop";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
      })
      .catch((err) => {
        setError(err.message);
        if (err.response) {
          console.log("Server responded with an error:", error.response.data);
        }
      });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <Error error={error} />
      </>
    );
  }

  return (
    <>
      <Header />
      <BackToTop />
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
