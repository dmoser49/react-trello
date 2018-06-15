import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input} from 'antd';


class Header extends Component {

  renderHeader() {
    if (this.props.editing) {
      return (
        <form className="header-name" onSubmit={this.props.onHeaderSubmit}>
          <Input size="small" value={this.props.header} onChange={this.props.onHeaderChange} />
        </form>
      )
    } else {
      return (
        <div className="header-name">
          {this.props.header}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header-name" onClick={this.props.onHeaderClick}>
          {this.renderHeader()}
        </div>
        <button className="add-card" onClick={this.props.onAddCardClick}>
          +
        </button>
      </div>
    )
  }
}

export default Header;