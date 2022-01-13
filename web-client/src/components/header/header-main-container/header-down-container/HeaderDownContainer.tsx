import React, {Component} from "react";
import {Link} from "react-router-dom";

import HeaderSearchBar from "./header-searchbar/HeaderSearchBar";
import HeaderCatalog from "./header-catalog/HeaderCatalog";
import CartIcon from "./cart-icon/";

import "./HeaderDownContainer.scss";

type headerCatalogCategoryType = {
  id: number;
  name: string;
  parentId: number;
};
type HeaderDownContainerProps = {
  headerCatalogData: Array<headerCatalogCategoryType>;
};

class HeaderDownContainer extends Component<HeaderDownContainerProps> {
  static defaultProps = {
    headerCatalogData: []
  };

  render() {
    return (
      <div className="headerdowncontainer">
        <Link to="/" className="headerlogo">
          <img title="Наш магазин" src="/logo.svg" alt=""></img>
        </Link>
        <HeaderSearchBar />
        <div className="header_cartcatalog-wrapper">
          <HeaderCatalog headerCatalogData={this.props.headerCatalogData} />
          <CartIcon />
        </div>
      </div>
    );
  }
}

export default HeaderDownContainer;
