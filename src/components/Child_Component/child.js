import React from 'react';

// Child component
const ChildComponent = props => {
  return (
    <div>
      <p>Data from parent: {props.dataFromParent}</p>
    </div>
  );
};


export default ChildComponent;

//What ever data we are getting from parent by calling args that is reflection in line number 7.
