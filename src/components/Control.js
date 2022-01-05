import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";
export default class Control extends Component {
  render() {
    return (
      <div>
        <div className="row mt-3">
          <Search onSearch={this.props.onSearch} />
          <Sort
            onSort={this.props.onSort}
            sortBy={this.props.sortBy}
            sortValue={this.props.sortValue}
          />
        </div>
      </div>
    );
  }
}
