import React, {Component} from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";

import Cart from "./cart";
import JustinModule from "./justin-module";
import "./styles.scss";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="shoppingCart">
        <div className="mainStream">
          <Header />
          <Cart />
          <JustinModule />
          <Footer />
        </div>
      </div>
    );
  }
}
