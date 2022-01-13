import React, {Component} from "react";
import "./styles.scss";

type PaginatorProps = {
  pageCount: number;
  currentPageNumber: number;
  onPageClick: (page: number) => void;
  productLimit: number;
  onPageLimitChange: (pageLimit: number) => void;
};

export default class Paginator extends Component<PaginatorProps> {
  static PaginatorProps = {
    pageCount: 0,
    currentPageNumber: 0
  };

  render() {
    const arr = Array.from({length: this.props.pageCount}, (v, i) => i);

    return (
      <div className="paginator">
        <div className="main">
          {arr.map((page: number) => (
            <div
              className={"pageKey" + (this.props.currentPageNumber === page ? " currentPage" : " ")}
              key={page}
              onClick={() => this.props.onPageClick(page)}>
              {page + 1}
            </div>
          ))}
        </div>
        <select
          className="pageQuantitySelect"
          value={this.props.productLimit}
          onChange={event => this.props.onPageLimitChange(parseInt(event.target.value))}>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={999}>999</option>
        </select>
      </div>
    );
  }
}
