import React, { Component } from 'react';
import { Row, Col } from 'antd';
import BoardColumn from './BoardColumn';
import 'antd/dist/antd.css';
import lapLanes from '../data/lapLanes';

class BoardRow extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = lapLanes;
  }

  handleClick(i) {
    const lapLanes = this.state.lapLanes.slice();
    if (!lapLanes[i].title.editing) {
      this.updateEditingValue(i)
    }
  }

  handleChange(event, i) {
    const lapLanes = this.state.lapLanes.slice();
    lapLanes[i].title.name = event.target.value;
    this.setState({
      lapLanes: lapLanes
    })
  }

  handleSubmit(event, i) {
    console.log('test')
    event.preventDefault();
    this.updateEditingValue(i)
  }

  updateEditingValue(i) {
    const lapLanes = this.state.lapLanes.slice();
    lapLanes[i].title.editing = !lapLanes[i].title.editing;
    this.setState({
      lapLanes: lapLanes
    })
  }

  renderColumn(lane, i) {
    return (
      <Col key={i} span={5} className="lap-content">
        <BoardColumn
          title={lane.title.name}
          editing={lane.title.editing}
          cards={lane.cards}
          onHeaderClick={() => this.handleClick(i)}
          onHeaderChange={(event) => this.handleChange(event, i)}
          onHeaderSubmit={(event) => this.handleSubmit(event, i)}
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
          {this.state.lapLanes.map((lane, i) => this.renderColumn(lane, i))}
        </Row>
      </div>
    )
  }
}

export default BoardRow;