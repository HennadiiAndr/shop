import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";

import {RootState} from "../../../../store/root";
import CheckoutProduct from "../checkout-product/checkout-product";
import "./styles.scss";

type CheckoutProductListProps = unknown;

const mapState = (state: RootState) => ({
  items: state.items
});

const connector = connect(mapState);

export type PropsFromRedux = ConnectedProps<typeof connector>;

class CheckoutProductList extends Component<PropsFromRedux & CheckoutProductListProps> {
  render() {
    return (
      <div className="checkoutProductList">
        {this.props.items
          .filter(item => item.qty > 0)
          .map(item => (
            <CheckoutProduct key={item.productId} productId={item.productId} qty={item.qty} price={item.price} />
          ))}
      </div>
    );
  }
}
export default connector(CheckoutProductList);
