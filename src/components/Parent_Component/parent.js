import React from 'react';
import ChildComponent from '../Child_Component/child'; //Here we are importing Child compomnent


// Parent component
const ParentComponent = () => {
  const data = 'Hello World';

  return (
    <div>
      <ChildComponent dataFromParent={data} /> {/** We are calling ChildComponent with arguements(data)*/}
    </div>
  );
};

export default ParentComponent;
