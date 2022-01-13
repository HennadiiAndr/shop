import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class SupplyInfo extends Component {
  render() {
    return (
      <div className="supplyInfo">
        <div className="mainstream">
          <Header />
          <div className="supplyInfo-container">info for suppliers</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SupplyInfo;
