import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    SliderElt,
    SlideTrack,
    Slide
} from "./SliderElements";

const Slider = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
          .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
        )
        .then((res) => {
          setCoins(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  return (
    <section id = "slider">
    <SliderElt>
	<SlideTrack>
        {coins.map((coin) => {
        return (
          <Slide>{coin.name}
          {coin.current_price}</Slide>
        );
      })}
	</SlideTrack>
    </SliderElt>
   </section>
  );
};

export default Slider;
