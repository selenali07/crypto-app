import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

import {
  DashboardContainer,
  DashboardSearch,
  DashboardSearchTitle,
  SearchForm,
  SearchInput
} 
from "./DashboardElements";

const useStyles = makeStyles({
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "white",
    },
  },
});

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const classes = useStyles();

  const modal = () => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false"
        )
        .then((res) => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
  }
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => setSearch(e.target.value);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <DashboardContainer id = "dashboard">
      <DashboardSearch>
        <DashboardSearchTitle>Search a currency</DashboardSearchTitle>
        <SearchForm>
          <SearchInput
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </SearchForm>
      </DashboardSearch>
      {filteredCoins.slice((page - 1) * 10, (page - 1) * 10 + 10).map((coin) => {
        return (
          <Coin
            onClick={modal}
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
      <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          classes={{ ul: classes.pagination }}
          style={{
            padding: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: "white",
            margin: 10
          }}
          onChange={(_, value) => {
            setPage(value);
          }}
        />

    </DashboardContainer>
  );
}

export default Dashboard;
