import React, { useEffect, useState } from "react";
import ConnectWallet from "./ConnectWallet";
import WalletAddress from "./WalletAddress";
import Web3 from "web3";

// ConnectWallet displays various info about the wallet (read-only), such as address & balances
const Balance = ({ addressState }) => {
  const [balance, setBalance] = useState([]);
  // Global variables -- refactor
  let ethereum = window.ethereum;
  let web3 = new Web3(ethereum);

  // Get the balances of the address
  // TO DO: only support ETH; must get ERC balances
  const handleClickGetWalletBalance = async (e) => {
    e.preventDefault();
    await web3.eth.getBalance(addressState, (error, wei) => {
      if (!error) {
        setBalance(web3.utils.fromWei(wei, "ether"));
      }
    });
  };

  // TO DO: once ERC balances are captured (instead of only ETH), to `map` the balances to `<li>`
  let balanceItems = balance;

  // Wallet `Connect Wallet` button displayed -- if already authorized, then it disappears
  // `Get Balances` button gets the wallet's balance upon click
  // TO DO: update balance upon mount; must refactor due to async issues if click not used
  return (
    <div>
      <WalletAddress addressState={addressState} />
      <div className="main-card">
        <h3 className="center-text">BALANCE</h3>
        <div>
          {addressState ? (
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
          ) : <p>Please connect your wallet.</p>}
        </div>
      </div>
    </div>
  );
};

export default Balance;
