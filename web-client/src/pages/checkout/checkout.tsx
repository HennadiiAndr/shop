import React, {Component} from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import CheckoutMain from "./checkout-main";

import "./styles.scss";

class Checkout extends Component {
  render() {
    return (
      <div className="checkout">
        <div className="mainStream">
          <Header />
          <CheckoutMain />
          <Footer />
        </div>
      </div>
    );
  }
}
export default Checkout;
