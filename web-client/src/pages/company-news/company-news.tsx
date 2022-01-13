import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class CompanyNews extends Component {
  render() {
    return (
      <div className="company-news">
        <div className="mainstream">
          <Header />
          <div className="news-container">company news</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default CompanyNews;
