import React, {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router";

import Footer from "../../components/footer";

import ProductFullCard from "./product-full-card/productFullCard";
import AlsoNeedBlock from "./also-need-block/AlsoNeedBlock";
import Header from "./../../components/header";
import FullCharacteristics from "./full-characteristics-block";
import "./styles.scss";

type ProductFullParams = {
  productId: string; // parameters will always be a string (even if they are numerical)
};
type ProductFullProps = RouteComponentProps<ProductFullParams>;

class ProductFull extends Component<ProductFullProps> {
  render() {
    return (
      <div className="product-full">
        <div className="mainStream">
          <Header />
          <ProductFullCard productId={this.props.match.params.productId} />
          <FullCharacteristics productId={this.props.match.params.productId} />
          <AlsoNeedBlock />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(ProductFull);
