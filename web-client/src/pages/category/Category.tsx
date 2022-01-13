import React, {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router";

import CategoryProductList from "./CategoryProductList/CategoryProductList";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import "./styles.scss";

type CategoryParams = {
  categoryId: string;
};

type CategoryProps = RouteComponentProps<CategoryParams>;

class Category extends Component<CategoryProps> {
  render() {
    return (
      <div className="Category">
        <div className="mainStream">
          <Header />
          <CategoryProductList categoryId={this.props.match.params.categoryId} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
