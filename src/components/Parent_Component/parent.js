import React from 'react';
import DataContext from './dataContext';
import ChildComponent from '../Child_Component/child';

const ParentComponent = () => {
  const data = 'Hello World';

  return (
    <DataContext.Provider value={data}> {/** This value is being passed to the dataContext component, from where it can be accessed and utilized by any other component. */}
      <ChildComponent dataFromParent={data} /> {/** We are calling the ChildComponent function by passing the 'dataFromParent' property as an argument */}
    </DataContext.Provider>
  );
};

export default ParentComponent;