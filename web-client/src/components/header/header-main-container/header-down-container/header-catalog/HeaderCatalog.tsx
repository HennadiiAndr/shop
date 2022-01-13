import React, {Component} from "react";
import {Link} from "react-router-dom";

import HeaderBurger from "./header-burger/HeaderBurger";
import "./HeaderCatalog.scss";

type HeaderCatalogState = {
  opened: boolean;
};

type headerCatalogCategoryType = {
  id: number;
  name: string;
  parentId: number;
};

type headercatalogProps = {
  headerCatalogData: Array<headerCatalogCategoryType>;
};

class HeaderCatalog extends Component<headercatalogProps, HeaderCatalogState> {
  state = {
    opened: false
  };

  static defaultProps = {
    headercatalogProps: []
  };

  handleClick = () => {
    this.setState({
      opened: !this.state.opened
    });
  };

  render() {
    return (
      <div
        className="headercatalogcontainer"
        onClick={this.handleClick}
        tabIndex={0}
        onBlur={() =>
          this.setState({
            opened: false
          })
        }>
        <div className="headercatalog">
          <div>КАТАЛОГ ТОВАРОВ</div>
          <HeaderBurger />
        </div>
        <div className="catalogDropdown-wrapper">
          <div className={"catalogDropdown" + (this.state.opened ? " catalogDropdownOpened" : " ")}>
            {this.props.headerCatalogData.map(headerCatalogDataItem => (
              <div className="headercatalogcontainerFeatures" key={headerCatalogDataItem.id}>
                <Link to={"/Category/" + headerCatalogDataItem.id} className="headercatalogcontainerFeatures-name">
                  {headerCatalogDataItem.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderCatalog;
