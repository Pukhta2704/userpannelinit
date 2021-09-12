import { combineReducers } from 'redux';
import user_Reducer from './userReducer';

export default combineReducers({
  Users: user_Reducer,
});
