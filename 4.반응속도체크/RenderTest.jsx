import React, { Component, memo } from "react";

class RenderTest extends Component {
  state = {
    count: 0,
    array:[]
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  onClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    console.log("렌더링", this.state);
    return (
      <dl>
        <button onClick={this.onClick}>클릭</button>
      </dl>
    );
  }
}

export default RenderTest;
