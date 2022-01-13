import React, {Component} from "react";
import {Link} from "react-router-dom";

import {priceFormatter} from "../../utils/formatters";
import {getNewPrice} from "../../utils/counters";
import "./ProductCardCompact.scss";
import {ProductType, ProductPropertiesValuesType} from "../../api/@types";
import {CURRENCY} from "../../constants/variables";

import ProductProperty from "./ProductProperty";

type ProductCardCompactProps = {
  actualCompactCardPrice: string;
  prevCompactCardPrice: string;
  deliveryLocation: string;
  deliveryOption: string;
  compactCardImage: string;
  product: ProductType;
};
type ProductCardCompactState = {
  ProductPropertiesValue: Array<ProductPropertiesValuesType>;
};

class ProductCardCompact extends Component<ProductCardCompactProps, ProductCardCompactState> {
  static defaultProps = {
    actualCompactCardPrice: "",
    prevCompactCardPrice: "",
    deliveryLocation: "",
    deliveryOption: "",
    compactCardImage: ""
  };

  state = {
    ProductPropertiesValue: []
  };

  componentDidMount() {
    const url = "/api/products/" + this.props.product.id + '/product-properties?filter={"limit":4}';
    fetch(url)
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          ProductPropertiesValue: data
        });
      });
  }

  render() {
    const newPrice = getNewPrice(this.props.product.price, this.props.product.discount);
    const prevPrice = this.props.product.price;

    return (
      <div className="ProductCardCompact">
        <div className="ProductCardCompact__upper-wrapper">
          {this.props.product.discount === 0 ? null : (
            <div className="ProductCardCompactAction">
              <div className="ProductCardCompactAction-Text">АКЦИЯ - {this.props.product.discount} %</div>
            </div>
          )}
        </div>
        <Link to={"/product/" + this.props.product.id}>
          <div className="productMainImage">
            <img src={this.props.product.mainImageUrl} alt="" />
          </div>
        </Link>
        <div className="ProductCardCompactTitle">
          <Link to={"/product/" + this.props.product.id}>{this.props.product.name}</Link>
        </div>
        <div className="ProductCardCompact_Price-container">
          <div className="ProductCardCompact_ActPrice-container">
            <div className="ProductCardCompactActPrice">
              {priceFormatter(newPrice)} {CURRENCY}
            </div>
          </div>
          <div className="ProductCardCompact_PrevPrice-container">
            {prevPrice === newPrice ? null : (
              <div className="ProductCardCompact_PrevPrice-currency">
                {priceFormatter(prevPrice)} {CURRENCY}
              </div>
            )}
          </div>
        </div>
        <div className="ProductCardCompactFeatures_container">
          {this.state.ProductPropertiesValue.map((value: ProductPropertiesValuesType) => (
            <ProductProperty key={value.id} value={value} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductCardCompact;
