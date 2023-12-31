import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import { coinObject } from "../functions/convertObject";
import List from "../components/List";
import CoinInfo from "../components/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceToggle from "../components/PriceToggle";
import { useSelector } from "react-redux";
import { currentLightTheme } from "../slices/darkModeSlice";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [togglePriceType, setTogglePriceType] = useState("prices");

  const light = useSelector((state) => currentLightTheme(state).light);

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setTogglePriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      settingChartData(setChartData, prices);
    }
    setLoading(false);
  };

  const handleDayChange = async (event) => {
    setLoading(true);
    const prices = await getCoinPrices(id, event.target.value, togglePriceType);
    setDays(event.target.value);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, togglePriceType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices, null);
        setLoading(false);
      }
    } else {
      setError(data);
    }
  }

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <div
            className={`m-[1.5rem] rounded-lg ${
              light ? "bg-white" : "bg-darkgrey"
            }`}
          >
            <List coin={coinData} />
          </div>
          <div
            className={` m-[1.5rem]  rounded-lg flex flex-col md:flex-row items-center justify-center ${
              light ? "bg-white" : "bg-darkgrey"
            }`}
          >
            <SelectDays
              light={light}
              days={days}
              handleDayChange={handleDayChange}
            />
            <PriceToggle
              togglePriceType={togglePriceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
          </div>

          <div
            className={`m-[1.5rem] rounded-lg ${
              light ? "bg-white" : "bg-darkgrey"
            }`}
          >
            <LineChart chartData={chartData} priceType={togglePriceType} />
          </div>
          <CoinInfo light={light} title={coinData.name} desc={coinData.desc} />
        </>
      )}
    </>
  );
};

export default CoinPage;
