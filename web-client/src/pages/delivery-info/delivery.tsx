import React, {Component} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import DeliveryButton from "./deliveryButton";
import DeliveryText from "./deliveryText";
import SideBarNavigation from "./sidebarNavigation";

import "./styles.scss";

type DeliveryInfoProps = {
  setText: any;
  setBgGray: any;
};

class DeliveryInfo extends Component<DeliveryInfoProps> {
  static defaultProps = {
    setText: "",
    setBgGray: ""
  };

  state = {
    text:
      "Вы можете бесплатно получить свой интернет заказ в одном из наших Центров выдачи заказов. О готовности интернет заказа к выдаче Вам будет сообщено с помощью SMS-сообщения, после согласования с оператором или подтверждения заказа в автоматическом режиме, при наличии достаточного количества товара в выбранном Центре выдачи заказов",
    bgcolorOne: "blue",
    bgcolorTwo: "white",
    bgcolorThree: "white",
    bgcolorFour: "white",
    bgcolorFive: "white",
    txtcolorOne: "white",
    txtcolorTwo: "black",
    txtcolorThree: "black",
    txtcolorFour: "black",
    txtcolorFive: "black",
    clickedOne: true,
    clickedTwo: false,
    clickedThree: false,
    clickedFour: false,
    clickedFive: false
  };

  setTextOne = () => {
    this.setState({
      text:
        "Вы можете бесплатно получить свой интернет заказ в одном из наших Центров выдачи заказов. О готовности интернет заказа к выдаче Вам будет сообщено с помощью SMS-сообщения, после согласования с оператором или подтверждения заказа в автоматическом режиме, при наличии достаточного количества товара в выбранном Центре выдачи заказов",
      bgcolorOne: "blue",
      bgcolorTwo: "white",
      bgcolorThree: "white",
      bgcolorFour: "white",
      bgcolorFive: "white",
      txtcolorOne: "white",
      txtcolorTwo: "black",
      txtcolorThree: "black",
      txtcolorFour: "black",
      txtcolorFive: "black",
      clickedOne: true,
      clickedTwo: false,
      clickedThree: false,
      clickedFour: false,
      clickedFive: false
    });
  };

  setTextTwo = () => {
    this.setState({
      text:
        "Вы можете получить свой интернет заказ в одном из отделений транспортных компаний «Новая почта», «Meest» или «Justin» и «Укрпочта». Графики работы отделений и адреса Вы найдете на сайтах novaposhta.ua, ua.meest.com, justin.ua и ukrposhta.ua. Стоимость доставки интернет заказа составляет от 24 до 1100 грн и зависит от веса, габаритных размеров товара и выбранной транспортной компании. Точную стоимость Вы можете увидеть, оформив интернет заказ и выбрав город, куда необходимо осуществить доставку. Доставка товара с габаритными размерами более 3 метров согласовывается индивидуально. Интернет заказ весом более 500 кг согласовываются в индивидуальном порядке. Время доставки интернет заказа занимает от 1 до 3 рабочих дней с момента отгрузки",
      bgcolorOne: "white",
      bgcolorTwo: "blue",
      bgcolorThree: "white",
      bgcolorFour: "white",
      bgcolorFive: "white",
      txtcolorOne: "black",
      txtcolorTwo: "white",
      txtcolorThree: "black",
      txtcolorFour: "black",
      txtcolorFive: "black",
      clickedOne: false,
      clickedTwo: true,
      clickedThree: false,
      clickedFour: false,
      clickedFive: false
    });
  };

  setTextThree = () => {
    this.setState({
      text:
        "Стоимость доставки интернет заказа зависит от веса и габаритных размеров товара. Точную стоимость Вы можете увидеть, оформив интернет заказ и выбрав город, куда необходимо осуществить доставку. Доставка товара с габаритными размерами более 3 метров согласовывается индивидуально. При оформлении доставки интернет заказ можно выбрать один из следующих временных интервалов: с 9:00 до 15:00 с 15:00 до 20:00. Услуга доступна ежедневно с 9:00 до 20:00 для товаров весом до 1500 кг при условии, что транспортные габариты не превышают (длина-3м, ширина-2м; высота-2м). Стоимость доставки каждого товара Вы можете узнать в карточке товара, а общую - в корзине",
      bgcolorOne: "white",
      bgcolorTwo: "white",
      bgcolorThree: "blue",
      bgcolorFour: "white",
      bgcolorFive: "white",
      txtcolorOne: "black",
      txtcolorTwo: "black",
      txtcolorThree: "white",
      txtcolorFour: "black",
      txtcolorFive: "black",
      clickedOne: false,
      clickedTwo: false,
      clickedThree: true,
      clickedFour: false,
      clickedFive: false
    });
  };

  setTextFour = () => {
    this.setState({
      text:
        "При оформлении доставки интернет заказа можно выбрать один из следующих временных интервалов: с 9:00 до 13:00, с 13:00 до 17:00 и с 17:00 до 21:00. Интернет заказ, подтвержденный оператором контакт центра до 10:00, доставляется в этот же день - с 17:00 до 21:00, при наличии товара в достаточном количестве на складе отгрузки. Стоимость доставки каждого товара Вы можете узнать в карточке товара, а общую (без подъема) - в корзине. Стоимость зависит от веса, стоимости товаров и пункта доставки",
      bgcolorOne: "white",
      bgcolorTwo: "white",
      bgcolorThree: "white",
      bgcolorFour: "blue",
      bgcolorFive: "white",
      txtcolorOne: "black",
      txtcolorTwo: "black",
      txtcolorThree: "black",
      txtcolorFour: "white",
      txtcolorFive: "black",
      clickedOne: false,
      clickedTwo: false,
      clickedThree: false,
      clickedFour: true,
      clickedFive: false
    });
  };

  setTextFive = () => {
    this.setState({
      text:
        "Качественная и быстрая доставка товаров по указанному адресу покупателей. Для перевозки и разгрузки крупногабаритных товаров покупатели могут воспользоваться услугой крана-манипулятора",
      bgcolorOne: "white",
      bgcolorTwo: "white",
      bgcolorThree: "white",
      bgcolorFour: "white",
      bgcolorFive: "blue",
      txtcolorOne: "black",
      txtcolorTwo: "black",
      txtcolorThree: "black",
      txtcolorFour: "black",
      txtcolorFive: "white",
      clickedOne: false,
      clickedTwo: false,
      clickedThree: false,
      clickedFour: false,
      clickedFive: true
    });
  };

  setBgGrayOne = () => {
    if (this.state.clickedOne === false) {
      this.setState({
        bgcolorOne: "gray"
      });
    }
  };

  setBgGrayTwo = () => {
    if (this.state.clickedTwo === false) {
      this.setState({
        bgcolorTwo: "gray"
      });
    }
  };

  setBgGrayThree = () => {
    if (this.state.clickedThree === false) {
      this.setState({
        bgcolorThree: "gray"
      });
    }
  };

  setBgGrayFour = () => {
    if (this.state.clickedFour === false) {
      this.setState({
        bgcolorFour: "gray"
      });
    }
  };

  setBgGrayFive = () => {
    if (this.state.clickedFive === false) {
      this.setState({
        bgcolorFive: "gray"
      });
    }
  };

  setBgWhiteOne = () => {
    if (this.state.clickedOne === false) {
      this.setState({
        bgcolorOne: "white"
      });
    }
  };

  setBgWhiteTwo = () => {
    if (this.state.clickedTwo === false) {
      this.setState({
        bgcolorTwo: "white"
      });
    }
  };

  setBgWhiteThree = () => {
    if (this.state.clickedThree === false) {
      this.setState({
        bgcolorThree: "white"
      });
    }
  };

  setBgWhiteFour = () => {
    if (this.state.clickedFour === false) {
      this.setState({
        bgcolorFour: "white"
      });
    }
  };

  setBgWhiteFive = () => {
    if (this.state.clickedFive === false) {
      this.setState({
        bgcolorFive: "white"
      });
    }
  };

  render() {
    const text = this.state.text;

    return (
      <div className="payment-delivery">
        <div className="mainstream">
          <Header />
          <div className="mainContainer">
            <div className="sidebar">
              <SideBarNavigation />
            </div>
            <div className="content">
              <div className="container">
                <div className="mainHeader">
                  <div className="header-title">Доставка товара</div>
                  <div className="header-text">Для Вашего удобства есть несколько способов получения покупки</div>
                  <div className="button-block">
                    <DeliveryButton
                      text="Самовывоз интернет заказов"
                      setBgGray={this.setBgGrayOne}
                      setBgWhite={this.setBgWhiteOne}
                      setText={this.setTextOne}
                      bgcolor={this.state.bgcolorOne}
                      txtcolor={this.state.txtcolorOne}
                    />
                    <DeliveryButton
                      text="Самовывоз интернет заказов из отделений «Нова почта», «Meest», «Justin» и «Укрпочта»"
                      setBgGray={this.setBgGrayTwo}
                      setBgWhite={this.setBgWhiteTwo}
                      setText={this.setTextTwo}
                      bgcolor={this.state.bgcolorTwo}
                      txtcolor={this.state.txtcolorTwo}
                    />
                    <DeliveryButton
                      text="Адресная доставка интернет заказов по Украине"
                      setBgGray={this.setBgGrayThree}
                      setBgWhite={this.setBgWhiteThree}
                      setText={this.setTextThree}
                      bgcolor={this.state.bgcolorThree}
                      txtcolor={this.state.txtcolorThree}
                    />
                    <DeliveryButton
                      text="Адресная доставка интернет заказов по Киеву"
                      setBgGray={this.setBgGrayFour}
                      setBgWhite={this.setBgWhiteFour}
                      setText={this.setTextFour}
                      bgcolor={this.state.bgcolorFour}
                      txtcolor={this.state.txtcolorFour}
                    />
                    <DeliveryButton
                      text="Услуга доставки товара"
                      setBgGray={this.setBgGrayFive}
                      setBgWhite={this.setBgWhiteFive}
                      setText={this.setTextFive}
                      bgcolor={this.state.bgcolorFive}
                      txtcolor={this.state.txtcolorFive}
                    />
                  </div>
                </div>
                <DeliveryText text={text} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default DeliveryInfo;
