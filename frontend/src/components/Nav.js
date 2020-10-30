import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faWallet, faCoins } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link to="/balance">
              <FontAwesomeIcon icon={faWallet} />
            </Link>
          </li>
          <li>
            <Link to="/coinlist">
              <FontAwesomeIcon icon={faCoins} />
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Nav;