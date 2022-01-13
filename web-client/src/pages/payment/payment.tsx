import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class Payment extends Component {
  render() {
    return (
      <div className="payment">
        <div className="mainstream">
          <Header />
          <div className="payment-container">payment</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Payment;
