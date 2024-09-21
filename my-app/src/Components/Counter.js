import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment= () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement=()=> {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0
    }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;