import React, {Component} from "react";

import "./HeaderBurger.scss";

type HeaderBurgerProps = {
  turned: boolean;
};

class HeaderBurger extends Component<HeaderBurgerProps> {
  static defaultProps = {
    turned: false
  };

  render() {
    return (
      <div className="headerburger">
        <div style={LineStyle}></div>
        <div style={LineStyle}></div>
        <div style={LineStyle}></div>
      </div>
    );
  }
}

const LineStyle = {
  marginTop: "4px",
  width: "16px",
  height: "2px",
  backgroundColor: "rgba(0,0,0,.7)"
};

export default HeaderBurger;
