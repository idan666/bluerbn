import * as actionTypes from './actionTypes';

const flights = [
  {
    id: 1,
    from: 'Israel',
    to: 'Cyprus',
    departureTime: 'now',
    landingTime: 'In 2 hours',
    price: '12$',
  },
  {
    id: 2,
    from: 'Israel',
    to: 'Cyprus',
    departureTime: 'now',
    landingTime: 'In 2 hours',
    price: '12$',
  },
  {
    id: 3,
    from: 'Israel',
    to: 'Cyprus',
    departureTime: 'now',
    landingTime: 'In 2 hours',
    price: '12$',
  },
];

const setFlights = () => ({
  type: actionTypes.SET_FLIGHTS,
  payload: flights,
});

const setFilteredFlights = payload => ({
  type: actionTypes.SET_FILTERED_FLIGHTS,
  payload,
});

export const clearFlights = () => ({
  type: actionTypes.CLEAR_FLIGHTS,
  payload: [],
});

export function getFlightList() {
  return flights;
  // return dispatch => {
  //   try {
  //     const list = flights;
  //     dispatch(setFlights(list));
  //     return list;
  //   } catch (error) {
  //     return error;
  //   }
  // };
}

export function getFilteredFlightList(filter) {
  return dispatch => {
    try {
      const filtered = [];
      for (let i = 0; i < flights.length; i++) {
        if (flights[i].to.contains(filter)) {
          filtered.push(flights[i]);
        }
      }
      dispatch(setFilteredFlights(filtered));
      return filtered;
    } catch (error) {
      return error;
    }
  };
}
