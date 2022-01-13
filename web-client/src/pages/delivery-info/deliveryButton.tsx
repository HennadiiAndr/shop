import React, {Component} from "react";

import "./styles.scss";

type DeliveryButtonProps = {
  text: string;
  setText: any;
  setBgGray: any;
  setBgWhite: any;
  bgcolor: string;
  txtcolor: string;
};

class DeliveryButton extends Component<DeliveryButtonProps> {
  static defaultProps = {
    text: "",
    setText: "",
    setBgGray: "",
    setBgWhite: "",
    bgcolor: "",
    txtcolor: ""
  };

  onClickHandler = () => {
    this.props.setText();
  };

  onMouseOverHandler = () => {
    this.props.setBgGray();
  };

  onMouseLeaveHandler = () => {
    this.props.setBgWhite();
  };

  render() {
    return (
      <div>
        <div
          className="deliveryButton"
          style={{backgroundColor: this.props.bgcolor, color: this.props.txtcolor}}
          onClick={this.onClickHandler}
          onMouseOver={this.onMouseOverHandler}
          onMouseLeave={this.onMouseLeaveHandler}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default DeliveryButton;
