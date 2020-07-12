import * as actionTypes from '../actions/actionTypes';

const initialState = {
  flights: [],
  filteredFlights: [],
};

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.SET_FLIGHTS: {
      return { ...state, flights: action.payload };
    }
    case actionTypes.SET_FILTERED_FLIGHTS: {
      return { ...state, filteredFlights: action.payload };
    }
    case actionTypes.CLEAR_FLIGHTS: {
      return initialState;
    }
    case actionTypes.ADD_FLIGHT: {
      const newFlight = action.payload;
      return {
        ...state,
        flights: [...state.flights, newFlight],
      };
    }
    default: {
      return state;
    }
  }
}
