import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StatContainer,
  StatsCard,
  Heading,
  StatsWrapper,
  TopLine
} from "./StatsElements";

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => {
        setStats(res.data.data.active_cryptocurrencies);
        console.log(res.data.data.active_cryptocurrencies);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StatContainer id="Stats">
      <StatsWrapper>
        <StatsCard>
        <Heading>Total Cryptocurrency Market Cap</Heading><TopLine>$2.79 trillion</TopLine></StatsCard>
        <StatsCard> 
        <Heading>Number of Crypto Currencies</Heading><TopLine>over 1600</TopLine></StatsCard>
        
      </StatsWrapper>
    </StatContainer>
  );
};

export default Stats;
