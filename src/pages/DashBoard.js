import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import TabsComponent from "../components/TabsComponent";
import axios from "axios";
import Search from "../components/Search";
import PaginationComponenet from "../components/Pagination";
import Loader from "../components/common/Loader";
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
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
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
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-32 text-[40px] text-grey "
        >
          <span className=" text-red pr-4 underline">{error}! </span>
          Please try after some time :(
        </motion.h1>
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
