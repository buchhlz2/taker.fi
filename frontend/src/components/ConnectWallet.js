import React, { useEffect, useState } from "react";
import Web3 from "web3";

// ConnectWallet displays various info about the wallet (read-only), such as address & balances
const ConnectWallet = ({ addressState, addressStateSetter }) => {
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
        addressStateSetter(accounts.result[0]);
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
        addressStateSetter(result[0]);
        setWalletIsConnected(true);
      }
    });
  }, [ethereum, web3, addressStateSetter, addressState]);

  // Handle wallet connect on click -- e.g., prompts Metamask authorization
  const handleClickConnectWallet = async (e) => {
    e.preventDefault();
    connectEthBrowserWallet();
  };

  // Wallet `Connect Wallet` button displayed -- if already authorized, then it disappears
  // `Get Balances` button gets the wallet's balance upon click
  // TO DO: update balance upon mount; must refactor due to async issues if click not used
  return (
    <div className="main-card">
      <div>
        {!walletIsConnected ? (
          <button
            id="connectButton"
            className="btn btn-center"
            onClick={handleClickConnectWallet}
          >
            Connect Wallet
          </button>
        ) : <p>Wallet connected.</p>}
      </div>
    </div>
  );
};

export default ConnectWallet;
