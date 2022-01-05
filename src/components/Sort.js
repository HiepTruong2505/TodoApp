import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
export default class Sort extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  };
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sắp xếp
            <span className="fa fa-caret-square-o-down ml-2"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ margin: 0 }}>
            <Dropdown.Item onClick={() => this.onClick("name", -1)}>
              <span className="fas fa-sort-alpha-down mr-2"> </span>
              Tên A-Z
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.onClick("name", 1)}>
              <i className="fas fa-sort-alpha-up mr-2"></i>
              Tên Z-A
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.onClick("status", 1)}>
              Trạng thái kích hoạt
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.onClick("status", -1)}>
              Trạng thái ẩn
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
