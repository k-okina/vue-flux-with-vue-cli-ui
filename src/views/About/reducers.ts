import { createStore, combineReducers } from 'redux';

// constant.js
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const INIT_STATE = 'INIT_STATE';

// actionCreator.js
export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

// reducer.js
const initialState = {
  counter: 0,
};

function myState(state: any = initialState, action: any) {
  switch (action.type) {
  case INIT_STATE:
    return initialState;

  case INCREMENT_COUNTER:
    return {
      counter: state.counter + 1,
    };

  default:
    return state;
  }
}

const reducers = combineReducers({ myState });

export { INCREMENT_COUNTER, INIT_STATE };
export default createStore(reducers);
