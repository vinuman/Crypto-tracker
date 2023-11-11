import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import { coinObject } from "../functions/convertObject";
import List from "../components/List";
import CoinInfo from "../components/CoinInfo";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log(response);
          coinObject(setCoinData, response.data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

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
