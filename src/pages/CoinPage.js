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

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(120);
  const [chartData, setChartData] = useState({});

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
        setChartData({
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              data: prices.map((price) => price[1]),
              borderColor: "#3a80e9",
              backgroundColor: "rgba(58, 128, 233, 0.1)",
              yAxisID: "y",
              borderWidth: 1,
              fill: true,
              tension: 0.25,
              pointRadius: 0,
            },
          ],
        });
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
