import React from "react";

// ConnectWallet displays various info about the wallet (read-only), such as address & balances
const WalletAddress = ({ addressState }) => {
  return (
    <div>
    {addressState ? (
      <div className="main-card">
        <p>
          <b>ADDRESS: </b> {addressState}
        </p>
      </div>
    ) : null}
    </div>
  );
};

export default WalletAddress;