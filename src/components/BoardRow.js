import React, { Component } from 'react';
import { Row, Col } from 'antd';
import BoardColumn from './BoardColumn';
import 'antd/dist/antd.css'

class BoardRow extends Component {
  render() {
    return (
      <div className="height-100 u-fancy-scrollbar">
        <div className="title">
          Front-end demo of Trello!
        </div>
        <Row type="flex" gutter={20} align="top" className="laplanes">
          <Col span={5} className="lap-content">
            <BoardColumn />
          </Col>
          <Col span={5} className="lap-content">
            <BoardColumn />
          </Col>
          <Col span={5} className="lap-content">
            <BoardColumn />
          </Col>
          <Col span={5} className="lap-content">
            <BoardColumn />
          </Col>
          <Col span={5} className="lap-content">
            <BoardColumn />
          </Col>
        </Row>
      </div>
    )
  }
}

export default BoardRow;