import React, {Component} from "react";
import "./productFullCard.scss";

import {ProductType, ProductPropertiesValuesType} from "../../../api/@types";
import {productDefault} from "../../../api/defaults";
import {priceFormatter} from "../../../utils/formatters";
import {getNewPrice} from "../../../utils/counters";
import {CURRENCY} from "../../../constants/variables";

import ProductFullCardProperties from "./productFullCardProperties";
import ButtonBuy from "./button-buy";

type ProductFullCardProps = {
  productId: string;
};
type ProductFullCardState = {
  productData: ProductType;
  ProductFullPropertiesValue: Array<ProductPropertiesValuesType>;
};

class ProductFullCard extends Component<ProductFullCardProps, ProductFullCardState> {
  static defaultProps = {
    productId: ""
  };

  state = {
    productData: productDefault,
    ProductFullPropertiesValue: []
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
    const url2 = "/api/products/" + this.props.productId + '/product-properties?filter={"limit":4}';
    fetch(url2)
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          ProductFullPropertiesValue: data
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: ProductFullCardProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchData();
    }
  }

  render() {
    const prevPrice = this.state.productData.price;
    const newPrice = getNewPrice(prevPrice, this.state.productData.discount);

    return (
      <div className="productFullCard">
        <div className="productFullCard__main">
          <div className="productFullCard__image-wrapper">
            <div className="productFullCard__action-container">
              {this.state.productData.discount > 0 && (
                <div className="ProductFullCard_action"> Акция -{this.state.productData.discount}%</div>
              )}
            </div>
            <div className="productFullCard__image">
              <img src={this.state.productData.mainImageUrl} alt="" />
            </div>
          </div>
          <div className="productFullCard__info-wrapper">
            <div className="temporaryInfoWrapper">
              <div className="productFullCard__presenceIcon-wrapper">
                <div className="productFullCard__presenceIcon">В наличии</div>
              </div>
              <div className="temporaryInfoContainer">
                <div className="productFullCard_name">{this.state.productData.name}</div>
                <div className="productFullCard__price-container">
                  {newPrice > 0 && (
                    <div className="productFullCard_actualPrice">
                      {priceFormatter(newPrice)} {CURRENCY}
                    </div>
                  )}
                  {prevPrice === newPrice ? null : (
                    <div className="productFullCard_oldPrice">
                      {priceFormatter(prevPrice)} {CURRENCY}
                    </div>
                  )}
                </div>
                <ButtonBuy productId={Number(this.props.productId)} />
                <div className="productFullCard__properties-list">
                  {this.state.ProductFullPropertiesValue.map((value: ProductPropertiesValuesType) => (
                    <ProductFullCardProperties key={value.id} value={value} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductFullCard;
