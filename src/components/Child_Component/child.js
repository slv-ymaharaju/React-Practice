import React, { useContext } from 'react';
import DataContext from '../Parent_Component/dataContext';


const ChildComponent = props => {
  const data = useContext(DataContext)

  return (
    <div>
      <p>Data from parent (props): {props.dataFromParent}</p>
      <p>Data from parent (useContext): {data}</p>
    </div>
  );
};

export default ChildComponent;

// What ever data we are getting from parent by calling ChildComponent with args that is reflection in line number 11.
// We are using useContext here because we created context in dataContext component and stored data there to use that data we need to use useContext hook
