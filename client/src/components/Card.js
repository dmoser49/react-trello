import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd';
import { Modal } from 'antd';
const confirm = Modal.confirm;

class Card extends Component {

  showDeleteConfirm() {
    let deleteCard = this.props.onDeleteCardClick;
    confirm({
      title: 'Are you sure delete this task?',
      // content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteCard()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  renderCard() {
    if (this.props.editing) {
      return (
        <Input.TextArea autosize="true" value={this.props.description} onChange={this.props.onCardChange} onPressEnter={this.props.onCardSubmit}/>
      )
    } else {
      return (
        <div>
          <div className="card-text" onClick={this.props.onCardClick}>
            {this.props.description}
          </div>
          <button className="delete-card" onClick={this.showDeleteConfirm.bind(this)}>
            x
          </button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-container">
          {this.renderCard()}
        </div>
      </div>
    )
  }
}

export default Card;