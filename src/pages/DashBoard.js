import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/TabsComponent";
import Search from "../components/Search";
import PaginationComponenet from "../components/Pagination";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import BackToTop from "../components/common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import { get100InrCoins } from "../functions/get100InrCoins";
import { useSelector, useDispatch } from "react-redux";
import { currentLightTheme } from "../slices/darkModeSlice";
import { changeCurrency } from "../slices/currencySlice";
import Button from "../components/common/Button";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const light = useSelector((state) => currentLightTheme(state).light);
  const currency = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();

  const handleCurrencyChange = () => {
    if (currency == "usd") {
      dispatch(changeCurrency("inr"));
    } else {
      dispatch(changeCurrency("usd"));
    }
  };

  console.log(currency);
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
    if (currency === "usd") {
      getDataUsd();
    } else {
      getDataInr();
    }
  }, [currency]);

  const getDataUsd = async () => {
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
  const getDataInr = async () => {
    setLoading(true);
    const data = await get100InrCoins();
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
      <div className="w-[100%] flex items-center justify-start">
        <Search search={search} setSearch={setSearch} />
        <div className="mr-7">
          <Button
            onClick={handleCurrencyChange}
            text={currency === "usd" ? "Change to INR" : "Change to USD"}
            outlined={true}
          />
        </div>
      </div>

      <TabsComponent
        light={light}
        coins={search ? filteredCoins : paginatedCoins}
      />
      {!search && (
        <PaginationComponenet
          light={light}
          page={page}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default DashBoard;
