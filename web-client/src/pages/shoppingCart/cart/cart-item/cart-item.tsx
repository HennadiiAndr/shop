import React, {Component} from "react";

import {ProductType} from "../../../../api/@types";
import {productDefault} from "../../../../api/defaults";
import {priceFormatter} from "../../../../utils/formatters";
import {getNewPrice} from "../../../../utils/counters";
import QuantityInput from "../quantity-input/quantity-input";
import "./styles.scss";

type CartItemProps = {
  productId: number;
  qty: number;
  cartSetItemQty: (productId: number, productQuantity: number) => void;
};
type CartItemState = {
  productData: ProductType;
};

export default class CartItem extends Component<CartItemProps, CartItemState> {
  static defaultProps = {
    productId: 0,
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

  changeItemQuantity = (productQuantity: number) => {
    this.props.cartSetItemQty(Number(this.props.productId), productQuantity);
  };

  render() {
    const prevPrice = this.state.productData.price;
    const newPrice = getNewPrice(prevPrice, this.state.productData.discount);

    return (
      <div className="cart_product-card">
        <div className="product_image">
          <img src={this.state.productData.mainImageUrl} alt=""></img>
        </div>
        <div className="product_info-wrapper">
          <div className="product_info-name">{this.state.productData.name}</div>
        </div>
        <QuantityInput productQuantity={this.props.qty} onQuantityChange={this.changeItemQuantity} />
        <div className="buy_price-wrapper">
          <div className="buy_price">
            <div className="buy_price-previousWrapper">
              {prevPrice === newPrice ? null : (
                <div className="buy_price-previous">{priceFormatter(prevPrice)} грн.</div>
              )}
            </div>
            {newPrice > 0 && <div className="buy_price-actual">{priceFormatter(newPrice)} грн.</div>}
          </div>
        </div>
      </div>
    );
  }
}
