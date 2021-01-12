import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/Header.css";

import header1 from "../images/header1.jpg";
import header2 from "../images/header2.jpg";
import header3 from "../images/header3.jpg";

const Header = () => {
  // const images = [header1, header2, header3];
  // const index = Math.floor(Math.random() * 3);
  // const img = images[index];
  // console.log(img);
  return (
    <>
      {/* <img src={img} alt="miasto" /> */}

      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={header1} alt="miasto" />}
        />
        <Route
          path="/products"
          render={() => <img src={header1} alt="miasto" />}
        />
        <Route
          path="/contact"
          render={() => <img src={header2} alt="miasto" />}
        />
        <Route
          path="/admin"
          render={() => <img src={header3} alt="miasto" />}
        />
        <Route render={() => <img src={header1} alt="miasto" />} />
      </Switch>
    </>
  );
};

export default Header;
