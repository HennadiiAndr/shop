import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class CreditInfo extends Component {
  render() {
    return (
      <div className="creditInfo">
        <div className="mainstream">
          <Header />
          <div className="creditInfo-container">credit info</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default CreditInfo;
