import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class ActionsInfo extends Component {
  render() {
    return (
      <div className="actionsInfo">
        <div className="mainstream">
          <Header />
          <div className="actionsInfo-container">actions info</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ActionsInfo;
