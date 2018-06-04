import React, { Component } from 'react';
import 'antd/dist/antd.css'

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-container">
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Card;