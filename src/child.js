import React from 'react';

const Child = function(props) {
  console.log("props ", props);
  props.parentFunc(10);
  return (
    <div>{props.childName}</div>
  );
}

export default Child;
