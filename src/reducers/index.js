import { combineReducers } from 'redux';

import userReducer from './userReducer';
import flightReducer from './flightReducer';

const rootReducer = combineReducers({
  userReducer,
  flightReducer,
});

export default rootReducer;
