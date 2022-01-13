import React, {Component} from "react";

import "./productFullCard.scss";
import {ProductPropertiesValuesType, ProductValuesType, ProductPropertyType} from "./../../../api/@types";

type ProductFullCardPropertiesProps = {
  value: ProductPropertiesValuesType;
};
type ProductFullCardPropertiesState = {
  value: ProductValuesType;
  property: ProductPropertyType;
};

class ProductFullCardProperties extends Component<ProductFullCardPropertiesProps, ProductFullCardPropertiesState> {
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
          .then(data => {
            this.setState({
              property: data
            });
          });
      });
  }

  static defaultProps = {
    value: []
  };

  state = {
    value: {
      id: 1,
      value: "",
      propertyId: 1
    },
    property: {
      id: 1,
      name: ""
    }
  };

  render() {
    return (
      <div className="productfullcard__properties-container">
        <div className="productfullcard__properties">{this.state.property.name}:</div>
        <div className="productfullcard__values">{this.state.value.value}</div>
      </div>
    );
  }
}
export default ProductFullCardProperties;
