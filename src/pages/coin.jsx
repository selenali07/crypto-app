import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import parser from "html-react-parser";
import { MdArrowBack } from "react-icons/md";
import SelectButton from "../components/SelectButton";


import {
  AboutCoinTitle,
  ButtonRow,
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
  const [days, setDays] = useState(1);
  const [historicData, setHistoricData] = useState();

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
      data.market_cap_rank,
      data.market_data.current_price.usd,
      data.market_cap
    ]);
  };
  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chartDays = [
    {
      label: "1D",
      value: 1,
    },
    {
      label: "1W",
      value: 7,
    },
    {
      label: "1M",
      value: 30,
    },
    {
      label: "1Y",
      value: 365,
    },
  ];

  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
    );
    setHistoricData(data.prices);
  };
  useEffect(() => {
    fetchHistoricData();
  }, [days]);
  
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
      <main style={{backgroundColor: "black"}}>
      <CoinWrapper>
        <CoinInfoContainer>
          <CoinHeader>
          <img src={coin[3]} alt="" />
            <CoinName>{coin[2]} ({coin[4]})</CoinName>
            <P>#{coin[5]}</P>
          </CoinHeader>
        </CoinInfoContainer>
        <ChartContainer>
        <P>Current price: ${coin[6]}</P>
          <ButtonRow>
        {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
              </ButtonRow>
          {!historicData ? (
            <CircularProgress
              style={{ color: "#0aefff" }}
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
                      borderColor: "#0aefff",
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
        <CoinDesc> <br></br> {parser(`${coin[0]}`)}</CoinDesc>
      </P>
      </main>
      <Footer />
      </>
  );
};  

const navImg = {
  width: "3rem",
  height: "auto",
  margin: "1rem",
};

export default Coin;
