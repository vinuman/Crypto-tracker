import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/TabsComponent";
import { get100Coins } from "../functions/get100Coins";
import Error from "../components/common/Error";
import Loader from "../components/common/Loader";
import { useSelector } from "react-redux";
import { currentLightTheme } from "../slices/darkModeSlice";

const WatchList = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const light = useSelector((state) => currentLightTheme(state).light);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const allCoins = await get100Coins();
    const watchListCoins = JSON.parse(localStorage.getItem("watchlist"));
    if (allCoins.error) {
      setError(allCoins.error, "please try after some time :( ");
    } else {
      console.log("all coin>>", allCoins);
      const displayCoins = allCoins.filter((item) =>
        watchListCoins.includes(item.id)
      );
      setCoins(displayCoins);
    }
    setLoading(false);
  };

  if (error || loading) {
    return (
      <>
        <Header />
        {loading ? <Loader /> : <Error error={error} />}
      </>
    );
  }

  return (
    <>
      <Header />
      <TabsComponent light={light} coins={coins} />
    </>
  );
};

export default WatchList;
