import { combineReducers } from 'redux';
import contactListReducer from './contactListReducer';
import valueOfSortReducer from './valueOfSortReducer';
import rangeOfContactReducer from './rangeOfContactReducer';

const rootReducer = combineReducers({
  contactList: contactListReducer,
  valueOfSort: valueOfSortReducer,
  rangeOfContact: rangeOfContactReducer,
});

export default rootReducer;