import React, {Component} from "react";
import "./productFullCard.scss";
import {connect, ConnectedProps} from "react-redux";

import {ProductType} from "../../../api/@types";
import {productDefault} from "../../../api/defaults";
import {RootState} from "../../../store/root";
import {cartSetItemQty, cartAddNewItem} from "../../../store/cart/items";
import QuantityInput from "../../shoppingCart/cart/quantity-input/quantity-input";

type ButtonBuyProps = {productId: number};
type ButtonBuyState = {
  productData: ProductType;
};

const mapState = (state: RootState, props: ButtonBuyProps) => ({
  productCartQty: state.items.find(item => item.productId === props.productId)?.qty || 0
});

const mapDispatch = {
  cartSetItemQty,
  cartAddNewItem
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

class ButtonBuy extends Component<PropsFromRedux & ButtonBuyProps, ButtonBuyState> {
  static defaultProps = {
    productId: 0
  };

  state = {
    productData: productDefault
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
  };

  addItemToCart = () => {
    this.props.cartAddNewItem(
      Number(this.props.productId),
      this.state.productData.price,
      this.state.productData.discount
    );
  };

  changeItemQuantity = (productQuantity: number) => {
    this.props.cartSetItemQty(Number(this.props.productId), productQuantity);
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: ButtonBuyProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div className="button-buy_Wrapper">
        {this.props.productCartQty === 0 && (
          <div className="productFullCard__buyButton-container" onClick={this.addItemToCart}>
            <div className="productFullCard__buyButton">
              <div className="productFullCard__buyButton-text">КУПИТЬ</div>
            </div>
          </div>
        )}
        {this.props.productCartQty > 0 && (
          <div className="productFullCard__buyButton-container">
            <QuantityInput productQuantity={this.props.productCartQty} onQuantityChange={this.changeItemQuantity} />
          </div>
        )}
      </div>
    );
  }
}
export default connector(ButtonBuy);
