import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>
        {  `React + Redux = 🤷` }
      </h1>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));