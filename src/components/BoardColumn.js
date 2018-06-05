import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import 'antd/dist/antd.css'

class BoardColumn extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  renderCards(description, i) {
    return (
      <Card
        key={i}
        description={description}
      />
    )
  }

  render() {
    return (
      <div className="laplane">
        <Header
          title={this.props.title}
          editing={this.props.editing}
          onHeaderClick={this.props.onHeaderClick}
          onHeaderChange={this.props.onHeaderChange}
          onHeaderSubmit={this.props.onHeaderSubmit}
        />
        <div className="cards">
          {this.props.cards.map((card, i) => this.renderCards(card.description, i))}
        </div>
      </div>
    )
  }
}

export default BoardColumn;