import React, {Component} from "react";

import HeaderSearchBarInput from "./header-searchbar-input/HeaderSearchBarInput";
import HeaderSearchBarButton from "./header-searchbar-button/HeaderSearchBarButton";

import "./HeaderSearchBar.scss";

class HeaderSearchBar extends Component {
  render() {
    return (
      <div className="headersearchbar">
        <HeaderSearchBarInput />
        <HeaderSearchBarButton />
      </div>
    );
  }
}

export default HeaderSearchBar;
