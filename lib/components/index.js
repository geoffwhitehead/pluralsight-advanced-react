import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class App extends Component {
  state = {
    answer: 42,
  };
  asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
      <h2>Helllw class bal == {this.state.answer}</h2>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);