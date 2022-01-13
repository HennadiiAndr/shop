import React, {Component} from "react";

import "./styles.scss";

type MailToServiceProps = {
  formDisplayServ: string;
  closeFormServ: any;
};

class MailToService extends Component<MailToServiceProps> {
  static defaultProps = {
    formDisplayServ: "",
    closeFormServ: ""
  };

  onClickHandler = () => {
    this.props.closeFormServ();
  };

  render() {
    return (
      <div className="mail-formContainer-serv" style={{display: this.props.formDisplayServ}}>
        <div className="gray-screen-serv" onClick={this.onClickHandler}></div>
        <div className="mail-form">
          <div className="mail-formHeader">
            <div className="mail-formTitle">Оставить обращение в отдел рекламаций</div>
            <div className="mail-formText">
              Обращение: возврат товара, по качеству/количеству, гарантийному обслуживанию
            </div>
          </div>
          <div className="form-input-container">
            <select className="input-type">
              <option>вопрос по интернет магазину</option>
              <option>вопрос по оффлайн магазину</option>
            </select>
            <input placeholder="имя"></input>
            <input placeholder="телефон"></input>
            <input placeholder="e-mail"></input>
            <input placeholder="номер заказа"></input>
            <input placeholder="наименование/код товара"></input>
            <input placeholder="количество"></input>
            <input placeholder="коментарий" className="comment"></input>
            <button>Послать</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MailToService;
