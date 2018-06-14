import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd';
const { TextArea } = Input;

class Card extends Component {

  constructor(props) {
    super(props);
    console.log("card props: ", this.props)
  }

  renderCard() {
    if (this.props.editing) {
      return (
        <Input.TextArea size="small" value={this.props.description} onChange={this.props.onCardChange} onPressEnter={this.props.onCardSubmit}/>
      )
    } else {
      return (
        <div>
          {this.props.description}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-container" onClick={this.props.onCardClick}>
          {this.renderCard()}
        </div>
      </div>
    )
  }
}

export default Card;