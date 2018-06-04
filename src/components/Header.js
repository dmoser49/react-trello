import React, { Component } from 'react';
import 'antd/dist/antd.css'


class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-name">
          {this.props.title}
        </div>
        <a className="add-card" href="#">
          +
        </a>
      </div>
    )
  }
}

export default Header;