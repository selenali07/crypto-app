import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import parser from "html-react-parser";
import { MdArrowBack } from "react-icons/md";

import {
  ChartContainer,
  CoinWrapper,
  CoinName,
  CoinHeader,
  CoinInfoContainer,
  CoinDesc,
  P,
  NavCoinPage,
  NavLogo,
  NavCoinPageContainer,
} from "./CoinPageElements";

import { Line } from "react-chartjs-2";
import { CircularProgress } from "@material-ui/core";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [days, setDays] = useState(365);
  const [historicData, setHistoricData] = useState();

  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);

  const fetchCoin = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    console.log(data);
    setCoin([
      data.description.en.toString(),
      data.id,
      data.name,
      data.image.small,
      data.symbol.toUpperCase(),
      data.market_cap_rank
    ]);
  };
  useEffect(() => {
    fetchCoin();
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
    );
    setHistoricData(data.prices);
    console.log(data.prices);
  };
  console.log(coin);

  const navImg = {
    width: "3rem",
    height: "auto",
    margin: "1rem",
  };

  return (
    <>
      <NavCoinPage>
        <NavCoinPageContainer>
          <NavLogo to="/">
            <MdArrowBack />
            <img src="./images/doge.svg" alt="doge" style={navImg} />
            CryptoDash
          </NavLogo>
        </NavCoinPageContainer>
      </NavCoinPage>
      <CoinWrapper>
        <CoinInfoContainer>
          <CoinHeader>
          <img src={coin[3]} alt="" />
            <CoinName>{coin[2]} ({coin[4]})</CoinName>
            <CoinName></CoinName>
            #{coin[5]}
          </CoinHeader>
        </CoinInfoContainer>
        <ChartContainer>
          {!historicData ? (
            <CircularProgress
              style={{ color: "rebeccapurple" }}
              size={200}
              thickness={1}
            />
          ) : (
            <>
              <Line
                data={{
                  labels: historicData.map((coin) => {
                    let date = new Date(coin[0]);
                    return date.toLocaleDateString("sv-SE");
                  }),

                  datasets: [
                    {
                      data: historicData.map((coin) => coin[1]),
                      label: `Price ( Past ${days} Days ) in USD`,
                      borderColor: "rebeccapurple",
                      color: "white",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-around",
                  width: "100%",
                }}
              ></div>
            </>
          )}
        </ChartContainer>
      </CoinWrapper>
      <P>
        <CoinDesc>{parser(`${coin[0]}`)}</CoinDesc>
      </P>
      <Footer />
      </>
  );
};

export default Coin;
