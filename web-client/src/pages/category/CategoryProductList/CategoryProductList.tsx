import React, {Component} from "react";

import "./styles.scss";
import ProductCardCompact from "../../../components/product-card-compact";

import Paginator from "./Paginator/";
import {headerCatalogCategoryType, ProductType} from "./../../../api/@types";

type CategoryProductListProps = {
  categoryId: string;
};

type CategoryProductListState = {
  categoryData?: headerCatalogCategoryType;
  productData?: Array<ProductType>;
  productCount: number;
  productLimit: number;
  currentPage: number;
};

class CategoryProductList extends Component<CategoryProductListProps, CategoryProductListState> {
  static defaultProps = {
    categoryId: " "
  };

  state = {
    categoryData: {
      id: 1,
      name: "",
      mainImageUrl: "",
      parentId: 0
    },
    productData: [],
    productCount: 0,
    productLimit: 16,
    currentPage: 0
  };

  fetchData = () => {
    const url = "/api/categories/" + this.props.categoryId;
    fetch(url)
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          categoryData: data
        });
      });
    //const url2 = '/api/products?filter={"where":{"categoryId":'+ this.props.categoryId + '}}';
    const url2 =
      '/api/products?filter={"where":{"categoryId":' +
      this.props.categoryId +
      '}, "limit": ' +
      this.state.productLimit +
      ', "offset": ' +
      this.state.productLimit * this.state.currentPage +
      "}";
    fetch(url2)
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          productData: data
        });
      });
    const url3 = '/api/products/count?where={"categoryId":' + this.props.categoryId + "}";
    fetch(url3)
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          productCount: data.count
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: CategoryProductListProps, prevState: CategoryProductListState) {
    if (prevProps.categoryId !== this.props.categoryId) {
      this.setState({
        currentPage: 0
      });
      this.fetchData();
    } else if (prevState.currentPage !== this.state.currentPage) {
      this.fetchData();
    } else if (prevState.productLimit !== this.state.productLimit) {
      this.setState({
        currentPage: 0
      });
      this.fetchData();
    }
  }

  render() {
    if (!this.state.categoryData) {
      return null;
    }
    const productQuantity = this.state.productCount;

    return (
      <div className="productListWrapper">
        <div className="productListHeader">
          <div className="categoryLogo">
            <img src={this.state.categoryData.mainImageUrl} alt=""></img>
          </div>
          <div className="categoryName">{this.state.categoryData.name}</div>
        </div>
        <div className="productListMain">
          {this.state.productData.map((product: ProductType) => (
            <ProductCardCompact key={product.id} product={product} />
          ))}
          <Paginator
            pageCount={Math.ceil(productQuantity / this.state.productLimit)}
            currentPageNumber={this.state.currentPage}
            onPageClick={(page: number) =>
              this.setState({
                currentPage: page
              })
            }
            productLimit={this.state.productLimit}
            onPageLimitChange={(pageLimit: number) =>
              this.setState({
                productLimit: pageLimit
              })
            }
          />
        </div>
      </div>
    );
  }
}

export default CategoryProductList;
