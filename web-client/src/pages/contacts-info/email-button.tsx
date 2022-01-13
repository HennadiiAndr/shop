import React, {Component} from "react";

import "./styles.scss";

type EmailButtonProps = {
  text: string;
  setFormDisplay: any;
};

class EmailButton extends Component<EmailButtonProps> {
  static defaultProps = {
    text: "",
    setFormDisplay: ""
  };

  onClickHandler = () => {
    this.props.setFormDisplay();
  };

  render() {
    return (
      <div className="emailbutton" onClick={this.onClickHandler}>
        {this.props.text}
      </div>
    );
  }
}

export default EmailButton;
