import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class ArticlesInfo extends Component {
  render() {
    return (
      <div className="articlesInfo">
        <div className="mainstream">
          <Header />
          <div className="articlesInfo-container">articles info</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ArticlesInfo;
