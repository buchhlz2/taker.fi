import React, { useEffect, useState } from "react";
import Web3 from "web3";

// Walletscreen displays various info about the wallet (read-only), such as address & balances
const Walletscreen = (props) => {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState([]);
  const [walletIsConnected, setWalletIsConnected] = useState(false);

  // Global variables -- refactor
  let ethereum = window.ethereum;
  let web3 = new Web3(ethereum);

  // Connect to Metamask wallet upon click with "connect" button
  // Check if eth recognized in window; get the address and update state
  async function connectEthBrowserWallet() {
    if (ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        // Request account access if needed
        const accounts = await ethereum.send("eth_requestAccounts");
        // Acccounts now exposed; update state
        setAddress(accounts.result[0]);
        setWalletIsConnected(true);
      } catch (error) {
        console.log(error);
      }
    }
    // Non-dapp browsers
    else {
      console.log("Non-Ethereum browser detected; please install MetaMask!");
    }
  }

  // Upon mount, check if addresses exist & update state accordingly
  useEffect(() => {
    async function getAddresses(callback) {
      web3.eth.getAccounts((error, result) => {
        try {
          callback(result);
        } catch (error) {
          console.log(error);
        }
      });
    }

    getAddresses((result) => {
      if (result.length !== 0) {
        setAddress(result[0]);
        setWalletIsConnected(true);
      }
    });
  }, [ethereum, web3]);

  // Get the balances of the address
  // TO DO: only support ETH; must get ERC balances
  const handleClickGetWalletBalance = async (e) => {
    e.preventDefault();
    await web3.eth.getBalance(address, (error, wei) => {
      if (!error) {
        setBalance(web3.utils.fromWei(wei, "ether"));
      }
    });
  };

  // Handle wallet connect on click -- e.g., prompts Metamask authorization
  const handleClickConnectWallet = async (e) => {
    e.preventDefault();
    connectEthBrowserWallet();
  };

  // TO DO: once ERC balances are captured (instead of only ETH), to `map` the balances to `<li>`
  let balanceItems = balance;

  // Wallet `Connect Wallet` button displayed -- if already authorized, then it disappears
  // `Get Balances` button gets the wallet's balance upon click
  // TO DO: update balance upon mount; must refactor due to async issues if click not used
  return (
    <div className="main-card">
      <h3 className="center-text">WALLET</h3>
      <div>
        {!walletIsConnected ? (
          <button
            id="connectButton"
            className="btn btn-center"
            onClick={handleClickConnectWallet}
          >
            Connect Wallet
          </button>
        ) : null}
      </div>
      <div>
        {address ? (<p><b>Address:</b> {address}</p>) : null}
      </div>
      <div>
        {address ? (
          <div>
            <button
              id="balanceButton"
              className="btn btn-center"
              onClick={handleClickGetWalletBalance}
            >
              Get Balance
            </button>
            <div>
              {balance.length !== 0 ? <ul>{balanceItems} ETH</ul> : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Walletscreen;
