import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import 'antd/dist/antd.css'

class BoardColumn extends Component {
  constructor(props) {
    super(props);
  }

  handleCardClick(i) {
    this.props.handleCardClick(i);
  }

  handleCardChange(event, i) {
    this.props.handleCardChange(event, i);
  }

  handleCardSubmit(event, i) {
    this.props.handleCardSubmit(event, i);
  }

  renderCards(card, i) {
    return (
      <Card
        key={i}
        description={card.description}
        editing={card.editing}
        onCardClick={() => {this.handleCardClick(i)}}
        onCardChange={(event) => {this.handleCardChange(event, i)}}
        onCardSubmit={(event) => {this.handleCardSubmit(event, i)}}
      />
    )
  }

  renderHeader() {
    return (
      <Header
        header={this.props.header}
        editing={this.props.editing}
        onHeaderClick={this.props.handleHeaderClick}
        onAddCardClick={this.props.handleAddCardClick}
        onHeaderChange={this.props.handleHeaderChange}
        onHeaderSubmit={this.props.handleHeaderSubmit}
      />
    )
  }

  render() {
    return (
      <div className="laplane">
        {this.renderHeader()}
        <div className="cards">
          {this.props.cards.map((card, i) => this.renderCards(card, i))}
        </div>
      </div>
    )
  }
}

export default BoardColumn;