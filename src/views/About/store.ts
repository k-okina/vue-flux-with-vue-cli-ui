import { combineReducers } from 'redux';

// constant.js
const CHANGE_STATE = 'CHANGE_STATE';

// actionCreator.js
export function changeMyState(nextState: any) {
  return {
    type: CHANGE_STATE,
    nextState,
  };
}

// reducer.js
const initialState = {
  currentState: '最初の状態',
};

function myState(state: any = initialState, action: any) {
  switch (action.type) {

  case CHANGE_STATE:
    return {
      currentState: state.nextState,
    };

  default:
    return state;
  }
}

const reducers = combineReducers({ myState });

export default reducers;
