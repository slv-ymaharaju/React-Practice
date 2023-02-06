import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  selected: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT':
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

const store = configureStore({reducer});

export default store;


// This code imports the configureStore function from the @reduxjs/toolkit library.

// The initialState is an object with a single property selected which is an empty string.

// The reducer function takes the current state and an action as arguments and returns a new state based on the action type. If the action type is SELECT, it returns a new state with the selected property set to the value of action.selected. If the action type is not SELECT, it simply returns the current state.

// The store is created using the configureStore function, passing the reducer function as an argument.

// Finally, the store is exported as the default export so it can be used in other parts of the application.

