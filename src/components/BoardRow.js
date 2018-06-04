import React, { Component } from 'react';
import { Row, Col } from 'antd';
import BoardColumn from './BoardColumn';
import 'antd/dist/antd.css'

class BoardRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lapLanes: [
        {
          title: "Waiting For Sales",
          cards: [
            {
              description: "Make it rain"
            },
            {
              description: "Lebron James Co."
            },
            {
              description: "Cats for Days"
            },
            {
              description: "If we don't make this sale we're going to go out of business we better do really really really really well"
            }
          ]
        },
        {
          title: "In Progress",
          cards: [
            {
              description: "Uh oh we're starting already?"
            },
            {
              description: "Million dollar project"
            },
            {
              description: "Dogs for Days"
            },
            {
              description: "Let's go!"
            }
          ]
        },
        {
          title: "QA",
          cards: [
            {
              description: "Finally we're QA ready"
            },
            {
              description: "Katie is cute"
            },
            {
              description: "Taint no doubt about it"
            },
            {
              description: "Laughing Gas"
            }
          ]
        },
        {
          title: "Deployed",
          cards: [
            {
              description: "Enjoyable deployable"
            },
            {
              description: "Jake and Jubi's Snack Co."
            },
            {
              description: "Date Balls"
            },
            {
              description: "Dane's Body Shop"
            }
          ]
        },
      ]
    };
  }

  renderColumn(lane, i) {
    return (
      <Col key={i} span={5} className="lap-content">
        <BoardColumn
          title={lane.title}
          cards={lane.cards}
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