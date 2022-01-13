import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";

import {RootState} from "../../../../../../src/store/root";
import "./styles.scss";
import EmptyBasket from "../../../../../icons/EmptyBasket";

type CartIconProps = unknown;

const mapState = (state: RootState) => ({
  items: state.items
});

const connector = connect(mapState);

export type PropsFromRedux = ConnectedProps<typeof connector>;

class CartIcon extends Component<PropsFromRedux & CartIconProps> {
  render() {
    let totalQty = 0;
    for (let i = 0; i < this.props.items.length; i++) {
      totalQty = totalQty + this.props.items[i].qty;
    }
    return (
      <Link to={"/cart"} className="cartIcon">
        <EmptyBasket />
        {totalQty === 0 && <div className="cartIcon_productQuantity-displayNone"></div>}
        {totalQty > 0 && <div className="cartIcon_productQuantity-wrapper">{totalQty}</div>}
      </Link>
    );
  }
}
export default connector(CartIcon);
