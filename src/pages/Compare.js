import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import SelectCoins from "../components/SelectCoins";
import SelectDays from "../components/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";

const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [priceType, setPriceType] = useState("prices");

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(setCrypto1Data, data);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(setCrypto2Data, data);
      }
    }
    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    setLoading(false);
  };

  useEffect(() => {}, []);

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
        /* settingChartData(setChartData, prices); */
        setLoading(false);
      }
    }
  }
  return (
    <>
      <Header />
      <div className="flex justify-between items-center m-[1.5rem]">
        <SelectCoins
          crypto1={crypto1}
          crypto2={crypto2}
          handleCoinChange={handleCoinChange}
        />
        <SelectDays days={days} handleDayChange={handleDaysChange} />
      </div>
    </>
  );
};

export default Compare;
