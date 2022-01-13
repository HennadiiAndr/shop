import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class ReturnInfo extends Component {
  render() {
    return (
      <div className="returnInfo">
        <div className="mainstream">
          <Header />
          <div className="returnInfo-container">return info</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturnInfo;
