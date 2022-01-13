import React, {Component} from "react";

import "./yourproductbanner.scss";
import {ProductType} from "../../../api/@types";
import {productDefault} from "../../../api/defaults";
import {priceFormatter} from "../../../utils/formatters";
import {getNewPrice} from "../../../utils/counters";
import {CURRENCY} from "../../../constants/variables";
import ButtonBuy from "../product-full-card/button-buy";

type YourproductbannerProps = {
  productId: string;
};
type YourproductbannerState = {
  productData: ProductType;
};

class Yourproductbanner extends Component<YourproductbannerProps, YourproductbannerState> {
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

  componentDidUpdate(prevProps: YourproductbannerProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchData();
    }
  }

  render() {
    const prevPrice = this.state.productData.price;
    const newPrice = getNewPrice(prevPrice, this.state.productData.discount);

    return (
      <div className="yourproduct">
        <div className="yourproduct__image">
          <img src={this.state.productData.mainImageUrl} alt=""></img>
        </div>
        <div className="yourproduct__title">{this.state.productData.name}</div>
        {newPrice > 0 && (
          <div className="yourproduct__price">
            {priceFormatter(newPrice)} {CURRENCY}
          </div>
        )}
        <ButtonBuy productId={Number(this.props.productId)} />
      </div>
    );
  }
}
export default Yourproductbanner;
