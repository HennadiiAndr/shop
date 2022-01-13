import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class WarrantyInfo extends Component {
  render() {
    return (
      <div className="warrantyInfo">
        <div className="mainstream">
          <Header />
          <div className="warrantyInfo-container">warranty and service info</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default WarrantyInfo;
