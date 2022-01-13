import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="mainstream">
          <Header />
          <div className="about-company">about company</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
