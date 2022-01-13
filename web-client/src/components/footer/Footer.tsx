import React, {Component} from "react";

import NavBar from "./NavBar";

import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-sidebar">
            <a href="../../terms-and-conditions.html" className="footer-navbarLink">
              terms and conditions
            </a>
            <a href="../../application-privacy-policy.html" className="footer-navbarLink">
              privacy policy
            </a>
          </div>
          <NavBar />
        </div>
        <div className="footer-copyright">2022 Все права защищены</div>
      </div>
    );
  }
}

export default Footer;
