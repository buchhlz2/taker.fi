import React, { useState, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Homescreen from './components/Homescreen';
import Coinlist from "./components/Coinlist";
import Balance from "./components/Balance";
import Nav from "./components/Nav";

function App() {
  const [addressState, setAddressState] = useState(null);
  const wrapperSetAddressState = useCallback(
    (val) => {
      setAddressState(val);
    },
    [setAddressState]
  );


  return (
    <main>
      <Nav />
      <Switch className="app">
        <Route exact path="/">
          <Homescreen
            addressState={addressState}
            addressStateSetter={wrapperSetAddressState}
          />
        </Route>
        <Route path="/balance">
          <Balance
            addressState={addressState}
            addressStateSetter={wrapperSetAddressState}
          />
        </Route>
        <Route path="/coinlist">
          <Coinlist />
        </Route>
      </Switch>
      <footer className="footer"></footer>
    </main>
  );
}

export default App;
