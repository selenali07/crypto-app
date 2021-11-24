import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {TrendingContainer, TrendingH1, TrendingH2, TrendingWrapper, TrendingCard, TrendingIcon, TrendingH3, TrendingP} from './TrendingElements'

const Trending = () => {
  const [trending, setTrending] = useState([]);
  let trendingItems = []
  
  const fetchTrendingCoins = async () => {
    const { data } = await 
    axios.get(
      `https://api.coingecko.com/api/v3/search/trending`);
    console.log(data.coins);
    setTrending(data.coins);
  };
  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();

  for(var i = 0; i < trending.length - 1; i++){
    trendingItems.push(trending[i].item);
  }
  console.log(trendingItems)
  return (
    <TrendingContainer id='trending'>
      <TrendingH1>Trending Coins</TrendingH1>
      <TrendingH2>Top-6 most searched coins by users in the last 24 hours</TrendingH2>
      <TrendingWrapper>
      {trendingItems.map(coinIdx => {
        let coinid = coinIdx.id;
        return(
          <TrendingCard onClick={() => history.push(`/coin/${coinid}`)}>
            <TrendingIcon src={coinIdx.large}/>
            <TrendingH3>{coinIdx.id}</TrendingH3>
            <TrendingP>{coinIdx.symbol}</TrendingP>
          </TrendingCard>        )
      })}
      </TrendingWrapper>
    </TrendingContainer>
    
  )
}

export default Trending
