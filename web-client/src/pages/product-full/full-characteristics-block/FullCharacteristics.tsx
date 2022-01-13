import React, {Component} from "react";

import "./Fullcharacteristics.scss";
import {ProductType, ProductPropertiesValuesType} from "./../../../api/@types";
import FullListProperties from "./FullListProperties";
import Yourproductbanner from "./../yourproductbanner/yourproductbanner";
import {productDefault} from "./../../../api/defaults";

type FullCharacteristicsProps = {
  productId: string;
};
type FullCharacteristicsState = {
  productData: ProductType;
  ProductFullPropertiesValue: Array<ProductPropertiesValuesType>;
};

class FullCharacteristics extends Component<FullCharacteristicsProps, FullCharacteristicsState> {
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
    const url2 = "/api/products/" + this.props.productId + "/product-properties";
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

  componentDidUpdate(prevProps: FullCharacteristicsProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div className="FullCharacteristics__listContainer">
        <div className="FullCharacteristics__list-titleWrapper">
          <div className="title-text">Основные характеристики {this.state.productData.name}</div>
        </div>
        <div className="list-wrapper">
          <div className="FullCharacteristics__list">
            {this.state.ProductFullPropertiesValue.map((value: ProductPropertiesValuesType) => (
              <FullListProperties key={value.id} value={value} />
            ))}
          </div>
          <div className="fullproduct__bannerwrapper">
            <Yourproductbanner productId={this.props.productId} />
          </div>
        </div>
      </div>
    );
  }
}
export default FullCharacteristics;
