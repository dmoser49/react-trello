import React, { Component } from 'react';
import BoardRow from './BoardRow';
import axios from 'axios';

class Board extends Component {

  state = {
    lapLanes: {}
  };

  componentDidMount() {
    const self = this;
    this.getData()
      .then(res => {self.setState({ lapLanes: res })})
      .catch(err => console.log(err));
  }

  getData = async () => {
    const res = await axios.get('/api/getBoard');
    return res.data[0].lapLanes;
  };

  render() {
    return (
      <BoardRow lapLanes={this.state.lapLanes}/>
    );
  }
}

export default Board;
