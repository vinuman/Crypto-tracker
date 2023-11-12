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

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});

  const handleDayChange = async (event) => {
    setLoading(true);

    const prices = await getCoinPrices(id, event.target.value);
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
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
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
          <div className=" bg-darkgrey m-[1.5rem] rounded-lg">
            <List coin={coinData} />
          </div>
          <div className=" bg-darkgrey m-[1.5rem] rounded-lg">
            <SelectDays days={days} handleDayChange={handleDayChange} />
          </div>
          <div className="bg-darkgrey m-[1.5rem] rounded-lg">
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo title={coinData.name} desc={coinData.desc} />
        </>
      )}
    </>
  );
};

export default CoinPage;
