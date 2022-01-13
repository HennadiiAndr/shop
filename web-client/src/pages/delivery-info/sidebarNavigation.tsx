import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./styles.scss";

class SideBarNavigation extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to={"/about"} className="navItem">
          О компании
        </Link>
        <Link to={"/company-news"} className="navItem">
          Новости
        </Link>
        <Link to={"/contacts-info"} className="navItem">
          Контакты
        </Link>
        <Link to={"/vacancies"} className="navItem">
          Вакансии
        </Link>
        <Link to={"/supply-info"} className="navItem">
          Поставщикам
        </Link>
        <Link to={"/payment"} className="navItem">
          Оплата
        </Link>
        <Link to={"/credit-info"} className="navItem">
          Кредит
        </Link>
        <Link to={"/delivery-info"} className="navItem">
          Доставка и самовывоз
        </Link>
        <Link to={"/return-info"} className="navItem">
          Возврат товара
        </Link>
        <Link to={"/warranty-info"} className="navItem">
          Гарантия и сервис
        </Link>
        <div className="navItem">Подарочные карты</div>
        <Link to={"/articles-info"} className="navItem">
          Статьи и обзоры
        </Link>
      </div>
    );
  }
}

export default SideBarNavigation;
