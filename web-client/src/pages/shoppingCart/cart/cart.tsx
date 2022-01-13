import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";
import {Link} from "react-router-dom";

import {RootState} from "../../../store/root";
import {cartSetItemQty, cartDeleteAllItems} from "../../../store/cart/items";
import CartItem from "../cart/cart-item/cart-item";
import {priceFormatter} from "../../../utils/formatters";

import AlsoNeedBlock from "./../../product-full/also-need-block/AlsoNeedBlock";
import "./styles.scss";

type CartProps = unknown;

const mapState = (state: RootState) => ({
  items: state.items
});

const mapDispatch = {
  cartSetItemQty,
  cartDeleteAllItems
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

class Cart extends Component<PropsFromRedux & CartProps> {
  render() {
    let totalQty = 0;
    for (let i = 0; i < this.props.items.length; i++) {
      totalQty = totalQty + this.props.items[i].qty;
    }
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

    if (totalQty === 0) {
      return (
        <div className="cart">
          <div className="cart_empty-wrapper">
            <div className="cart_empty-text">ВАША КОРЗИНА ПУСТА</div>
          </div>
          <Link to="/" className="continue_block-wrapper">
            <div className="continue_block-text">продолжить покупки</div>
          </Link>
        </div>
      );
    }
    return (
      <div className="cart">
        <div className="cart_header">
          <div className="cart_header-text">ВАША КОРЗИНА ТОВАРОВ</div>
          <div onClick={this.props.cartDeleteAllItems} className="cart_remove-all">
            удалить все товары
          </div>
        </div>
        <div className="cart_buy-block">
          {this.props.items
            .filter(item => item.qty > 0)
            .map(item => (
              <CartItem
                key={item.productId}
                productId={item.productId}
                qty={item.qty}
                cartSetItemQty={this.props.cartSetItemQty}
              />
            ))}
        </div>
        <div className="cart_checkout-wrapper">
          <div className="cart_continue-block">
            <Link to="/" className="continue_block-wrapper">
              <div className="continue_block-text">продолжить покупки</div>
            </Link>
          </div>
          <div className="cart_buy-block">
            <div className="cart_final-quantity">Итого товаров {totalQty}</div>
            <div className="cart_final-sum">на сумму {priceFormatter(totalSum)} грн.</div>
            <Link to="/checkout" className="cart_buy-button">
              <div className="buy_button-text">оформить покупку</div>
            </Link>
          </div>
        </div>
        <div className="cart_alsobuy-block">
          <AlsoNeedBlock />
        </div>
      </div>
    );
  }
}
export default connector(Cart);
