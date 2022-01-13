import React, {Component} from "react";

import {ProductPropertiesValuesType, ProductValuesType, ProductPropertyType} from "./../../api/@types";

import "./ProductCardCompact.scss";

type ProductPropertyProps = {
  value: ProductPropertiesValuesType;
};
type ProductPropertyState = {
  value?: ProductValuesType;
  property?: ProductPropertyType;
};

class ProductProperty extends Component<ProductPropertyProps, ProductPropertyState> {
  componentDidMount() {
    const url = "/api/property-values/" + this.props.value.propertyValueId;
    fetch(url)
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          value: data
        });
        const url2 = "/api/properties/" + data.propertyId;
        fetch(url2, {
          headers: {
            acception: "application/json"
          }
        })
          .then(answer => answer.json())
          .then((data: ProductPropertyType) => {
            this.setState({
              property: data
            });
          });
      });
  }

  static defaultProps = {
    value: []
  };

  state: ProductPropertyState = {
    value: undefined,
    property: undefined
  };

  render() {
    if (!this.state.property || !this.state.value) {
      return null;
    }
    return (
      <div className="productProperties">
        <div className="productProperty">{this.state.property?.name}:</div>
        <div className="productPropertyName">{this.state.value?.value}</div>
      </div>
    );
  }
}
export default ProductProperty;
