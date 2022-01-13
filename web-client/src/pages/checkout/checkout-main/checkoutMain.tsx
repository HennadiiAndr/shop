import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";

import CheckoutTotalSum from "../checkout-total-sum/checkout-total-sum";

import {checkoutSetComment} from "./../../../store/checkout/checkout-comment";
import {RootState} from "./../../../store/root";
import CheckoutNameInput from "./checkout-name-input/checkout-name-input";
import CheckoutProductList from "./checkout-product-list";

import "./styles.scss";

const mapState = (state: RootState) => ({
  comment: state.checkout.comment
});

const mapDispatch = {
  checkoutSetComment
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

class CheckoutMain extends Component<PropsFromRedux> {
  render() {
    return (
      <div className="main">
        <div className="checkoutMain_header">
          <div className="checkoutMain_header-title">Оформление заказа</div>
        </div>
        <div className="checkoutMain_mainContainer">
          <div className="checkoutNameInput_wrapper">
            <div className="checkoutNameInput_title">
              <div className="authorize">авторизуйтесь</div>
              <div className="checkoutNameInput_title-text">или введите контактные данные</div>
            </div>
            <CheckoutNameInput />
          </div>
          <div className="checkoutMain_productList-wrapper">
            <div className="checkoutProductList_title">
              <div className="checkoutProductList_title-text">товары в заказе</div>
              <div className="checkoutProductList_redo">редактировать</div>
            </div>
            <CheckoutProductList />
            <div className="checkoutProductList_comments-wrapper">
              <input
                onChange={event => {
                  this.props.checkoutSetComment(event.target.value);
                }}
                value={this.props.comment}
                className="checkoutProductList_comments"
                placeholder="Оставить комментарий к этому заказу"
              />
            </div>
            <CheckoutTotalSum />
            <div className="checkoutProductList_buyButton">купить</div>
          </div>
        </div>
        <div className="checkoutProductList_foot"></div>
      </div>
    );
  }
}
export default connector(CheckoutMain);
