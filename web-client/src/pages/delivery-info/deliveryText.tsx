import React, {Component} from "react";

import "./styles.scss";

type DeliveryTextProps = {
  text: string;
};

class DeliveryText extends Component<DeliveryTextProps> {
  static defaultProps = {
    text: ""
  };

  render() {
    return <div className="textBox">{this.props.text}</div>;
  }
}

export default DeliveryText;
