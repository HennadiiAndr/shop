import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer/Footer";
import ProductOfTheDay from "../../components/product-of-the-day/ProductOfTheDay";
import ProductCardCompact from "../../components/product-card-compact";
import "./Main.scss";
import {ProductType} from "../../api/@types";

type mainState = {
  productData: Array<ProductType>;
};

class Main extends React.Component<mainState> {
  state = {
    productData: []
  };

  componentDidMount() {
    fetch("/api/products/count")
      .then(answer => answer.json())
      .then(data => {
        const count = data.count - 4;
        const getRandom = function (max: number) {
          return Math.floor(Math.random() * Math.floor(max));
        };
        const productItem = getRandom(count);
        fetch('/api/products?filter={"limit": 4, "offset": ' + productItem + "}")
          .then(answer => answer.json())
          .then(data => {
            this.setState({
              productData: data
            });
          });
      });
  }

  render() {
    const deliveryLocation = "г. Николаев, Остапа Вишни 121";

    return (
      <div className="page-main">
        <div className="mainstream">
          <Header deliveryLocation={deliveryLocation} />
          <div className="maincontent">
            <div className="mainsection">
              <ProductOfTheDay />
              <div className="productCards_container">
                {this.state.productData.map((product: ProductType) => (
                  <ProductCardCompact key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
