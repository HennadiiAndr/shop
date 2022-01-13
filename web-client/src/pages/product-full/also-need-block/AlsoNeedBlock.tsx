import React, {Component} from "react";

import {ProductType} from "./../../../api/@types";
import ProductCardCompact from "./../../../components/product-card-compact/ProductCardCompact";
import "./AlsoNeedBlock.scss";

type AlsoNeedBlockState = {
  listForProductCardCompact: Array<ProductType>;
};

class AlsoNeedBlock extends Component<unknown, AlsoNeedBlockState> {
  state = {
    listForProductCardCompact: []
  };

  componentDidMount() {
    fetch('/api/products?filter={"limit":4}')
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          listForProductCardCompact: data
        });
      });
  }

  render() {
    const deliveryLocation = "г. Николаев, Остапа Вишни 121";

    return (
      <div className="mainWrapper">
        <div className="headerWrapper">
          <div className="text">Также покупают</div>
        </div>
        <div className="compactcards__Wrapper">
          {this.state.listForProductCardCompact.map((product: ProductType) => (
            <ProductCardCompact
              key={product.id}
              product={product}
              deliveryLocation={deliveryLocation}
              deliveryOption="Есть самовывоз из"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default AlsoNeedBlock;
