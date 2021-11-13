import React from "react";
import {
  CoinContainer,
  CoinRow,
  CoinNameContainer,
  CoinName,
  CoinSymbol,
  CoinImg,
  CoinPrice,
  CoinData,
  CoinMarketCapShort,
  CoinMarketCapLong,
  Loss,
  Profit
} from "./DashboardElements";

const formatNum = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  image,
  priceChange,
}) => {
  return (
    
    <CoinContainer onclick="">
      <CoinRow>
        <CoinImg src={image} alt="crypto"></CoinImg>
        <CoinNameContainer>
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol}</CoinSymbol>
        </CoinNameContainer>
        <CoinData>
          <CoinPrice>${price}</CoinPrice>
          {priceChange < 0 ? (<Loss>{priceChange.toFixed(2)}%</Loss>) : ( <Profit>{priceChange.toFixed(2)}%</Profit>)}
        </CoinData>
          <CoinMarketCapShort>${formatNum(marketcap)}</CoinMarketCapShort>
          <CoinMarketCapLong>${marketcap.toLocaleString()}</CoinMarketCapLong>

      </CoinRow>
    </CoinContainer>
  );
};

export default Coin;
