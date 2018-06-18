import React, { Component } from 'react';
import { Row, Col } from 'antd';
import BoardColumn from './BoardColumn';
import axios from 'axios';
import 'antd/dist/antd.css';

class BoardRow extends Component {

  constructor(props) {
    super(props);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleHeaderSubmit = this.handleHeaderSubmit.bind(this);

    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleCardSubmit = this.handleCardSubmit.bind(this);

    this.state = this.props.lapLanes;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate nextProps: ', nextProps)
    console.log('componentWillUpdate nextState: ', nextState)
    this.updateData(nextProps);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({lapLanes: nextProps.lapLanes})
  }

  updateData = async (nextProps) => {
    console.log("NEXT PROPS: ", nextProps)
    const res = await axios.post('/api/updateBoard', {lapLanes: nextProps.lapLanes});
  }

  // handle header events
  handleHeaderClick(i) {
    const lapLanes = this.state.lapLanes.slice();
    if (!lapLanes[i].header.editing) {
      this.updateHeaderEditingValue(i)
    }
  }

  handleHeaderChange(event, i) {
    const lapLanes = this.state.lapLanes.slice();
    lapLanes[i].header.name = event.target.value;
    this.setState({
      lapLanes: lapLanes
    })
  }

  handleHeaderSubmit(event, i) {
    // console.log('test')
    event.preventDefault();
    this.updateHeaderEditingValue(i)
  }

  handleAddCardClick(i) {
    // console.log("handleAddCardClick: ", i)
    const lapLanes = this.state.lapLanes.slice();
    lapLanes[i].cards.push({description: '', editing: true})
    this.setState({
      lapLanes: lapLanes
    })
  }

  updateHeaderEditingValue(i) {
    const lapLanes = this.state.lapLanes.slice();
    lapLanes[i].header.editing = !lapLanes[i].header.editing;
    this.setState({
      lapLanes: lapLanes
    })
  }

  // handle card events
  handleCardClick(i, cardIndex) {
    const lapLanes = this.state.lapLanes.slice();
    if (!lapLanes[i].cards[cardIndex].editing) {
      this.updateCardEditingValue(i, cardIndex)
    }
  }

  handleCardChange(event, i, cardIndex) {
    // console.log('handle card change')
    const lapLanes = this.state.lapLanes.slice();
    // console.log(event.target.value)
    // console.log(lapLanes[i].cards[cardIndex])
    lapLanes[i].cards[cardIndex].description = event.target.value;
    this.setState({
      lapLanes: lapLanes
    })
  }

  handleDeleteCardClick(i, cardIndex) {
    console.log("handleDeleteCardClick: ", i)
    console.log("cardIndex: ", cardIndex)
    const lapLanes = this.state.lapLanes.slice();
    lapLanes[i].cards.splice(cardIndex, 1)
    this.setState({
      lapLanes: lapLanes
    })
  }

  handleCardSubmit(event, i, cardIndex) {
    // console.log('handle card submit')
    event.preventDefault();
    this.updateCardEditingValue(i, cardIndex);
  }

  updateCardEditingValue(i, cardIndex) {
    const lapLanes = this.state.lapLanes.slice();
    // console.log("before: ", lapLanes[i].cards[cardIndex].editing)
    lapLanes[i].cards[cardIndex].editing = !lapLanes[i].cards[cardIndex].editing;
    // console.log("after: ", lapLanes[i].cards[cardIndex].editing)
    this.setState({
      lapLanes: lapLanes
    })
  }

  renderColumn(lane, i) {
    return (
      <Col key={i} span={5} className="lap-content">
        <BoardColumn
          header={lane.header.name}
          editing={lane.header.editing}
          cards={lane.cards}
          handleHeaderClick={() => this.handleHeaderClick(i)}
          handleHeaderChange={(event) => this.handleHeaderChange(event, i)}
          handleHeaderSubmit={(event) => this.handleHeaderSubmit(event, i)}
          handleAddCardClick={() => this.handleAddCardClick(i)}

          handleCardClick={(cardIndex) => this.handleCardClick(i, cardIndex)}
          handleCardChange={(event, cardIndex) => this.handleCardChange(event, i, cardIndex)}
          handleCardSubmit={(event, cardIndex) => this.handleCardSubmit(event, i, cardIndex)}
          handleDeleteCardClick={(cardIndex) => this.handleDeleteCardClick(i, cardIndex)}
        />
      </Col>
    )
  }

  render() {
    return (
      <div className="height-100">
        <div className="title">
          Front-end demo of Trello!
        </div>

        <Row type="flex" gutter={20} align="top" className="laplanes">
          {this.state.lapLanes ? this.state.lapLanes.map((lane, i) => this.renderColumn(lane, i)) : <div>Loading...</div>}
        </Row>
      </div>
    )
  }
}

export default BoardRow;