import React, { useState, useEffect } from "react";
import axios from "axios";

// Displays top coins by market cap in a simple list; not specific to wallet but global metrics
// TO DO: backend has static representation; must connect to CMC, LINK, etc. API to pull in live data
const Coinlist = (props) => {
  const [coins, setCoins] = useState([]);

  // Upon mount, load the coins via API call to backend
  // TO DO: update to render live data
  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await axios.get("/api/coins");
        const data = await response.data.coins;
        setCoins(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCoins();
  }, []);

  let coinsList =
    coins === undefined
      ? "No data available."
      : coins.map((coin) => (
          <li key={coin.market_cap_rank}>
            {coin.symbol.toUpperCase()}: {coin.current_price} USD
          </li>
        ));

  return (
    <div className="main-card">
      <h3 className="center-text">TOP COINS BY MARKET CAP</h3>
      <ol>{coinsList}</ol>
    </div>
  );
};

export default Coinlist;