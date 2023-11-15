import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import SelectCoins from "../components/SelectCoins";
import SelectDays from "../components/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import List from "../components/List";
import CoinInfo from "../components/CoinInfo";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../components/LineChart";
import Loader from "../components/common/Loader";

const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState();
  const [crypto2Data, setCrypto2Data] = useState();
  const [days, setDays] = useState(7);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const handleDaysChange = async (event) => {
    const newDay = event.target.value;
    const price1 = await getCoinPrices(crypto1, newDay, "prices");
    const price2 = await getCoinPrices(crypto2, newDay, "prices");
    setDays(newDay);
    if (price1.length > 0 && price2.length > 0) {
      settingChartData(setChartData, price1, price2);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
        setLoading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      const newCrypto2 = event.target.value;
      setCrypto2(newCrypto2);
      const data = await getCoinData(newCrypto2);
      if (data) {
        coinObject(setCrypto2Data, data);
      }
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(newCrypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
      }
    } else {
      const newCrypto1 = event.target.value;
      setCrypto1(newCrypto1);
      const data = await getCoinData(newCrypto1);
      if (data) {
        coinObject(setCrypto1Data, data);
      }
      const prices1 = await getCoinPrices(newCrypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
      }
    }
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row md:justify-between justify-start items-center mx-[1.5rem] max-w-[100%]">
        <SelectCoins
          crypto1={crypto1}
          crypto2={crypto2}
          handleCoinChange={handleCoinChange}
        />
        <SelectDays days={days} handleDayChange={handleDaysChange} />
      </div>
      <div className=" bg-darkgrey m-[1.5rem] rounded-lg">
        <List coin={crypto1Data} />
      </div>
      <div className=" bg-darkgrey m-[1.5rem] rounded-lg">
        <List coin={crypto2Data} />
      </div>
      <div className="bg-darkgrey m-[1.5rem] rounded-lg">
        <LineChart
          chartData={chartData}
          priceType={"prices"}
          multiAxis={true}
        />
      </div>

      <CoinInfo
        title={crypto1Data ? crypto1Data.name : null}
        desc={crypto1Data ? crypto1Data.desc : null}
      />
      <CoinInfo
        title={crypto2Data ? crypto2Data.name : null}
        desc={crypto2Data ? crypto2Data.desc : null}
      />
    </>
  );
};

export default Compare;
