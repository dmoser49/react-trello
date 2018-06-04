import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import 'antd/dist/antd.css'

class BoardColumn extends Component {
  render() {
    return (
      <div className="laplane">
        <Header />
        <Card />
      </div>
    )
  }
}

export default BoardColumn;