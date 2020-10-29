import React, { useState, useEffect } from 'react';
import Coinlist from "./Coinlist";
import Walletscreen from "./Walletscreen";

const Homescreen = () => {
    return (
      <div>
        <Walletscreen />
        <Coinlist />
      </div>
    );
}

export default Homescreen;