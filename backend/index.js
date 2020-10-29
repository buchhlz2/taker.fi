const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

// Fake data for frontend rendering purposes
// TO DO: create real backend service and/or live price feed via API
const sampleData = {
  coins: [
    {
      id: 1,
      ticker: "BTC",
      date: "2020-09-30T17:30:31.098Z",
      price: 13000
    },
    {
      id: 2,
      ticker: "ETH",
      date: "2020-09-30T18:39:34.091Z",
      price: 400
    },
    {
      id: 3,
      ticker: "LINK",
      date: "2020-09-30T19:20:14.298Z",
      price: 12
    },
  ],
};

app.get("/api/coins", (req, res) => {
  console.log("Backend service running");
  res.json({ data: sampleData });
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});