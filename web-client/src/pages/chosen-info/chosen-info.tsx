import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class ChosenInfo extends Component {
  render() {
    return (
      <div className="chosenInfo">
        <div className="mainstream">
          <Header />
          <div className="chosenInfo-container">Chosen info</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ChosenInfo;
