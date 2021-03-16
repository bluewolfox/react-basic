const React = require('react');
const { Component } = require("react");

class WordRelay extends Component {
  state = {
    text: "Hello, wepack",
  };

  render() {
    return <div>{this.state.text}</div>;
  }
}

module.exports = WordRelay;
