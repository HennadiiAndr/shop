import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";

import "./styles.scss";
import {checkoutSetFirstName} from "../../store/checkout/first-name";
import {checkoutSetLastName} from "../../store/checkout/last-name";
import {checkoutSetPhoneNumber} from "../../store/checkout/phone-number";
import {checkoutSetEMail} from "../../store/checkout/e-mail";
import {RootState} from "../../store/root";

const mapState = (state: RootState) => ({
  firstName: state.checkout.firstName,
  lastName: state.checkout.lastName,
  phoneNumber: state.checkout.phoneNumber,
  eMail: state.checkout.eMail
});

const mapDispatch = {
  checkoutSetFirstName,
  checkoutSetLastName,
  checkoutSetPhoneNumber,
  checkoutSetEMail
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

type MailToUsProps = {
  formDisplay: string;
  closeForm: any;
};

class MailToUs extends Component<MailToUsProps & PropsFromRedux> {
  static defaultProps = {
    formDisplay: "",
    closeForm: ""
  };

  onClickHandler = () => {
    this.props.closeForm();
  };

  render() {
    return (
      <div className="mail-formContainer" style={{display: this.props.formDisplay}}>
        <div className="gray-screen" onClick={this.onClickHandler}></div>
        <div className="mail-form">
          <div className="mail-formHeader">
            <div className="mail-formTitle">Обратная связь</div>
            <div className="mail-formText">Жалобы, предложения, пожелания</div>
          </div>
          <div className="form-input-container">
            <select className="input-type">
              <option>вопрос по интернет магазину</option>
              <option>вопрос по оффлайн магазину</option>
            </select>
            <input placeholder="имя"></input>
            <input
              placeholder="телефон"
              onChange={event => {
                this.props.checkoutSetPhoneNumber(event.target.value);
              }}></input>
            <input placeholder="номер заказа"></input>
            <input placeholder="e-mail"></input>
            <input placeholder="магазин"></input>
            <input placeholder="коментарий" className="comment"></input>
            <button>Послать</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connector(MailToUs);
