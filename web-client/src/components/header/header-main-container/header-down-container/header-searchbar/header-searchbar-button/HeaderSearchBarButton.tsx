import React, {Component} from "react";

import Loop from "../../../../../../icons/Loop";

import "./HeaderSearchBarButton.scss";

class HeaderSearchBarButton extends Component {
  render() {
    return (
      <div className="headersearchbarbutton">
        <div className="headersearchbarbuttoninner">
          <Loop />
        </div>
      </div>
    );
  }
}

export default HeaderSearchBarButton;
