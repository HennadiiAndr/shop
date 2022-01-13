import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";

import {RootState} from "../../../store/root";
import {priceFormatter} from "../../../utils/formatters";
import "./styles.scss";

type CheckoutTotalSumProps = unknown;

const mapState = (state: RootState) => ({
  items: state.items
});

const connector = connect(mapState);

export type PropsFromRedux = ConnectedProps<typeof connector>;

class CheckoutTotalSum extends Component<PropsFromRedux & CheckoutTotalSumProps> {
  render() {
    let totalSum = 0;
    let totalSumPlus = 0;
    for (let i = 0; i < this.props.items.length; i++) {
      if (this.props.items[i].discount > 0) {
        totalSumPlus =
          (this.props.items[i].price - this.props.items[i].price * (this.props.items[i].discount / 100)) *
          this.props.items[i].qty;
      } else {
        totalSumPlus = this.props.items[i].price * this.props.items[i].qty;
      }
      totalSum = totalSum + totalSumPlus;
    }
    return (
      <div className="checkoutTotalSum">
        Всего к оплате
        <div className="checkoutProductList_total">{priceFormatter(totalSum)} грн.</div>
      </div>
    );
  }
}
export default connector(CheckoutTotalSum);
