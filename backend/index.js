const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

// GETs top 100 coins by market cap from CoinGecko API
// API documentation here: https://www.coingecko.com/api/documentations/v3#/coins/get_coins_markets
app.get("/api/coins", (req, res) => {
  const CoinGeckoBaseURL = "https://api.coingecko.com/api/v3";
  const path = "/coins/markets";
  const query = {
    vs_currency: "usd",
    page: 1
  };
  async function fetchCoins() {
    try {
      const response = await axios.get(
        `${CoinGeckoBaseURL}${path}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          params: query
        }
      );
      const coinData = await response.data;
      res.json({ coins: coinData });
    } catch (err) {
      console.log(err);
    }
  }
  fetchCoins();
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});