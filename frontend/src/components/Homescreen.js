import React, { useState, useEffect } from 'react';
import Coinlist from "./Coinlist";
import Walletscreen from "./Walletscreen";
import Nav from "./Nav";

const Homescreen = () => {
    return (
      <div>
        <Nav />
        <Walletscreen />
        <Coinlist />
      </div>
    );
}

export default Homescreen;