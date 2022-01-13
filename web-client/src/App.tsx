import React from "react";
import {Provider} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";

import ScrollTop from "../src/components/scroll-top";

import history from "./utils/history";
import Main from "./pages/main";
import ProductFull from "./pages/product-full";
import NotFound from "./pages/not-found";
import About from "./pages/about";
import Category from "./pages/category";
import ShoppingCart from "./pages/shoppingCart";
import Checkout from "./pages/checkout";
import DeliveryInfo from "./pages/delivery-info";
import ContactsInfo from "./pages/contacts-info";
import CompanyNews from "./pages/company-news";
import Vacancies from "./pages/vacancies";
import Payment from "./pages/payment";
import SupplyInfo from "./pages/supply-info";
import CreditInfo from "./pages/credit-info";
import ReturnInfo from "./pages/return";
import WarrantyInfo from "./pages/warranty-service-info";
import ActionsInfo from "./pages/actions-info";
import ArticlesInfo from "./pages/articles-info";
import FAQInfo from "./pages/FAQ-info";
import OrdersInfo from "./pages/orders-info";
import ChosenInfo from "./pages/chosen-info";
import "./App.scss";
import {store} from "./store";

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <div className="shop">
            <Router history={history}>
              <ScrollTop>
                <Switch>
                  <Route exact={true} path="/product/:productId" component={ProductFull} />
                  <Route exact={true} path="/about" component={About} />
                  <Route exact={true} path="/" component={Main} />
                  <Route exact={true} path="/category/:categoryId" component={Category} />
                  <Route exact={true} path="/cart" component={ShoppingCart} />
                  <Route exact={true} path="/checkout" component={Checkout} />
                  <Route exact={true} path="/delivery-info" component={DeliveryInfo} />
                  <Route exact={true} path="/contacts-info" component={ContactsInfo} />
                  <Route exact={true} path="/company-news" component={CompanyNews} />
                  <Route exact={true} path="/vacancies" component={Vacancies} />
                  <Route exact={true} path="/payment" component={Payment} />
                  <Route exact={true} path="/supply-info" component={SupplyInfo} />
                  <Route exact={true} path="/credit-info" component={CreditInfo} />
                  <Route exact={true} path="/return-info" component={ReturnInfo} />
                  <Route exact={true} path="/warranty-info" component={WarrantyInfo} />
                  <Route exact={true} path="/actions-info" component={ActionsInfo} />
                  <Route exact={true} path="/articles-info" component={ArticlesInfo} />
                  <Route exact={true} path="/FAQ-info" component={FAQInfo} />
                  <Route exact={true} path="/orders-info" component={OrdersInfo} />
                  <Route exact={true} path="/chosen-info" component={ChosenInfo} />
                  <Route component={NotFound} />
                </Switch>
              </ScrollTop>
            </Router>
          </div>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
