import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class FAQInfo extends Component {
  render() {
    return (
      <div className="FAQInfo">
        <div className="mainstream">
          <Header />
          <div className="FAQInfo-container">FAQ info</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default FAQInfo;
