# Taker.fi -- DeFi Blockchain Dapp
### Track browser wallet, assets, & top coins in a simple UI
Connect wallet (using Metamask to Ropsten testnet), view ETH balance, and then view a live API to CoinGecko API price feed.

## CAUTION: BETA ONLY -- USE AT OWN RISK

Application demo on Ropsten testnet available [here](https://mighty-dawn-52333.herokuapp.com/)
![](demo/taker_demo.gif)

## Available Scripts

In the root project directory, you can run:

### `npm run dev`

Make sure `concurrently` is installed globally on your machine before running: `npm i -g concurrently`

Runs the app in the development mode.<br />
- Open [http://localhost:3000](http://localhost:3000) to run frontend
- Open [http://localhost:8080](http://localhost:8080) to run backend

### `npm run start`

Before deploying, make sure dependencies are installed & frontend build is completed: `npm run postinstall`. Note that if deploying to [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs), it automatically looks to the `postinstall` script as well as `start`

Runs the app in the build/production mode.<br />
- Open [http://localhost:8080](http://localhost:8080) to run backend
