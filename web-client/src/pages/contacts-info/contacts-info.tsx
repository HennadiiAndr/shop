import React, {Component} from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import SideBarNavigation from "../delivery-info/sidebarNavigation";

import MailToUs from "./mail-to-us";
import MailToService from "./mail-to-service";
import EmailButton from "./email-button";

import "./styles.scss";

class ContactsInfo extends Component {
  state = {
    formDisplay: "",
    formDisplayServ: ""
  };

  setFormDisplay = () => {
    this.setState({
      formDisplay: "flex"
    });
  };

  setFormDisplayServ = () => {
    this.setState({
      formDisplayServ: "flex"
    });
  };

  closeForm = () => {
    this.setState({
      formDisplay: "none"
    });
  };

  closeFormServ = () => {
    this.setState({
      formDisplayServ: "none"
    });
  };

  render() {
    return (
      <div className="contacts-info">
        <MailToUs formDisplay={this.state.formDisplay} closeForm={this.closeForm} />
        <MailToService formDisplayServ={this.state.formDisplayServ} closeFormServ={this.closeFormServ} />
        <div className="mainStream">
          <Header />
          <div className="mainContainer">
            <div className="sidebar">
              <SideBarNavigation />
            </div>
            <div className="content">
              <div className="container">
                <div className="mainHeader">
                  <div className="header-title">Контакты</div>
                  <div className="header-text">Контакт-центр работает для Вас ежедневно с 07:30 до 22:30</div>
                  <div className="email-buttons">
                    <EmailButton text="написать нам сообщение" setFormDisplay={this.setFormDisplay} />
                    <EmailButton text="написать в отдел сервис" setFormDisplay={this.setFormDisplayServ} />
                  </div>
                  <div className="contacts-listContainer">
                    <div className="sidebar-list">
                      <div className="sidebar-listItem">0 800 10 27 27</div>
                      <div className="sidebar-listItem">044 242 90 27</div>
                      <div className="sidebar-listItem">053 170 47 27</div>
                      <div className="sidebar-listItem">info@dev.itismy.space</div>
                      <div className="sidebar-listItem">apteka@dev.itismy.space</div>
                      <div className="sidebar-listItem">beznal@dev.itismy.space</div>
                      <div className="sidebar-listItem">гарантия и сервис</div>
                    </div>
                    <div className="contacts-descriptionContainer">
                      <div className="descrption-item">
                        Звонки со стационарных телефонов, а также мобильных операторов Киевстар, Vodafone и lifecell
                        бесплатно по всей Украине
                      </div>
                      <div className="descrption-item">Звонки тарифицируются согласно тарифам Вашего оператора</div>
                      <div className="descrption-item">Звонки тарифицируются согласно тарифам Вашего оператора</div>
                      <div className="descrption-item">Электронная почта для Ваших предложений, жалоб и заявлений</div>
                      <div className="descrption-item">Электронная почта для заказов лекарств</div>
                      <div className="descrption-item">
                        Электронная почта для корпоративных клиентов, запрос на получение счетов
                      </div>
                      <div className="descrption-item">
                        Получение информации по сервисному обслуживанию и возврату товара
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ContactsInfo;
