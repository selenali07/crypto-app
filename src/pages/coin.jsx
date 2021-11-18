import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const fetchCoin = async () => {
    const { data } = await 
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
      console.log(data);
    setCoin([data.description.en, 
            data.id, 
            data.name, 
            data.image.large]);
  };
  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(coin)

  return (
    <>
    <div>
    <h1>hello</h1>
    <img src = {coin[3]} alt = ""/>
   </div>
              <Footer />

   </>

  );
};

export default Coin;
