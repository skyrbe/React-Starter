import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Child from './child';
//2 steps
//Generate some HTML Content

class App extends Component {
  constructor() {
    super();
    this.state = {
      value : 1
    }
  }
  clickHandler(someParam) {
    console.log("parent function called", someParam);
  }
  render() {
    console.log("current state ", this.state);
    return (
        <div>
          <Child childName = "Child 1" parentFunc = {this.clickHandler}/>
        </div>
      );
  }
}
// const App = function() {
//   return (
//     <div>
//       <Child childName = "Child 1" />
//       <Child childName = "Child 2" />
//     </div>
//   );
// }
//Put that HTML content into the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
