import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import 'antd/dist/antd.css'

class BoardColumn extends Component {
  constructor(props) {
    super(props);
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
        />
        {this.props.cards.map((card, i) => this.renderCards(card.description, i))}
      </div>
    )
  }
}

export default BoardColumn;