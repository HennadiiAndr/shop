import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./styles.scss";

class Vacancies extends Component {
  render() {
    return (
      <div className="vacancies">
        <div className="mainstream">
          <Header />
          <div className="vacancies-container">vacancies</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Vacancies;
