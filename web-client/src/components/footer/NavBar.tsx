import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./footer.scss";

class NavBar extends Component {
  render() {
    return (
      <div className="footer-navbar">
        <div className="navbar-column">
          <Link to={"/about"} className="footer-navbarItem">
            О компании
          </Link>
          <Link to={"/company-news"} className="footer-navbarItem">
            Новости
          </Link>
          <Link to={"/contacts-info"} className="footer-navbarItem">
            Контакты
          </Link>
          <Link to={"/supply-info"} className="footer-navbarItem">
            Поставщикам
          </Link>
          <Link to={"/vacancies"} className="footer-navbarItem">
            Вакансии
          </Link>
        </div>
        <div className="navbar-column">
          <Link to={"/payment"} className="footer-navbarItem">
            Оплата
          </Link>
          <Link to={"/credit-info"} className="footer-navbarItem">
            Кредит и оплата частями
          </Link>
          <Link to={"/delivery-info"} className="footer-navbarItem">
            Доставка и самовывоз
          </Link>
          <Link to={"/return-info"} className="footer-navbarItem">
            Возврат товара
          </Link>
          <Link to={"/warranty-info"} className="footer-navbarItem">
            Гарантия и сервис
          </Link>
        </div>
        <div className="navbar-column">
          <Link to={"/actions-info"} className="footer-navbarItem">
            Акции
          </Link>
          <Link to={"/articles-info"} className="footer-navbarItem">
            Статьи и обзоры
          </Link>
          <Link to={"/FAQ-info"} className="footer-navbarItem">
            Вопросы и ответы
          </Link>
        </div>
        <div className="navbar-column">
          <Link to={"/orders-info"} className="footer-navbarItem">
            Мои заказы
          </Link>
          <Link to={"/chosen-info"} className="footer-navbarItem">
            Выбранные товары
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
