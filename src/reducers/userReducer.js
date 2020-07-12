import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: [],
};

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.SET_USER: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
