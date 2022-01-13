import React, {Component} from "react";

import {headerCatalogCategoryType} from "../../api/@types";

import HeaderDownContainer from "./header-main-container/header-down-container/HeaderDownContainer";

import "./header.scss";

type HeaderState = {
  listForHeaderCatalog: Array<headerCatalogCategoryType>;
};

type HeaderProps = {
  deliveryLocation: string;
  headerCatalogData: Array<headerCatalogCategoryType>;
};

class Header extends Component<HeaderProps, HeaderState> {
  state = {
    listForHeaderCatalog: []
  };

  static defaultProps = {
    deliveryLocation: "",
    headerCatalogData: []
  };

  componentDidMount() {
    const dataFilter = (data: Array<headerCatalogCategoryType>) => {
      const filtered = data.filter((filterItem: headerCatalogCategoryType) => !filterItem.parentId);

      return filtered;
    };
    fetch("/api/categories")
      .then(answer => answer.json())
      .then((data: Array<headerCatalogCategoryType>) => {
        const x = dataFilter(data);
        this.setState({
          listForHeaderCatalog: x
        });
      });
  }

  render() {
    return (
      <div className="header">
        <HeaderDownContainer headerCatalogData={this.state.listForHeaderCatalog} />
      </div>
    );
  }
}

export default Header;
