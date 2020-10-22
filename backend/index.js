const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log("Backend service running")
});

app.listen(PORT, (req, res) => {
  console.log(`App is listening on port: ${PORT}`)
});