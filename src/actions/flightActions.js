import * as actionTypes from './actionTypes';
import AuthenticationAPI from '../api/AuthenticationAPI';

const setFlights = payload => ({
  type: actionTypes.SET_FLIGHTS,
  payload,
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
  return async dispatch => {
    try {
      const list = await AuthenticationAPI.onGetBookingList();
      dispatch(setFlights(list));
      return list;
    } catch (error) {
      return error;
    }
  };
}

export function getFilteredFlightList() {
  return async dispatch => {
    try {
      const list = await AuthenticationAPI.onGetBookingList();
      dispatch(setFilteredFlights(list));
      return list;
    } catch (error) {
      return error;
    }
  };
}
