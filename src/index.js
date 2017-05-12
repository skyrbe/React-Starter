import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent'
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
