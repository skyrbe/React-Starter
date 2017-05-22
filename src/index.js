import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
//Write some HTML that can be rendered on the screen
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Plug this HTML into the DOM
ReactDOM.render(<App/>,document.getElementById("react_container"));
