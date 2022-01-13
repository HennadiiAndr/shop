import React, {Component} from "react";

import ProductOfTheDayCard from "./product-of-the-day-card/";
import ProductOfTheDaySideBar from "./product-of-the-day-sidebar";

import "./ProductOfTheDay.scss";

class ProductOfTheDay extends Component {
  render() {
    return (
      <div className="productoftheday">
        <ProductOfTheDayCard />
        <ProductOfTheDaySideBar />
      </div>
    );
  }
}

export default ProductOfTheDay;
