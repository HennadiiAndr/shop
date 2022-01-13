import React, {Component} from "react";

import {productDefault} from "../../../../api/defaults";
import {getNewPrice} from "../../../../utils/counters";
import {priceFormatter} from "../../../../utils/formatters";

import "./styles.scss";

type CheckoutProductProps = {
  productId: number;
  price: number;
  qty: number;
};

class CheckoutProduct extends Component<CheckoutProductProps> {
  static defaultProps = {
    productId: 0,
    price: 0,
    qty: 0
  };

  state = {
    productData: productDefault
  };

  fetchData = () => {
    const url = "/api/products/" + this.props.productId;
    fetch(url)
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          productData: data
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const prevPrice = this.state.productData.price;
    const newPrice = getNewPrice(prevPrice, this.state.productData.discount);
    const totalProductSum = newPrice * this.props.qty;

    return (
      <div className="checkoutProduct">
        <div className="checkoutProduct_image">
          <img src={this.state.productData.mainImageUrl} alt=""></img>
        </div>
        <div className="checkoutProduct_info-wrapper">
          <div className="checkoutProduct_info-name">{this.state.productData.name}</div>
          <div className="checkoutProduct_info-priceWrapper">
            <div className="checkoutProduct_info-price">
              <div className="checkoutProduct_info-oldPriceWrapper">
                {prevPrice !== newPrice && (
                  <div className="checkoutProduct_info-oldPrice">{priceFormatter(prevPrice)} грн.</div>
                )}
              </div>
              <div className="checkoutProduct_actualPrice-container">
                <div className="checkoutProduct_actualPrice">{priceFormatter(newPrice)} грн.</div>
                <div className="checkoutProduct_actualQty">х {this.props.qty} шт.</div>
              </div>
            </div>
            <div className="checkoutProduct_totalSum">{priceFormatter(totalProductSum)} грн.</div>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckoutProduct;
