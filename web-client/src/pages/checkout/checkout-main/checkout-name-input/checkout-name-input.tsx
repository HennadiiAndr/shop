import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";

import "./styles.scss";
import {checkoutSetFirstName} from "../../../../store/checkout/first-name";
import {checkoutSetLastName} from "../../../../store/checkout/last-name";
import {checkoutSetPhoneNumber} from "../../../../store/checkout/phone-number";
import {checkoutSetEMail} from "../../../../store/checkout/e-mail";
import {checkoutSetDeliveryDestination} from "../../../../store/checkout/delivery-destination";
import {checkoutSetDeliveryWay} from "../../../../store/checkout/delivery-way";
import {checkoutSetPayWay} from "../../../../store/checkout/pay-way";
import {RootState} from "../../../../store/root";

const mapState = (state: RootState) => ({
  firstName: state.checkout.firstName,
  lastName: state.checkout.lastName,
  phoneNumber: state.checkout.phoneNumber,
  eMail: state.checkout.eMail,
  deliveryDestination: state.checkout.deliveryDestination,
  deliveryWay: state.checkout.deliveryWay,
  payWay: state.checkout.payWay
});

const mapDispatch = {
  checkoutSetFirstName,
  checkoutSetLastName,
  checkoutSetPhoneNumber,
  checkoutSetEMail,
  checkoutSetDeliveryDestination,
  checkoutSetDeliveryWay,
  checkoutSetPayWay
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

class CheckoutNameInput extends Component<PropsFromRedux> {
  render() {
    return (
      <div className="checkoutNameInput">
        <div className="checkoutMain_phone-wrapper">
          <input
            onChange={event => {
              this.props.checkoutSetPhoneNumber(event.target.value);
            }}
            value={this.props.phoneNumber}
            className="checkoutMain_phone"
            placeholder="Введите номер телефона"
          />
        </div>
        <div className="checkoutMain_name">
          <div className="name_wrapper">
            <input
              onChange={event => {
                this.props.checkoutSetFirstName(event.target.value);
              }}
              value={this.props.firstName}
              className="name"
              placeholder="Введите Ваше имя"
            />
          </div>
          <div className="name_wrapper">
            <input
              onChange={event => {
                this.props.checkoutSetLastName(event.target.value);
              }}
              value={this.props.lastName}
              className="name"
              placeholder="Введите Вашу фамилию"
            />
          </div>
        </div>
        <div className="email_wrapper">
          <input
            onChange={event => {
              this.props.checkoutSetEMail(event.target.value);
            }}
            value={this.props.eMail}
            className="email"
            placeholder="Введите Ваш e-mail"
          />
        </div>
        <select
          onChange={event => {
            this.props.checkoutSetDeliveryDestination(event.target.value);
          }}
          value={this.props.deliveryDestination}
          className="delivery">
          <option value="">выберите город</option>
          <option value="048">Одесса</option>
          <option value="051">Николаев</option>
          <option value="057">Днепр</option>
        </select>
        <select
          onChange={event => {
            this.props.checkoutSetDeliveryWay(event.target.value);
          }}
          value={this.props.deliveryWay}
          className="pick-up">
          <option value="">выберите способ доставки</option>
          <option value="post">почтовым оператором</option>
          <option value="curier">курером</option>
          <option value="self">самовывоз</option>
        </select>
        <select
          onChange={event => {
            this.props.checkoutSetPayWay(event.target.value);
          }}
          value={this.props.payWay}
          className="pay-up">
          <option value="">способ оплаты</option>
          <option value="1st">наложенный платеж</option>
          <option value="card">банковская карта</option>
        </select>
      </div>
    );
  }
}
export default connector(CheckoutNameInput);
