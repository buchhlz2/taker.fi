import React, { useState, useEffect } from 'react';
import ConnectWallet from "./ConnectWallet";
import WalletAddress from "./WalletAddress";

const Homescreen = ({ addressState, addressStateSetter }) => {
  return (
    <div>
      <WalletAddress
        addressState={addressState}
      />
      <ConnectWallet
        addressState={addressState}
        addressStateSetter={addressStateSetter}
      />
    </div>
  );
};

export default Homescreen;