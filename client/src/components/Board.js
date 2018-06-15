import React, { Component } from 'react';
import BoardRow from './BoardRow'

class Board extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <BoardRow />
    );
  }
}

export default Board;
