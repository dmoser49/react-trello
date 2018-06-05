import React, { Component } from 'react';
import 'antd/dist/antd.css'


class Header extends Component {

  renderHeader() {
    if (this.props.editing) {
      return (
        <form className="header-name" onSubmit={this.props.onHeaderSubmit} onBlur={console.log('blurrr')} onFocus={console.log('focus!!!')}>
          <input type="text" value={this.props.title} onChange={this.props.onHeaderChange} onBlur={console.log('blur')} onFocus={console.log('focus!!!')}/>
        </form>
      )
    } else {
      return (
        <div className="header-name">
          {this.props.title}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="header" onClick={this.props.onHeaderClick}>
        <div className="header-name">
          {this.renderHeader()}
        </div>
        <button className="add-card">
          +
        </button>
      </div>
    )
  }
}

export default Header;