import { combineReducers } from 'redux';
import contactListReducer from './contactListReducer';
import valueOfSortReducer from './valueOfSortReducer';

const rootReducer = combineReducers({
  contactList: contactListReducer,
  valueOfSort: valueOfSortReducer, 
});

export default rootReducer;