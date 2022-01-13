import React, {Component} from "react";

import "./Fullcharacteristics.scss";
import {ProductPropertiesValuesType, ProductValuesType, ProductPropertyType} from "./../../../api/@types";

type FullListPropertiesProps = {
  value: ProductPropertiesValuesType;
};
type FullListPropertiesState = {
  value: ProductValuesType;
  property: ProductPropertyType;
};

class FullListProperties extends Component<FullListPropertiesProps, FullListPropertiesState> {
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
      <div className="listItem_container">
        <div className="property_name">{this.state.property.name}:</div>
        <div className="value__name">{this.state.value.value}</div>
      </div>
    );
  }
}
export default FullListProperties;
