'use strict';

import React, { Component } from 'react';
import Thread from './Thread.js';
import './styles/App.css';

// Props contract:
// {
//    initialState: Object
// }

class App extends Component {

  constructor(props) {
    super(props);
    // init the state for the first time
    this.state = props.initialState;
  }

  render() {
    let thread = this.state.issue;

    return (
      <div className="App">
        <div className="App-info">
          Here will be the filters and the pie chart!
        </div>
        <Thread {...thread} />
      </div>
    );
  }
}

export default App;
