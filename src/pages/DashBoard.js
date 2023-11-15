import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/TabsComponent";
import axios from "axios";
import Search from "../components/Search";
import PaginationComponenet from "../components/Pagination";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import BackToTop from "../components/common/BackToTop";
import { get100Coins } from "../functions/get100Coins";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await get100Coins();
    if (data.error) {
      setError(data.error, "please try after some time :( ");
      setLoading(false);
    } else {
      setCoins(data);
      setPaginatedCoins(data.slice(0, 10));
      setLoading(false);
    }
  };

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
