import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./ProductOfTheDaySideBar.scss";
import {categoryCountType, headerCatalogCategoryType} from "./../../../api/@types";
import {categoryCountDefault} from "./../../../api/defaults";

type ProductOfTheDaySideBarState = {
  categoryCount: categoryCountType;
  categoryData: Array<headerCatalogCategoryType>;
};

class ProductOfTheDaySideBar extends Component<unknown, ProductOfTheDaySideBarState> {
  state = {
    categoryCount: categoryCountDefault,
    categoryData: []
  };

  async componentDidMount() {
    await fetch("/api/categories/count")
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          categoryCount: data
        });
      });
    const count = this.state.categoryCount.count;
    const getRandom = function (max: number) {
      return Math.floor(Math.random() * Math.floor(max));
    };
    const categoryItem = getRandom(count - 4);
    fetch(`/api/categories?filter={"limit": 4, "offset": ${categoryItem}}`)
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          categoryData: data
        });
      });
  }

  render() {
    if (this.state.categoryData.length < 4) {
      return null;
    }
    const item1 = this.state.categoryData[0] as headerCatalogCategoryType;
    const item2 = this.state.categoryData[1] as headerCatalogCategoryType;
    const item3 = this.state.categoryData[2] as headerCatalogCategoryType;
    const item4 = this.state.categoryData[3] as headerCatalogCategoryType;

    return (
      <div className="ProductOfTheDay_SideBar-wrapper">
        <div className="ProductOfTheDay_SideBar">
          <div className="ProductOfTheDay_Sidebar-Section">
            {item1.name}
            <Link to={"/Category/" + item1.id}>
              <img src={item1.mainImageUrl} alt=""></img>
            </Link>
          </div>
          <div className="ProductOfTheDay_Sidebar-Section">
            {item2.name}
            <Link to={"/Category/" + item2.id}>
              <img src={item2.mainImageUrl} alt=""></img>
            </Link>
          </div>
        </div>
        <div className="ProductOfTheDay_SideBar">
          <div className="ProductOfTheDay_Sidebar-Section">
            {item3.name}
            <Link to={"/Category/" + item3.id}>
              <img src={item3.mainImageUrl} alt=""></img>
            </Link>
          </div>
          <div className="ProductOfTheDay_Sidebar-Section">
            {item4.name}
            <Link to={"/Category/" + item4.id}>
              <img src={item4.mainImageUrl} alt=""></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOfTheDaySideBar;
