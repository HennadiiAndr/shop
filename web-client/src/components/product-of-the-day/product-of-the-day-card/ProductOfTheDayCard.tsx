import React, {Component} from "react";
import {Link} from "react-router-dom";

import ButtonBuy from "../../../pages/product-full/product-full-card/button-buy";

import {ProductType} from "./../../../api/@types";
import {getNewPrice, getBenefit} from "./../../../utils/counters";
import {priceFormatter} from "./../../../utils/formatters";
import {productDefault} from "./../../../api/defaults";

import "./ProductOfTheDayCard.scss";

type ProductOfTheDayCardState = {
  productData: ProductType;
};

class ProductOfTheDayCard extends Component<unknown, ProductOfTheDayCardState> {
  state = {
    productData: productDefault
  };

  componentDidMount() {
    fetch("/api/products/count")
      .then(answer => answer.json())
      .then(data => {
        const count = data.count - 1;
        const getRandom = function (max: number) {
          return Math.floor(Math.random() * Math.floor(max));
        };
        const productItem = getRandom(count);
        fetch('/api/products?filter={"limit": 1, "offset": ' + productItem + "}")
          .then(answer => answer.json())
          .then(data => {
            this.setState({
              productData: data[0]
            });
          });
      });
  }

  render() {
    const price = this.state.productData.price;
    const newPrice = getNewPrice(price, this.state.productData.discount);
    const benefit = getBenefit(price, newPrice);

    return (
      <div className="ProductOfTheDayCard__wrapper">
        <div className="ProductOfTheDayCard__header">
          <div className="ProductOfTheDayCard__icon">ТОВАР ДНЯ</div>
        </div>
        <div className="ProductOfTheDayCard__main">
          <Link to={"/product/" + this.state.productData.id} className="productoftheday__image">
            <img src={this.state.productData.mainImageUrl} alt=""></img>
          </Link>
          <div className="ProductOfTheDayCard__main-info">
            <div className="ProductOfTheDayCard__main-infotextcontainer">
              <Link to={"/product/" + this.state.productData.id} className="ProductOfTheDayCardInfoText">
                {this.state.productData.name}
              </Link>
            </div>
            <div className="ProductOfTheDayCard__main-pricecontainer">
              {price === newPrice ? null : (
                <div className="ProductOfTheDayCard__benefit">
                  <div className="ProductOfTheDayPrevPrice">{priceFormatter(price)} грн.</div>
                  <div className="ProductOfTheDayCard__benefit-container">выгода {priceFormatter(benefit)} грн.</div>
                </div>
              )}
              {newPrice > 0 && (
                <div className="ProductOfTheDayCard__actual-pricecontainer">
                  <div className="ProductOfTheDayActualPrice">{priceFormatter(newPrice)} грн.</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="ProductOfTheDayCard__bottom">
          <ButtonBuy productId={this.state.productData.id} />
        </div>
      </div>
    );
  }
}

export default ProductOfTheDayCard;
