import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class OrdersInfo extends Component {
  render() {
    return (
      <div className="ordersInfo">
        <div className="mainstream">
          <Header />
          <div className="ordersInfo-container">Orders info</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default OrdersInfo;
