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

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(30);

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
        console.log("yes yes");
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
          <CoinInfo title={coinData.name} desc={coinData.desc} />
        </>
      )}
    </>
  );
};

export default CoinPage;
